<?php

namespace App\Http\Controllers;

use App\Models\Subscriber;
use Illuminate\Http\Request;

class SubscriberController extends Controller
{
    public function index()
    {
        $subscribers = Subscriber::where("user_id", auth()->user()->id)
            ->join('users', 'users.id', '=', 'subscribers.subscriber_id')
            ->select('src', 'name', 'users.id AS user_id', 'subscribers.id AS id')
            ->get();
        return response()->json($subscribers, 200);
    }
    public function indexMy()
    {
        $subscribers = Subscriber::where("subscriber_id", auth()->user()->id)
            ->join('users', 'users.id', '=', 'subscribers.user_id')
            ->select('src', 'name', 'users.id AS user_id', 'subscribers.id AS id')
            ->get();
        return response()->json($subscribers, 200);
    }
    public function delete($user_id)
    {
        $friend = Subscriber::where("subscriber_id", auth()->user()->id)
            ->where("user_id", $user_id)
            ->first();
        $friend->delete();
        return response('', 204);
    }
}
