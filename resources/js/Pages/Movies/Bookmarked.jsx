import { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import React from "react";
import Searchbar from "@/Components/Searchbar";
import Content from "@/Components/Content";

export default function Bookmarked({ auth, bookmarkedMovies }) {
    const [searchResult, setSearchResult] = useState([]);
    console.log(bookmarkedMovies);

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            <Searchbar
                placeholder="Search for bookmarked shows"
                content={bookmarkedMovies}
                setSearchResult={setSearchResult}
            />

            <h2 className="text-[2rem] font-light my-6 md:mt-10 3xl:mb-8">
                Bookmarked Movies
            </h2>
            <Content
                content={bookmarkedMovies}
                filteredContent={searchResult}
            />

            {/* {bookmarkedMovies.map((movie) => (
                <Link
                    as="button"
                    key={movie.id}
                    href={`/movies/toggle-bookmark/${movie.id}`}
                    method="post"
                    className="inline-block bg-brand-red mb-4 mr-4 p-4 rounded-md"
                >
                    Toggle Bookmark for {movie.title}
                </Link>
            ))} */}
        </AuthenticatedLayout>
    );
}
