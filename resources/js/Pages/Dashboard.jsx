import { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Searchbar from "@/Components/Searchbar";
import Trending from "@/Components/Trending";
import Recommended from "@/Components/Recommended";
import Content from "@/Components/Content";

export default function Dashboard({ auth, movies }) {
    const [searchResult, setSearchResult] = useState([]);
    // console.log(movies);
    // console.log(auth, auth.user);
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            {/* TODO: Searchbar gets movies and uses that data to filter out based on the search result */}
            {/* TODO: Searchresult maybe as a child of searchbar? easy to pass to children instead of shared parent */}
            {/* TODO: Show either search result when typing OR the default rendered page with && or ? */}
            <Searchbar content={movies} setSearchResult={setSearchResult} />

            {/* If empty searchTerm show Trending component and Recommended IF NOT empty show results include no result as well */}
            {searchResult.length === 0 ? (
                <>
                    <Trending content={movies} />
                    <Recommended content={movies} />
                </>
            ) : (
                <Content content={searchResult} />
            )}
        </AuthenticatedLayout>
    );
}
