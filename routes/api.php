<?php

use App\Http\Controllers\ArticleCommentController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\FriendController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\SubscriberController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::post('signup', [AuthController::class, 'create']);
Route::post('login', [AuthController::class, 'login']);

Route::get('news', [NewsController::class, 'index']);
Route::get('news/{id}', [NewsController::class, 'show']);
Route::get('article', [ArticleController::class, 'index']);
Route::get('article/{id}', [ArticleController::class, 'show']);

Route::middleware('auth:sanctum')->group(
    function () {
        Route::get('logout', [AuthController::class, 'logout']);
        Route::get('user', [UserController::class, 'index']);
        Route::get('user/{id}', [UserController::class, 'show']);
        Route::patch('user', [UserController::class, 'update']);

        Route::post('article/{id}/comment', [ArticleController::class, 'addComment']);
        Route::post('news/{id}/comment', [NewsController::class, 'addComment']);

        Route::get('friend', [FriendController::class, 'index']);
        Route::post('friend', [FriendController::class, 'create']);
        Route::delete('friend/{user_id}', [FriendController::class, 'delete']);
        Route::get('subscriber', [SubscriberController::class, 'index']);
        Route::get('subscriptions', [SubscriberController::class, 'indexMy']);
        Route::delete('subscriber/{user_id}', [SubscriberController::class, 'delete']);

        Route::get('chat', [ChatController::class, 'index']);
        Route::get('chat/{id}', [ChatController::class, 'show']);
        Route::post('chat', [ChatController::class, 'create']);


        Route::middleware('admin')->group(
            function () {

            }
        );
    }
);
