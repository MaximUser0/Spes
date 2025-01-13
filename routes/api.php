<?php

use App\Http\Controllers\ArticleCommentController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\NewsController;
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
        Route::patch('user', [UserController::class, 'update']);

        Route::post('article/{id}/comment', [ArticleController::class, 'addComment']);
        Route::post('news/{id}/comment', [NewsController::class, 'addComment']);


        Route::middleware('admin')->group(
            function () {

            }
        );
    }
);
