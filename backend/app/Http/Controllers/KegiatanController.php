<?php

namespace App\Http\Controllers;

use App\Http\Resources\KegiatanResource;
use App\Models\Kegiatan;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class KegiatanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Kegiatan::paginate(8);
        return KegiatanResource::collection($data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $data['nama'] = $request->nama;
            $data['alamat'] = $request->alamat;
            $data['mulai'] = $request->mulai;
            $data['selesai'] = $request->selesai;
            $imageName = Str::random(32) . "." .
                $request->foto->getClientOriginalExtension();
            $data['foto'] = '/kegiatan/' . $imageName;
            Kegiatan::create($data);
            Storage::disk('public')->put('/kegiatan/' . $imageName, file_get_contents($request->foto));
            return response()->json([
                'status' => 'berhasil',
                'info' => 'Menambahkan Data Kegiatan'
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'info' => "Something went really wrong! => " . $th
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Kegiatan $kategori)
    {
        return response()->json([
            'info' => 'success',
            'data' => KegiatanResource::make($kategori)
        ], 200);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Kegiatan $kategori)
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
    public function destroy(Kegiatan $kategori)
    {
        $kategori->delete();
        return response()->json([
            'status' => 'berhasil',
            'info' => 'Deleted Data'
        ], 200);
    }
}
