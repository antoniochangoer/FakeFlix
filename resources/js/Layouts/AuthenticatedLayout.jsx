import Navbar from "@/Components/Navbar";

export default function Authenticated({ user, children }) {
    return (
        <div className="min-h-screen bg-brand-dark-blue parent">
            {/* Create navbar here because you can only see it if you are logged in! */}
            {/* when ready with markup extract navbar component and perhaps category links as well and profile photo */}
            {/* three links (Trending, Movies, Series, Bookmarked which routes to the right controller) */}
            <Navbar />
            <main>{children}</main>
        </div>
    );
}
