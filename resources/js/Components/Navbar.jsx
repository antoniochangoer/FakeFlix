import { usePage } from "@inertiajs/react";
import { Link } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import {
    NavHomeIcon,
    NavBookmarkedIcon,
    NavMoviesIcon,
    NavSeriesIcon,
} from "@/Components/NavIcons";
import ProfilePicture from "./ProfilePicture";

export default function Navbar() {
    const { url, component } = usePage();
    // for now just a placeholder
    const fakeState = true;
    return (
        <header className="text-white bg-brand-semi-blue p-4 3xl:w-full 3xl:py-[32px] 3xl:px-[28px] md:mt-6 3xl:m-8 md:mx-6 md:rounded-[10px] 3xl:rounded-[20px]">
            <nav className="flex justify-between items-center 3xl:justify-normal 3xl:h-full 3xl:flex-col">
                {/* logo and home button */}
                <div className="3xl:mb-20">
                    <Link href={route("dashboard")} className="text-black">
                        <ApplicationLogo className="h-8 w-auto sm:h-10" />
                    </Link>
                </div>

                {/* list with links to pages */}
                <ul className="flex 3xl:flex-col gap-6 md:gap-8 3xl:gap-0 3xl:space-y-10 items-center justify-center">
                    <li>
                        <Link
                            href={route("dashboard")}
                            className={url === "/dashboard" ? "active" : ""}
                        >
                            <NavHomeIcon active={fakeState} />
                            <span className="sr-only">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={route("movies")}
                            className={url === "/movies/movies" ? "active" : ""}
                        >
                            <NavMoviesIcon />
                            <span className="sr-only">Movies</span>
                        </Link>
                    </li>{" "}
                    <li>
                        <Link
                            href={route("tv-series")}
                            className={
                                url === "/movies/tv-series" ? "active" : ""
                            }
                        >
                            <NavSeriesIcon />
                            <span className="sr-only">TV Series</span>
                        </Link>
                    </li>{" "}
                    <li className="pt-[1px]">
                        <Link
                            href={route("bookmarked")}
                            className={
                                url === "/movies/bookmarked" ? "active" : ""
                            }
                        >
                            <NavBookmarkedIcon />
                            <span className="sr-only">Bookmarked</span>
                        </Link>
                    </li>
                </ul>

                {/* profile avatar component */}
                {/* pass props for img */}
                <ProfilePicture />
            </nav>
        </header>
    );
}
