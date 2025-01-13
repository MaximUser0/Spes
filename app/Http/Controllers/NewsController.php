<?php

namespace App\Http\Controllers;

use App\Models\News;
use App\Models\NewsComment;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    public function index()
    {
        $news = News::all();
        foreach($news as $one){
            $one->comment_counter = NewsComment::where('news_id', $one->id)->count();
        }
        return response()->json($news, 200);
    }
    public function show($id)
    {
        $news = News::select("title", "text", "src AS image", "created_at AS date")->findOrFail($id);
        $comments = NewsComment::where('news_id', $id)
            ->join("users", "users.id", "=", "news_comments.user_id")
            ->select('user_id', "news_comments.created_at AS date", "users.src AS src", 'name', 'text')
            ->get();
        $news->comment_counter = count($comments);
        $news->comments = $comments;
        return response()->json($news, 200);
    }

    public function addComment(Request $request, $id)
    {
        $this->validate($request, [
            "text" => "required"
        ]);
        $comment = [
            'text' => $request->text,
            'news_id' => $id,
            'user_id' => auth()->user()->id,
        ];
        $comment = NewsComment::create($comment);
        $comment->user_id = auth()->user()->id;
        $comment->src = auth()->user()->src;
        $comment->date = $comment->created_at;
        return response()->json($comment, 200);
    }
}
