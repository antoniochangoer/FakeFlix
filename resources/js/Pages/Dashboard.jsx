import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React from "react";

export default function Dashboard({ auth, contents }) {
    console.log(contents);
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-brand-dark-blue overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div>

            <div>
                {/* Iterate over the contents and display them */}
                {contents.map((content, index) => (
                    <div key={index}>
                        <h2>{content.title}</h2>
                        {/* Display the thumbnails */}
                        {/* Ensure the structure matches how you have stored it in the Content model */}
                        {content.thumbnail && content.thumbnail.regular && (
                            <div>
                                <img
                                    src={content.thumbnail.regular.small}
                                    alt="Regular Small Thumbnail"
                                />
                                {/* Similarly for medium and large thumbnails */}
                            </div>
                        )}
                        {/* Add more content details here */}
                    </div>
                ))}
            </div>
        </AuthenticatedLayout>
    );
}
