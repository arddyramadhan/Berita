<?php

use App\Http\Controllers\BeritaController;
use App\Http\Controllers\KategoriController;
use App\Http\Controllers\KegiatanController;
use App\Http\Controllers\PenggunaController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::prefix('users')->group(function(){
        Route::get('', [UserController::class, 'index']);
        Route::post('', [UserController::class, 'store']);
        Route::get('{user}', [UserController::class, 'show']);
        Route::patch('{user}', [UserController::class, 'update']);
        Route::delete('{user}', [UserController::class, 'destroy']);
    });
    Route::prefix('kategori')->group(function(){
        Route::get('', [KategoriController::class, 'index']);
        Route::post('', [KategoriController::class, 'store']);
        Route::get('{kategori}', [KategoriController::class, 'show']);
        Route::patch('{kategori}', [KategoriController::class, 'update']);
        Route::delete('{kategori}', [KategoriController::class, 'destroy']);
    });
    Route::prefix('pengguna')->group(function(){
        Route::get('', [PenggunaController::class, 'index']);
        Route::post('', [PenggunaController::class, 'store']);
        Route::get('{pengguna}', [PenggunaController::class, 'show']);
        Route::patch('{pengguna}', [PenggunaController::class, 'update']);
        Route::delete('{pengguna}', [PenggunaController::class, 'destroy']);
    });
    Route::prefix('berita')->group(function(){
        // Route::get('', [BeritaController::class, 'index']);
        Route::post('', [BeritaController::class, 'store']);
        // Route::get('{berita}', [BeritaController::class, 'show']);
        Route::patch('{berita}', [BeritaController::class, 'update']);
        Route::delete('{berita}', [BeritaController::class, 'destroy']);
        // Route::get('/bySlug/{slug}', [BeritaController::class, 'slug']);
    });
    Route::prefix('kegiatan')->group(function(){
        // Route::get('', [KegiatanController::class, 'index']);
        Route::post('', [KegiatanController::class, 'store']);
        // Route::get('{kegiatan}', [KegiatanController::class, 'show']);
        Route::patch('{kegiatan}', [KegiatanController::class, 'update']);
        Route::delete('{kegiatan}', [KegiatanController::class, 'destroy']);
        // Route::get('/bySlug/{slug}', [KegiatanController::class, 'slug']);
    });
});

//? for landing
Route::prefix('kegiatan')->group(function () {
    Route::get('', [KegiatanController::class, 'index']);
    Route::get('{kegiatan}', [KegiatanController::class, 'show']);
    Route::get('/bySlug/{slug}', [KegiatanController::class, 'slug']);
});
Route::prefix('berita')->group(function () {
    Route::get('', [BeritaController::class, 'index']);
    Route::get('{berita}', [BeritaController::class, 'show']);
    Route::get('/bySlug/{slug}', [BeritaController::class, 'slug']);
});


