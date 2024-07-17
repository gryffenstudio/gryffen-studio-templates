// Import Swiper React components
import * as ReactDOMServer from 'react-dom/server';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import type { PaginationOptions } from 'swiper/types';

export interface CarouselImage {
    image: any;
    alt: string;
}

export interface ProjectSlide {
    mobileImage: CarouselImage;
    desktopImage: CarouselImage;
    href: string;
}

export interface ReviewSlide {
    reviewerName: string;
    reviewerImage: CarouselImage;
    reviewerLocation: string;
    review: string;
}

export interface CarouselProps {
    projectSlides?: ProjectSlide[];
    reviewSlides?: ReviewSlide[];
}

export default function Carousel(props: CarouselProps) {
    const pagination: PaginationOptions = {
        clickable: true,
        el: '.swiper-custom-pagination',
        type: 'bullets',
    };
    return (
        <div className='relative mt-8'>
            <Swiper
                spaceBetween={10}
                navigation={true}
                pagination={pagination}
                modules={[Pagination, Navigation]}
            >
                {props.projectSlides &&
                    props.projectSlides.map((project: ProjectSlide, index) => {
                        return (
                            <SwiperSlide
                                key={`featuredProject-${index}`}
                                className='flex h-fit w-full items-center justify-center bg-blue-500'
                            >
                                <img
                                    src={project.mobileImage.image.src}
                                    alt={project.mobileImage.alt}
                                    height={330}
                                    width={327}
                                    className='h-auto w-full lg:hidden'
                                />
                            </SwiperSlide>
                        );
                    })}
            </Swiper>
            <div className='flex items-center justify-center space-x-4 pt-4'>
                <div className='swiper-custom-pagination' />
            </div>
        </div>
    );
}
