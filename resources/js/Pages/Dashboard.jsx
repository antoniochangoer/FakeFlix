import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React from "react";
import Searchbar from "@/Components/Searchbar";

export default function Dashboard({ auth, movies }) {
    console.log(movies);
    console.log(auth, auth.user);
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            {/* Searchbar think about where to handle the initial result */}
            <Searchbar />

            {/* <h1>MAIN CONTENT</h1> */}
        </AuthenticatedLayout>
    );
}

// <div>
//     {/* Iterate over the contents and display them */}
//     {contents.map((content) => (
//         <div key={content.id}>
//             <h2 className="text-white">{content.title}</h2>
//             {/* Display the thumbnails */}
//             {/* Ensure the structure matches how you have stored it in the Content model */}
//             {content.thumbnail && content.thumbnail.regular && (
//                 <div>
//                     <img
//                         src={content.thumbnail.regular.small}
//                         alt="Regular Small Thumbnail"
//                     />
//                     {/* Similarly for medium and large thumbnails */}
//                 </div>
//             )}
//             {/* Add more content details here */}
//         </div>
//     ))}
// </div>
