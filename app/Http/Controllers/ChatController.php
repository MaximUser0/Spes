<?php

namespace App\Http\Controllers;

use App\Models\Chat;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    public function index()
    {
        $chats = Chat::where("user_one_id", auth()->user()->id)
            ->orWhere("user_two_id", auth()->user()->id)
            ->get();
        return response()->json($chats, 200);
    }
    public function show($id)
    {
        $chat = Chat::where("user_one_id", auth()->user()->id)
            ->where("id", $id)
            ->orWhere("user_two_id", auth()->user()->id)
            ->where("id", $id)
            ->get();
        return response()->json($chat, 200);
    }
    public function create(Request $request)
    {
        $validated = $this->validate($request, ['user_id' => "required|exists:users,id"]);
        $alreadyExist = Chat::where("user_one_id", auth()->user()->id)
            ->where("user_two_id", $request->user_id)
            ->orWhere("user_two_id", auth()->user()->id)
            ->where("user_one_id", $request->user_id)
            ->get();
        if (count($alreadyExist) != 0) {
            return response()->json($alreadyExist, 200);
        }
        $chat = Chat::create(['user_one_id' => auth()->user()->id, 'user_two_id' => $request->user_id]);
        return response()->json($chat, 200);
    }
}
