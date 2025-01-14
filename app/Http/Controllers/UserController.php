<?php

namespace App\Http\Controllers;

use App\Models\Friend;
use App\Models\Subscriber;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        return response()->json(auth()->user(), 200);
    }
    public function show($id)
    {
        $user = User::find($id);
        unset($user->is_admin);
        $isSubscribedForMe = Subscriber::where('user_id', auth()->user()->id)->where('subscriber_id', $id)->count() != 0;
        if ($isSubscribedForMe) {
            $user->relation = 1;
            return response()->json($user, 200);
        }
        $isISubscribedForHim = Subscriber::where('user_id', auth()->user()->id)->where('subscriber_id', $id)->count() != 0;
        if ($isISubscribedForHim) {
            $user->relation = 2;
            return response()->json($user, 200);
        }
        $isFriends = Friend::where('user_one_id', auth()->user()->id)
            ->where('user_two_id', $id)
            ->orWhere('user_one_id', $id)
            ->where('user_two_id', auth()->user()->id)
            ->count() != 0;
        if ($isFriends) {
            $user->relation = 3;
            return response()->json($user, 200);
        }
        $user->relation = 0;
        return response()->json($user, 200);
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
