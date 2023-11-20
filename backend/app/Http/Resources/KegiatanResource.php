<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class KegiatanResource extends JsonResource
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
            'nama' => $this->nama,
            'alamat' => $this->alamat,
            'mulai' => $this->mulai,
            'waktu_mulai' => date('H:sa', strtotime($this->mulai)),
            'tgl_mulai' => date('d', strtotime($this->mulai)),
            'bln_mulai' => date('M', strtotime($this->mulai)),
            'tahun_mulai' => date('Y', strtotime($this->mulai)),
            'selesai' => $this->selesai,
            'waktu_selesai' => date('H:sa', strtotime($this->selesai)),
            'tgl_selesai' => date('d', strtotime($this->selesai)),
            'bln_selesai' => date('M', strtotime($this->selesai)),
            'tahun_selesai' => date('Y', strtotime($this->selesai)),
            'foto' => $this->foto ? '/storage/' . $this->foto : '',
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
