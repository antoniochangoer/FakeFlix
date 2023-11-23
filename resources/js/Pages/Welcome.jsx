import { Link, Head } from "@inertiajs/react";
import Login from "./Auth/Login";
import React, { Fragment } from "react";

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />
            <div>
                <div>
                    {auth.user ? (
                        <Link href={route("dashboard")}>Dashboard</Link>
                    ) : null}
                </div>
                <Login />
            </div>

            <h1>Welcome to FakeFlix</h1>
        </>
    );
}
