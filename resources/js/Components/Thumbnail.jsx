import Bookmark from "./Bookmark";
import { NavMoviesIcon, NavSeriesIcon } from "./NavIcons";

export default function Thumbnail({ content }) {
    return (
        <div className="flex flex-col mb-6 md:mb-8 3xl:mb-10">
            <picture className="relative">
                <source
                    srcSet={content.thumbnail_regular?.large}
                    media="(min-width: 768px)"
                />
                <img
                    className="rounded-[10px]"
                    src={content.thumbnail_regular?.small}
                    alt={content.title}
                />
                <Bookmark id={content.id} isBookmarked={content.bookmarked} />
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
                <span className="inline-block">{content.rating}</span>
            </div>
            <p className="text-left font-medium text-[15px] md:text-2xl">
                {content.title}
            </p>
        </div>
    );
}
