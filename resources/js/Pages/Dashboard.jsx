import { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Searchbar from "@/Components/Searchbar";
import Trending from "@/Components/Trending";
import Recommended from "@/Components/Recommended";
import Content from "@/Components/Content";

export default function Dashboard({ auth, movies }) {
    const [searchResult, setSearchResult] = useState([]);

    console.log(searchResult);

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            <Searchbar content={movies} setSearchResult={setSearchResult} />

            {/* If empty searchTerm show Trending component and Recommended IF NOT empty show results include no result as well */}
            {searchResult.length === 0 ? (
                <>
                    <Trending content={movies} />
                    <Recommended content={movies} />
                </>
            ) : (
                <Content content={movies} filteredContent={searchResult} />
            )}
        </AuthenticatedLayout>
    );
}
