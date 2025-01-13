<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        return response()->json(auth()->user(), 200);
    }
    public function update(Request $request)
    {
        $check = [
            'name' => 'required|regex:/^[а-яА-Яa-zA-Z0-9]+ +[а-яА-Яa-zA-Z0-9]+$/u|max:255',
            'date_of_birth' => '',
            'purpose_of_dating' => '',
            'hobbies' => '',
            'about' => '',
            'email' => 'email|unique:users,email',
            'number_phone' => 'required|regex:/^[+0-9]+$/u|max:15',
            'city' => '',
        ];
        $validated = $this->validate($request, $check);
        auth()->user()->update($validated);
        return response()->json(auth()->user(), 200);
    }
}
