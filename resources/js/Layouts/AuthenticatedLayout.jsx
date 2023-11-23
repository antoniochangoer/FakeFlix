import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";

export default function Authenticated({ user, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    console.log(user);

    return (
        <div className="min-h-screen bg-brand-dark-blue">
            <ResponsiveNavLink method="post" href={route("logout")} as="button">
                Log Out
            </ResponsiveNavLink>

            <main>{children}</main>
        </div>
    );
}
