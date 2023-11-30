import { NavMoviesIcon, NavSeriesIcon } from "./NavIcons";

export default function TrendingContent({ content }) {
    return (
        <>
            <picture className="relative">
                <source
                    srcSet={content.thumbnail_trending.large}
                    media="(min-width: 768px)"
                />
                <img
                    className="rounded-[10px]"
                    src={content.thumbnail_trending.small}
                    alt=""
                />
            </picture>
            <div className="absolute top-0 right-0 bg-[#00000066] rounded-full p-[10px] mt-2 mr-2 cursor-pointer">
                <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
                        stroke="#FFF"
                        strokeWidth="1.5"
                        fill="none"
                    />
                </svg>
            </div>
            <div className="absolute bottom-0 left-0 w-full">
                <div className="bg-gradient-to-b from-transparent to-black p-4 w-full text-xs md:text-[15px] font-light rounded-[10px]">
                    <div className="flex items-center gap-2 pb-2">
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
                        <span className="inline-block">{content.rating}</span>
                    </div>
                    <p className="text-left font-medium text-[15px] md:text-2xl">
                        {content.title}
                    </p>
                </div>
            </div>
        </>
    );
}
