import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React from "react";
import Searchbar from "@/Components/Searchbar";

export default function TvSeries({ auth, tvSeries }) {
    console.log(tvSeries);
    console.log(auth, auth.user);

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            {/* Searchbar think about where to handle the initial result */}
            <Searchbar />

            <h1 className="text-white text-4xl">TV SERIES!</h1>
        </AuthenticatedLayout>
    );
}
