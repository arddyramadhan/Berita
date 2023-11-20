<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PenggunaResource extends JsonResource
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
            'jenis_kelamin' => $this->jenis_kelamin,
            'jabatan' => $this->jabatan,
            'tempat_lahir' => $this->tempat_lahir,
            'tgl_lahir' => date('d-m-Y', strtotime($this->tgl_lahir)),
            'tempat_tgl_lahir' => $this->tempat_lahir.', '. date('d-m-Y', strtotime($this->tgl_lahir)),
            'pangkat' => $this->pangkat,
            'kategori' => $this->kategori,
            'foto' => $this->foto ? env('APP_URL').'/storage'. $this->foto : '',
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
