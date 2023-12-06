import { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React from "react";
import Searchbar from "@/Components/Searchbar";
import Content from "@/Components/Content";

export default function Bookmarked({ auth, bookmarkedMovies }) {
    const [searchResult, setSearchResult] = useState([]);

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
        </AuthenticatedLayout>
    );
}
