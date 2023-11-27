<?php

namespace App\Services;

class ThumbnailService
{
    public static function transformThumbnails($movie)
    {
        if (isset($movie->thumbnail_trending) && is_string($movie->thumbnail_trending)) {
            $movie->thumbnail_trending = self::transformThumbnailPaths(json_decode($movie->thumbnail_trending, true));
        }

        if (isset($movie->thumbnail_regular) && is_string($movie->thumbnail_regular)) {
            $movie->thumbnail_regular = self::transformThumbnailPaths(json_decode($movie->thumbnail_regular, true));
        }

        return $movie;
    }

    private static function transformThumbnailPaths($thumbnails)
    {
        foreach ($thumbnails as $type => $sizes) {
            foreach ($sizes as $size => $path) {
                $thumbnails[$type][$size] = asset($path);
            }
        }
        return $thumbnails;
    }
}