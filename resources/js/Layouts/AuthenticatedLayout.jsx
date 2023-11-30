import Navbar from "@/Components/Navbar";

export default function Authenticated({ user, children }) {
    return (
        <div className="min-h-screen bg-brand-dark-blue parent 3xl:gap-9">
            <Navbar />
            <main className="overflow-hidden ml-4 md:ml-10 3xl:ml-10">
                {children}
            </main>
        </div>
    );
}
