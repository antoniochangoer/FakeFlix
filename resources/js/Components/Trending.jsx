// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import { NavMoviesIcon, NavSeriesIcon } from "./NavIcons";

// Import Swiper styles
import "swiper/css";

export default function Trending({ movies }) {
    const trendingContent = movies.filter((movie) => {
        if (movie.thumbnail_trending.small && movie.thumbnail_trending.large) {
            return movie;
        }
    });

    return (
        <div className="">
            <h1 className="text-[2rem] font-light mb-4 md:mb-6">Trending</h1>
            <Swiper
                freeMode={true}
                loop={true}
                autoHeight={true}
                loopAddBlankSlides={false}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    375: {
                        slidesPerView: 2,
                        spaceBetween: 16,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1440: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                {trendingContent.map((movie) => (
                    <SwiperSlide key={movie.id}>
                        <picture className="relative">
                            <source
                                srcSet={movie.thumbnail_trending.large}
                                media="(min-width: 768px)"
                            />
                            <img
                                className="rounded-[10px]"
                                src={movie.thumbnail_trending.small}
                                alt=""
                            />
                        </picture>
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
                        <div className="absolute bottom-0 left-0 w-full">
                            <div className="bg-gradient-to-b from-transparent to-black p-4 w-full text-xs md:text-[15px] font-light rounded-[10px]">
                                <div className="flex items-center gap-2 pb-2">
                                    <span className="inline-block">
                                        {movie.year}
                                    </span>
                                    <span className="w-[3px] h-[3px] bg-[#979797] rounded-full inline-block"></span>
                                    <span className="inline-block">
                                        {movie.category_id === 1 ? (
                                            <NavMoviesIcon hover={false} />
                                        ) : (
                                            <NavSeriesIcon hover={false} />
                                        )}
                                    </span>
                                    <span className="w-[3px] h-[3px] bg-[#979797] rounded-full inline-block"></span>
                                    <span className="inline-block">
                                        {movie.rating}
                                    </span>
                                </div>
                                <p className="text-left font-medium text-[15px] md:text-2xl">
                                    {movie.title}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
