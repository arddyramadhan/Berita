<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Kegiatan>
 */
class KegiatanFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $nama = fake()->sentence();
        return [
            'nama' => $nama,
            'slug' => Str::slug($nama),
            'alamat' => fake()->streetAddress(),
            'mulai' => fake()->dateTime($max = 'now', $timezone = null, $date = '-1 years', $interval = '+5 days'),
            'selesai' => fake()->dateTime($max = 'now', $timezone = null, $date = '-1 years', $interval = '+10 days'),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
