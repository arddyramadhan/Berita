<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();
        // \App\Models\Berita::factory(100)->create();
        // \App\Models\Pengguna::factory(5)->create();
        \App\Models\Kegiatan::factory(100)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Arddy Ramadhan',
        //     'email' => 'arddy@dali.com',
        //     'akses' => 'admin',
        // ]);
        // \App\Models\User::factory()->create([
        //     'name' => 'Lusi Abdilani Makalalag',
        //     'email' => 'lusi@abdilani.com',
        //     'akses' => 'operator',
        // ]);
        // \App\Models\User::factory()->create([
        //     'name' => 'Lisa Tapola',
        //     'email' => 'lusi@lisa.com',
        //     'akses' => 'operator',
        // ]);
        // \App\Models\User::factory()->create([
        //     'name' => 'Kris Dayanti',
        //     'email' => 'kris@kris.com',
        //     'akses' => 'operator',
        // ]);
    }
}
