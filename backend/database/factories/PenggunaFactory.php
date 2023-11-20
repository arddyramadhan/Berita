<?php

namespace Database\Factories;

use App\Models\Kategori;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Pengguna>
 */
class PenggunaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $id_kategori = [];
        $data = Kategori::select('id')->get();
        if ($data) {
            foreach ($data as $value) {
                array_push($id_kategori, $value->id);
            };
        }
        return [
            'nama' => fake()->name(),
            'jenis_kelamin' => Arr::random(['L','P']),
            'jabatan' => 'belum ada',
            'tempat_lahir' => 'Gorontalo',
            'tgl_lahir' => now(),
            'pangkat' => 'Gold 3',
            'kategori_id' => Arr::random($id_kategori),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
