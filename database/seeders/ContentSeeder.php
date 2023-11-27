<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class ContentSeeder extends Seeder
{
    public function run()
    {
        // Load JSON file
        $json = File::get("database/data/data.example.json");

        // Decode the JSON data into an array
        $contents = json_decode($json, true); // true to get associative arrays

        // dd($contents);

        // Iterate over each content item and insert into the database
        foreach ($contents as $content) {
            DB::table('contents')->insert([
                'title' => $content['title'],
                'thumbnail_trending_small' => $content['thumbnail']['trending']['small'] ?? null,
                'thumbnail_trending_large' => $content['thumbnail']['trending']['large'] ?? null,
                'thumbnail_regular_small' => $content['thumbnail']['regular']['small'],
                'thumbnail_regular_medium' => $content['thumbnail']['regular']['medium'],
                'thumbnail_regular_large' => $content['thumbnail']['regular']['large'],
                'year' => $content['year'],
                'category' => $content['category'],
                'rating' => $content['rating'],
                'is_bookmarked' => $content['isBookmarked'],
                'is_trending' => $content['isTrending'],
                // You can add more fields here as per your database schema
            ]);
        }
    }
}
