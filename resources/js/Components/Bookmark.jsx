import { Inertia } from "@inertiajs/inertia";

export default function Bookmark({ id, isBookmarked = false }) {
    const handleBookmarkClick = (e) => {
        e.preventDefault();
        Inertia.post(`/movies/toggle-bookmark/${id}`);
    };

    return (
        <button onClick={handleBookmarkClick}>
            <div className="absolute top-0 right-0 bg-[#00000066] rounded-full p-[10px] mt-2 mr-2 cursor-pointer">
                <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
                        stroke="#FFF"
                        strokeWidth="1.5"
                        fill={`${isBookmarked ? "#FFF" : "none"}`}
                    />
                </svg>
            </div>
        </button>
    );
}
