<?php

namespace App\Http\Controllers;

use App\Http\Resources\PenggunaResource;
use App\Models\Pengguna;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class PenggunaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Pengguna::paginate(12);
        return PenggunaResource::collection($data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            // $data_user['username']= $request->username;
            // $data_user['email']= $request->email;
            // $data_user['akses']= 'admin';
            // $data_user['password']= Hash::make($request->password);
            // $user = User::create($data_user);

            $data['nama'] = $request->nama;
            $data['jenis_kelamin'] = $request->jenis_kelamin;
            $data['jabatan'] = $request->jabatan;
            $data['tempat_lahir'] = $request->tempat_lahir;
            $data['tgl_lahir'] = $request->tgl_lahir;
            $data['pangkat'] = $request->pangkat;
            $data['facebook'] = $request->facebook;
            $data['twitter'] = $request->twitter;
            $data['instagram'] = $request->instagram;
            // $data['user_id'] = $user->id;
            $data['kategori_id'] = $request->kategori_id;
            $imageName = Str::random(32) . "." .
            $request->foto->getClientOriginalExtension();
            $data['foto'] = '/foto/'.$imageName;
            Pengguna::create($data);
            Storage::disk('public')->put('/foto/' . $imageName, file_get_contents($request->foto));
            return response()->json([
                'status' => 'berhasil',
                'info' => 'Menambahkan Data Pengguna'
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'info' => "Something went really wrong! => ".$th
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Pengguna $kategori)
    {
        return response()->json([
            'info' => 'success',
            'data' => PenggunaResource::make($kategori)
        ], 200);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Pengguna $kategori)
    {
        $data = $request->validate([
            'nama' => 'required',
        ]);
        $kategori->update($data);
        return response()->json([
            'status' => 'berhasil',
            'info' => 'Updated Data'
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pengguna $kategori)
    {
        $kategori->delete();
        return response()->json([
            'status' => 'berhasil',
            'info' => 'Deleted Data'
        ], 200);
    }
}
