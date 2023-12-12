import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import Searchbar from "@/Components/Searchbar";
import Content from "@/Components/Content";

export default function TvSeries({ auth, tvSeries }) {
    const [searchResult, setSearchResult] = useState([]);

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            <Searchbar
                placeholder="Search for TV Series"
                content={tvSeries}
                setSearchResult={setSearchResult}
            />

            <h2 className="text-[2rem] font-light my-6 md:mt-10 3xl:mb-8">
                TV Series
            </h2>
            <Content content={tvSeries} filteredContent={searchResult} />
        </AuthenticatedLayout>
    );
}
