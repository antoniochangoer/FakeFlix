<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Example schema based on your JSON structure
        Schema::create('contents', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->json('thumbnail_trending')->nullable(); // Storing paths as JSON
            $table->json('thumbnail_regular');
            $table->year('year');
            $table->string('category');
            $table->string('rating');
            $table->boolean('is_bookmarked');
            $table->boolean('is_trending');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contents');
    }
};
