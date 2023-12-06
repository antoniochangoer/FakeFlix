<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use App\Models\User;
use App\Services\ThumbnailService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MovieController extends Controller
{
    public function index()
    {
        $movies = Movie::all()->map(function ($movie) {
            return ThumbnailService::transformThumbnails($movie);
        });

        return Inertia::render('Dashboard', ['movies' => $movies]);
    }

    public function showTvSeries()
    {
        $tvSeries = Movie::with('category')
            ->where('category_id', 2)
            ->get()
            ->map(function ($movie) {
                return ThumbnailService::transformThumbnails($movie);
            });

        return Inertia::render('Movies/TvSeries', ['tvSeries' => $tvSeries]);
    }

    public function showMovies()
    {
        $movies = Movie::with('category')
            ->where('category_id', 1)
            ->get()
            ->map(function ($movie) {
                return ThumbnailService::transformThumbnails($movie);
            });

        return Inertia::render('Movies/Movies', ['movies' => $movies]);
    }

    public function showBookmarked()
    {
        $userId = auth()->id();
        $bookmarkedMovies = User::with('movies')
            ->findOrFail($userId)
            ->movies
            ->map(function ($movie) {
                $movieWithThumbnails = ThumbnailService::transformThumbnails($movie);
                $movieWithThumbnails->bookmarked = true; 
                return $movieWithThumbnails;
            });

        return Inertia::render('Movies/Bookmarked', ['bookmarkedMovies' => $bookmarkedMovies]);
    }


    public function toggleBookmark($movieId)
    {
        $userId = auth()->id();

        // Fetch the user from the database using the User model
        $user = User::with('movies')->findOrFail($userId);

        // Check if the movie is already bookmarked
        $isBookmarked = $user->movies->contains($movieId);

        if ($isBookmarked) {
            // If bookmarked, remove it
            $user->movies()->detach($movieId);
        } else {
            // If not bookmarked, add it
            $user->movies()->attach($movieId);
        }

        return response()->json(['bookmarked' => !$isBookmarked]);
    }



}
