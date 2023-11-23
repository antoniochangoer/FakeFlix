import { useState } from "react";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";

export default function Authenticated({ user, children }) {
    return (
        <div className="min-h-screen bg-brand-dark-blue">
            <ResponsiveNavLink method="post" href={route("logout")} as="button">
                Log Out
            </ResponsiveNavLink>

            <main>{children}</main>
        </div>
    );
}
