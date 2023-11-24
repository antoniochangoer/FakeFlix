import { Link, Head } from "@inertiajs/react";
import Login from "./Auth/Login";

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />
            <div>
                <div>
                    {auth.user ? (
                        <Link href={route("dashboard")} className="text-white">
                            Dashboard
                        </Link>
                    ) : (
                        <Login />
                    )}
                </div>
            </div>
        </>
    );
}
