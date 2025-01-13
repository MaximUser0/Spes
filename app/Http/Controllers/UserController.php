<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function getUser()
    {
        return response()->json(auth()->user(), 200);
    }
}
