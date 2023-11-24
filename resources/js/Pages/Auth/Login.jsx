import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({ status }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <form
                onSubmit={submit}
                className="bg-brand-semi-blue rounded-[20px] max-w-md w-full mt-14"
            >
                <div className="p-6">
                    <h1 className="text-3xl font-light mb-10">Login</h1>
                    <div className="mt-2 relative">
                        <InputLabel htmlFor="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="peer block w-full border-0 bg-inherit py-1.5  focus:ring-0 sm:text-sm sm:leading-6"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData("email", e.target.value)}
                        />
                        <div
                            className="absolute inset-x-0 bottom-0 border-t border-brand-grey-blue peer-focus:border-t-[1px] peer-focus:border-white"
                            aria-hidden="true"
                        ></div>

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-2 relative">
                        <InputLabel htmlFor="password" value="Password" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="peer block w-full border-0 bg-inherit py-1.5  focus:ring-0 sm:text-sm sm:leading-6"
                            autoComplete="current-password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                        />
                        <div
                            className="absolute inset-x-0 bottom-0 border-t border-brand-grey-blue peer-focus:border-t-[1px] peer-focus:border-white"
                            aria-hidden="true"
                        ></div>

                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>
                    <div className="mt-10">
                        <PrimaryButton
                            className="w-full bg-brand-red hover:bg-white hover:text-black focus:bg-white focus:text-black focus:outline-brand-red flex justify-center font-light py-4 rounded-md"
                            disabled={processing}
                        >
                            Log in to your account
                        </PrimaryButton>
                    </div>
                    <p className="mt-6 text-center">
                        Don&apos;t have an account?{" "}
                        <Link
                            href={route("register")}
                            className="text-brand-red focus:outline-brand-red"
                        >
                            Sign Up
                        </Link>
                    </p>
                </div>
            </form>
        </GuestLayout>
    );
}
