<?php

namespace App\Http\Controllers;

use App\Http\Resources\BeritaResource;
use App\Models\Berita;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class BeritaController extends Controller
{
    public function index()
    {
        $data =  Berita::orderBy('created_at', 'desc')->paginate(15);
        return  BeritaResource::collection($data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $data['judul'] = $request->judul;
            $data['isi'] = $request->isi;
            $data['kategori_id'] = $request->kategori_id;
            $data['created_at'] = $request->created_at;
            $data['slug'] = Str::slug($request->judul);
            $imageName = Str::random(32) . "." .
                $request->foto->getClientOriginalExtension();
            $data['foto'] = '/foto/' . $imageName;
            Berita::create($data);
            Storage::disk('public')->put('/foto/' . $imageName, file_get_contents($request->foto));
            return response()->json([
                'status' => 'berhasil',
                'info' => 'Menambahkan Data Berita'
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
    public function show(Berita $kategori)
    {
        return response()->json([
            'info' => 'success',
            'data' => BeritaResource::make($kategori)
        ], 200);
    }

    public function slug($slug)
    {
        $data = Berita::where('slug', $slug)->first();
        $old = Berita::where('id','<', $data->id)->orderBy('id','desc')->first();
        $new = Berita::where('id', '>', $data->id)->first();
        $first = Berita::orderBy('created_at', 'asc')->first()->id;
        $last = Berita::orderBy('created_at', 'desc')->first()->id;
        return response()->json([
            'info' => 'success',
            'data' => BeritaResource::make($data),
            'old' => $old ? BeritaResource::make($old) : '',
            'new' => $new ? BeritaResource::make($new) : '',
            'first' => $first ?? '',
            'last' => $last ?? '',
        ], 200);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Berita $kategori)
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
    public function destroy(Berita $kategori)
    {
        $kategori->delete();
        return response()->json([
            'status' => 'berhasil',
            'info' => 'Deleted Data'
        ], 200);
    }
}
