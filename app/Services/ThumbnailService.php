<?php

namespace App\Services;

class ThumbnailService
{
    public static function transformThumbnails($movie)
    {
        if (isset($movie->thumbnail_trending) && is_string($movie->thumbnail_trending)) {
            $decodedThumbnails = json_decode($movie->thumbnail_trending, true);
            if (is_array($decodedThumbnails)) {
                $movie->thumbnail_trending = self::transformThumbnailPaths($decodedThumbnails);
            }
        }

        if (isset($movie->thumbnail_regular) && is_string($movie->thumbnail_regular)) {
            $decodedThumbnails = json_decode($movie->thumbnail_regular, true);
            if (is_array($decodedThumbnails)) {
                $movie->thumbnail_regular = self::transformThumbnailPaths($decodedThumbnails);
            }
        }

        return $movie;
    }

    private static function transformThumbnailPaths($thumbnails)
    {
        if (is_array($thumbnails)) {
            foreach ($thumbnails as $type => &$sizes) {
                if (is_array($sizes)) {
                    foreach ($sizes as $size => $path) {
                        $sizes[$size] = asset($path);
                    }
                }
            }
        }
        return $thumbnails;
    }
}
