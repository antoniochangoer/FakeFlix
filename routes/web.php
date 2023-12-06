<?php

use Inertia\Inertia;
use App\Models\Content;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\MovieController;
use App\Http\Controllers\ProfileController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', [MovieController::class, 'index'])
    ->middleware(['auth', 'verified'])
    ->name('dashboard');

Route::get('/movies/tv-series', [MovieController::class, 'showTvSeries'])
    ->middleware(['auth']) // Assuming these should also be protected routes
    ->name('tv-series');

Route::get('/movies/movies', [MovieController::class, 'showMovies'])
    ->middleware(['auth'])
    ->name('movies');

Route::get('/movies/bookmarked', [MovieController::class, 'showBookmarked'])
    ->middleware(['auth', 'verified'])
    ->name('bookmarked');

Route::get('/movies/toggle-bookmark/{movie}', [MovieController::class, 'toggleBookmark'])
    ->middleware('auth')
    ->name('movies.toggle-bookmark');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
