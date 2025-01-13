<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\ArticleComment;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function index()
    {
        $articles = Article::all();
        foreach ($articles as $one) {
            $one->comment_counter = ArticleComment::where('article_id', $one->id)->count();
        }
        return response()->json($articles, 200);
    }
    public function show($id)
    {
        $article = Article::select("title", "text", "src AS image", "created_at AS date")->findOrFail($id);
        $comments = ArticleComment::where('article_id', $id)
            ->join("users", "users.id", "=", "article_comments.user_id")
            ->select('user_id', "article_comments.created_at AS date", "users.src AS src", 'name', 'text')
            ->get();
        $article->comment_counter = count($comments);
        $article->comments = $comments;
        return response()->json($article, 200);
    }
    public function addComment(Request $request, $id)
    {
        $this->validate($request, [
            "text" => "required"
        ]);
        $comment = [
            'text' => $request->text,
            'article_id' => $id,
            'user_id' => auth()->user()->id,
        ];
        $comment = ArticleComment::create($comment);
        $comment->user_id = auth()->user()->id;
        $comment->src = auth()->user()->src;
        $comment->date = $comment->created_at;
        return response()->json($comment, 200);
    }
}
