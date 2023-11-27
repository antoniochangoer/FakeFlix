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

        // Iterate over each content item and insert into the database
        foreach ($contents as $content) {
            DB::table('contents')->insert([
                'title' => $content['title'],
                'thumbnail_trending' => json_encode([
                    'small' => $content['thumbnail']['trending']['small'] ?? null,
                    'large' => $content['thumbnail']['trending']['large'] ?? null,
                ]),
                'thumbnail_regular' => json_encode([
                    'small' => $content['thumbnail']['regular']['small'] ?? null,
                    'medium' => $content['thumbnail']['regular']['medium'] ?? null,
                    'large' => $content['thumbnail']['regular']['large'] ?? null,
                ]),
                'year' => $content['year'],
                'category' => $content['category'],
                'rating' => $content['rating'],
                'is_bookmarked' => $content['isBookmarked'],
                'is_trending' => $content['isTrending'],
            ]);

        }
    }
}
