<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kategori extends Model
{
    use HasFactory;
    protected $table = 'kategori';
    protected $guarded = ['id'];

    public function berita()
    {
        return $this->hasMany(Berita::class, 'kategori_id');
    }

    public function pengguna()
    {
        return $this->hasMany(Pengguna::class, 'kategori_id');
    }
}
