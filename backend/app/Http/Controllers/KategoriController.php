<?php

namespace App\Http\Controllers;

use App\Http\Resources\KategoriResource;
use App\Models\Kategori;
use Illuminate\Http\Request;

class KategoriController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Kategori::paginate(10);
        return KategoriResource::collection($data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'nama' => 'required',
        ]);
        Kategori::create($data);
        return response()->json([
            'status' => 'berhasil',
            'info' => 'Menambahkan Data'
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(Kategori $kategori)
    {
        return response()->json([
            'info' => 'success',
            'data' => KategoriResource::make($kategori)
        ], 200);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Kategori $kategori)
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
    public function destroy(Kategori $kategori)
    {
        $kategori->delete();
        return response()->json([
            'status' => 'berhasil',
            'info' => 'Deleted Data'
        ], 200);
    }
}
