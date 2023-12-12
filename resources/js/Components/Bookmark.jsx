import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

export default function Bookmark({ id, isBookmarked: initialIsBookmarked }) {
    const [isBookmarked, setIsBookmarked] = useState(initialIsBookmarked);

    const handleBookmarkClick = (e) => {
        e.preventDefault();
        setIsBookmarked(!isBookmarked); // Optimistically update the UI

        Inertia.post(
            `/movies/toggle-bookmark/${id}`,
            {},
            {
                onSuccess: (response) => {
                    // Handle the successful response here
                    // The 'response' contains the entire Inertia page object, you can access the JSON data via 'response.props'
                    if (response.props.bookmarked !== undefined) {
                        setIsBookmarked(response.props.bookmarked);
                    }
                },
                onError: (errors) => {
                    // Handle the error response here
                    // 'errors' will contain any validation errors or other error messages sent from the server
                    console.error("An error occurred:", errors);
                    setIsBookmarked(initialIsBookmarked); // Revert optimistic update
                },
                preserveState: true, // Preserve the local state of the component
            }
        );
    };

    return (
        <button
            onClick={handleBookmarkClick}
            className="absolute top-0 right-0 bg-[#00000066] rounded-full p-[10px] mt-2 mr-2 cursor-pointer"
        >
            <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
                    stroke="#FFF"
                    strokeWidth="1.5"
                    fill={`${isBookmarked ? "#FFF" : "none"}`}
                />
            </svg>
        </button>
    );
}
