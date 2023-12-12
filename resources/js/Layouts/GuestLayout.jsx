import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen bg-brand-dark-blue text-white font-light">
            <div className="px-6 pt-12 md:pt-20 flex flex-col items-center">
                <Link href="/">
                    <ApplicationLogo className="w-8 h-6 mb-14 block fill-current text-gray-500" />
                </Link>
                {children}
            </div>
        </div>
    );
}
