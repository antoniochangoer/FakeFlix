<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Movie;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class BookmarkSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = User::all();
        $numberOfBookmarks = 15; // Desired number of movies to bookmark for each user

        foreach ($users as $user) {
            // Get IDs of movies already bookmarked by the user
            $bookmarkedMovieIds = $user->movies->pluck('id')->toArray();

            // Get movies not yet bookmarked by the user, up to the required number
            $moviesToBookmark = Movie::whereNotIn('id', $bookmarkedMovieIds)
                ->inRandomOrder()
                ->take($numberOfBookmarks - count($bookmarkedMovieIds))
                ->get();

            foreach ($moviesToBookmark as $movie) {
                // Attach the movie to the user's bookmarks
                $user->movies()->attach($movie->id);
            }
        }
    }
}
