<?php

namespace Database\Seeders;

use App\Models\Movie;
use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;


class MoviesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Load JSON file
        $json = File::get("database/data/data.example.json");

        // Decode the JSON data into an array
        $contents = json_decode($json, true); // true to get associative arrays

        // Iterate over each movie item and insert into the database
        foreach ($contents as $content) {
            $category = Category::where('name', $content['category'])->first();

            Movie::create([
                'title' => $content['title'],
                'category_id' => $category->id, 
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
                'rating' => $content['rating'],
                'is_trending' => $content['isTrending'],
            ]);
        }
    }
}
