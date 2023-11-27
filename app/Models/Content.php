<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Content extends Model
{
    protected $fillable = [
        'title',
        'thumbnail_trending',
        'thumbnail_regular',
        'year',
        'category',
        'rating',
        'is_bookmarked',
        'is_trending',
    ];

    // Specify the fields that should be cast to specific types
    protected $casts = [
        'thumbnail_trending' => 'array',
        'thumbnail_regular' => 'array',
        'is_bookmarked' => 'boolean',
        'is_trending' => 'boolean',
        'year' => 'integer',
    ];
}
