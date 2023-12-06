import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import InputLabel from "@/Components/InputLabel";

export default function Searchbar({
    content,
    setSearchResult,
    placeholder = "Search for movies or TV series",
}) {
    const [searchTerm, setSearchTerm] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        // TODO: show error message if search term is empty or just render the all the content for this specific page?
        if (searchTerm.trim() === "") {
            setSearchResult([]);
            // setErrorMessage("Please enter a search term");
            return;
        }

        filterContent(searchTerm.trim());
    }

    function filterContent(term) {
        const filteredContent = content.filter((content) => {
            return content.title.toLowerCase().includes(term.toLowerCase());
        });

        if (filteredContent.length === 0) {
            setSearchResult([]);
            setErrorMessage("No results found");
        }

        setSearchResult(filteredContent);
    }

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="relative mt-6 mr-4 md:mr-10 3xl:mt-14 3xl:mr-10 mb-6 md:mb-8"
            >
                <div className="cursor-pointer absolute inset-y-0 left-0 flex items-center">
                    <MagnifyingGlassIcon
                        className="h-5 fill-white"
                        aria-hidden="true"
                        strokeWidth={4}
                    />
                </div>
                <InputLabel
                    className="sr-only"
                    htmlFor="search"
                    value="Search"
                />
                <input
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setErrorMessage("");
                    }}
                    autoComplete="off"
                    type="text"
                    name="search"
                    id="search"
                    className={`peer font-light pl-8 bg-brand-dark-blue block w-full border-0 text-inherit shadow-sm ring-inset ring-brand-dark-blue placeholder:text-gray-400  focus:ring-2 focus:ring-inset focus:ring-brand-dark-blue text-base caret-brand-red md:text-xl`}
                    placeholder={placeholder}
                />
                <div
                    className={`absolute inset-x-0 bottom-0 border-t border-transparent peer-focus:border-t-[1px] peer-focus:border-brand-grey-blue`}
                    aria-hidden="true"
                ></div>
                {errorMessage && (
                    <p className="absolute bottom-[-30px] left-0 text-sm text-brand-red">
                        {errorMessage}
                    </p>
                )}
            </form>
        </>
    );
}
