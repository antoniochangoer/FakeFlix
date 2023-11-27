import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import InputLabel from "@/Components/InputLabel";

export default function Searchbar() {
    return (
        <>
            <form className="mt-6 mx-4 md:mx-10 3xl:mt-14 3xl:mx-10 relative">
                <div className="cursor-pointer absolute inset-y-0 left-0 flex items-center">
                    <MagnifyingGlassIcon
                        className="h-5 fill-white"
                        aria-hidden="true"
                        strokeWidth={4}
                    />
                </div>
                <InputLabel
                    className="sr-only"
                    htmlFor="search"
                    value="Search"
                />
                <input
                    autoComplete="off"
                    type="text"
                    name="search"
                    id="search"
                    className={`peer font-light pl-8 bg-brand-dark-blue block w-full border-0 text-inherit shadow-sm ring-inset ring-brand-dark-blue placeholder:text-gray-400  focus:ring-2 focus:ring-inset focus:ring-brand-dark-blue text-base caret-brand-red md:text-xl`}
                    placeholder="Search for movies or TV series"
                />
                <div
                    className={`absolute inset-x-0 bottom-0 border-t border-transparent peer-focus:border-t-[1px] peer-focus:border-brand-grey-blue`}
                    aria-hidden="true"
                ></div>
            </form>
        </>
    );
}
