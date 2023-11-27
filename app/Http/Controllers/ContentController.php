<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Content;
use Inertia\Inertia;

class ContentController extends Controller
{
    public function index()
    {
        $contents = Content::all()->map(function ($content) {
            // Assuming the thumbnails are stored as JSON in the database
            $thumbnails = json_decode($content->thumbnail, true);

            // Transform each thumbnail path to a full URL
            foreach ($thumbnails as $type => $sizes) {
                foreach ($sizes as $size => $path) {
                    $thumbnails[$type][$size] = asset($path);
                }
            }

            // Update the thumbnail attribute with the transformed paths
            $content->thumbnail = $thumbnails;

            return $content;
        });

        return Inertia::render('Dashboard', [
            'contents' => $contents
        ]);
    }
}
