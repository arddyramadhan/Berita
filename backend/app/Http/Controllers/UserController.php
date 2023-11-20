<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json([
            'info' => 'success',
            'data' => UserResource::collection(User::get())
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'first' => 'required',
            'last' => 'required',
            'email' => 'required',
            'password' => 'required',
            'password_confirmation' => 'required',
            'akses' => 'required',
        ]);

        if ($request->password != $request->password_confirmation) {
            return response()->json([
                'status' => 'gagal',
                'info' => 'Password Confirmasi tidak sesuai'
            ], 401);
        } else {
            $data = [
                'name' => $request->first . ' ' . $request->last,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'akses' => $request->akses,
            ];
            User::create($data);
            return response()->json([
                'status' => 'berhasil',
                'info' => 'Menambahkan Data'
            ], 200);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        return response()->json([
            'info' => 'success',
            'data' => UserResource::make($user)
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        if ($request->password != $request->password_confirmation) {
            return response()->json([
                'status' => 'gagal',
                'info' => 'Password Confirmasi tidak sesuai'
            ], 401);
        } else {
            $data = [
                'name' => $request->name,
                'email' => $request->email,
                'password' => $request->password ? Hash::make($request->password) : $user->password,
                'akses' => $request->akses,
            ];
            $user->update($data);
            return response()->json([
                'status' => 'berhasil',
                'info' => 'Pembaharuan Data'
            ], 200);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $user->delete();
        return response()->json([
            'info' => 'success',
            'data' => 'data dihapus'
        ], 200);
    }
}
