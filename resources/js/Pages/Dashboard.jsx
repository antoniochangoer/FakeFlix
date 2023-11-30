import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Searchbar from "@/Components/Searchbar";
import Trending from "@/Components/Trending";
import Recommended from "@/Components/Recommended";

export default function Dashboard({ auth, movies }) {
    // console.log(movies);
    // console.log(auth, auth.user);
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            {/* TODO: Searchbar gets movies and uses that data to filter out based on the search result */}
            {/* TODO: Searchresult maybe as a child of searchbar? easy to pass to children instead of shared parent */}
            {/* TODO: Show either search result when typing OR the default rendered page with && or ? */}
            <Searchbar />
            <Trending content={movies} />
            <Recommended content={movies} />
        </AuthenticatedLayout>
    );
}
