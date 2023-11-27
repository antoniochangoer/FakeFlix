import { Link } from "@inertiajs/react";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/20/solid";
import ResponsiveNavLink from "./ResponsiveNavLink";

export default function ProfilePicture({ url = "/assets/image-avatar.png" }) {
    return (
        // flex is only for testing link
        <div className="3xl:mt-auto flex 3xl:flex-col items-center">
            <img
                src={url}
                alt="profile photo"
                className="h-8 w-8 rounded-full border border-white"
            />

            {/* link is only for testing remove later */}
            <ResponsiveNavLink
                href={route("logout")}
                method="post"
                as="button"
                className="group hover:bg-transparent hover:border-transparent ml-2 3xl:mt-2"
            >
                <ArrowLeftOnRectangleIcon className="w-5 mt-2 group-hover:fill-brand-red fill-[#5A698F]" />
            </ResponsiveNavLink>
        </div>
    );
}
