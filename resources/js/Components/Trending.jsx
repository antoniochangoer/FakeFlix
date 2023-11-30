import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import TrendingContent from "@/Components/TrendingContent";

import "swiper/css";

export default function Trending({ movies }) {
    const trending = movies.filter((movie) => {
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
                {trending.map((content) => (
                    <SwiperSlide key={content.id}>
                        <TrendingContent content={content} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
