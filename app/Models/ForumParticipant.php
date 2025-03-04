<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ForumParticipant extends Model
{
    use HasFactory;
    protected $fillable = [
        "user_id",
        "forum_id"
    ];
}
