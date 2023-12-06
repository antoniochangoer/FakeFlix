import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React from "react";
import Searchbar from "@/Components/Searchbar";

export default function Bookmarked({ auth, bookmarkedMovies }) {
    console.log(bookmarkedMovies);

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            <Searchbar />

            <h1 className="text-white text-4xl">BOOKMARKED!</h1>
        </AuthenticatedLayout>
    );
}
