import { Link } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import {
    NavHomeIcon,
    NavBookmarkedIcon,
    NavMoviesIcon,
    NavSeriesIcon,
} from "@/Components/NavIcons";

export default function Navbar() {
    return (
        <header className="text-white bg-brand-semi-blue p-4 3xl:w-full 3xl:py-[32px] 3xl:px-[28px] md:mt-6 3xl:m-8 md:mx-6 md:rounded-[10px] 3xl:rounded-[20px]">
            <nav className="flex justify-between 3xl:justify-normal 3xl:items-center 3xl:h-full 3xl:flex-col">
                {/* logo and home button */}
                <div className="3xl:mb-20">
                    <Link href={route("dashboard")} className="text-white">
                        <ApplicationLogo className="h-8 w-auto sm:h-10" />
                    </Link>
                </div>

                {/* list with links to pages */}
                <ul className="flex 3xl:flex-col space-x-6 3xl:space-x-0 3xl:space-y-10 items-center justify-center">
                    <li>
                        <Link href={route("dashboard")} className="text-white">
                            <NavHomeIcon />
                            <span className="sr-only">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={route("dashboard")} className="text-white">
                            <NavMoviesIcon />
                            <span className="sr-only">Movies</span>
                        </Link>
                    </li>{" "}
                    <li>
                        <Link href={route("dashboard")} className="text-white">
                            <NavSeriesIcon />
                            <span className="sr-only">TV Series</span>
                        </Link>
                    </li>{" "}
                    <li className="pt-[1px]">
                        <Link href={route("dashboard")} className="text-white">
                            <NavBookmarkedIcon />
                            <span className="sr-only">Bookmarked</span>
                        </Link>
                    </li>
                </ul>

                {/* profile avatar component */}
                <div className="3xl:mt-auto">
                    <img
                        src="/assets/image-avatar.png"
                        alt="profile photo"
                        className="h-8 w-8 rounded-full border border-white"
                    />
                </div>
            </nav>
        </header>
    );
}
