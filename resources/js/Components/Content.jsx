import { NavMoviesIcon, NavSeriesIcon } from "./NavIcons";

export default function Content({ content, filteredContent }) {
    const contentToShow =
        filteredContent?.length > 0 ? filteredContent : content;

    return (
        <div className="mr-4 md:mr-10 3xl:mr-10">
            <div className="grid grid-cols-2 md:grid-cols-3 3xl:grid-cols-4 gap-4 md:gap-8 3xl:gap-10">
                {contentToShow.map((content) => (
                    <div
                        key={content.id}
                        className="flex flex-col mb-6 md:mb-8 3xl:mb-10"
                    >
                        <picture className="relative">
                            <source
                                srcSet={content.thumbnail_regular?.large}
                                media="(min-width: 768px)"
                            />
                            <img
                                className="rounded-[10px]"
                                src={content.thumbnail_regular?.small}
                                alt=""
                            />
                            <div className="absolute top-0 right-0 bg-[#00000066] rounded-full p-[10px] mt-2 mr-2 cursor-pointer">
                                <svg
                                    width="12"
                                    height="14"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
                                        stroke="#FFF"
                                        strokeWidth="1.5"
                                        fill="none"
                                    />
                                </svg>
                            </div>
                        </picture>
                        <div className="flex items-center justify-start gap-2 pb-2 mt-2 mb-1">
                            <span className="inline-block">{content.year}</span>
                            <span className="w-[3px] h-[3px] bg-[#979797] rounded-full inline-block"></span>
                            <span className="inline-block">
                                {content.category_id === 1 ? (
                                    <NavMoviesIcon hover={false} />
                                ) : (
                                    <NavSeriesIcon hover={false} />
                                )}
                            </span>
                            <span className="w-[3px] h-[3px] bg-[#979797] rounded-full inline-block"></span>
                            <span className="inline-block">
                                {content.rating}
                            </span>
                        </div>
                        <p className="text-left font-medium text-[15px] md:text-2xl">
                            {content.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
