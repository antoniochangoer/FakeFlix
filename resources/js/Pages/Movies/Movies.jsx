import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import Searchbar from "@/Components/Searchbar";
import Content from "@/Components/Content";

export default function Movies({ auth, movies }) {
    const [searchResult, setSearchResult] = useState([]);
    console.log(movies);

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            {/* Searchbar think about where to handle the initial result */}
            <Searchbar
                placeholder="Search for movies"
                content={movies}
                setSearchResult={setSearchResult}
            />

            <h2 className="text-[2rem] font-light my-6 md:mt-10 3xl:mb-8">
                Movies
            </h2>
            <Content content={movies} filteredContent={searchResult} />
        </AuthenticatedLayout>
    );
}
