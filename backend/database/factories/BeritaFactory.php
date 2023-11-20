<?php

namespace Database\Factories;

use App\Models\Kategori;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Berita>
 */
class BeritaFactory extends Factory
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
        $judul = fake()->sentence();
        return [
            'judul' => $judul,
            'slug' => Str::slug($judul),
            'isi' => fake()->paragraph(),
            'kategori_id' => Arr::random($id_kategori),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
