<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BeritaResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'judul' => $this->judul,
            'slug' => $this->slug,
            'isi' => $this->isi,
            'limit_isi' => substr($this->isi, 0, 150),
            'like' => $this->like,
            'melihat' => $this->melihat,
            'foto' => $this->foto ? env('APP_URL') . '/storage' . $this->foto : '',
            'kategori' => $this->kategori,
            'tgl_berita' => date('dM', strtotime($this->created_at)),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
