// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import type { PaginationOptions } from 'swiper/types';
import { useEffect, useState } from 'react';

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
    paginationClass: string;
}

// Custom hook for checking for mobile or desktop
function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState<boolean>(false);

    useEffect(() => {
        const mediaQuery: MediaQueryList = window.matchMedia(query);
        setMatches(mediaQuery.matches);

        const handler = (event: MediaQueryListEvent) => setMatches(event.matches);
        mediaQuery.addEventListener('change', handler);

        return () => mediaQuery.removeEventListener('change', handler);
    }, [query]);

    return matches;
}

export default function Carousel(props: CarouselProps) {
    const isMobile = useMediaQuery('(max-width: 1024px)');

    const pagination: PaginationOptions = {
        clickable: true,
        el: props.paginationClass,
        type: 'bullets',
    };

    return (
        <div className='relative mt-8'>
            <div className='flex items-center justify-center space-x-2'>
                <div className='absolute -top-[73px] right-0 flex justify-end space-x-10'>
                    {/* Custom Previous Button */}
                    <div className='relative hidden items-center justify-center lg:flex'>
                        <button
                            aria-label='Carousel Prev Button'
                            className='image-swiper-button-prev peer disabled:opacity-20 lg:flex'
                        >
                            <span className='icon-[carbon--arrow-left] h-[30px] w-[30px] text-black peer-disabled:opacity-20' />
                        </button>
                    </div>
                    {/* Custom Next Button */}
                    <div className='relative hidden items-center justify-center lg:flex'>
                        <button
                            aria-label='Carousel Next Button'
                            className='image-swiper-button-next peer disabled:opacity-20 lg:flex'
                        >
                            <span className='icon-[carbon--arrow-right] h-[30px] w-[30px] text-black peer-disabled:opacity-20' />
                        </button>
                    </div>
                </div>
                <div className='w-full'>
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={1}
                        pagination={pagination}
                        modules={[Navigation, Pagination]}
                        breakpoints={{
                            1024: {
                                navigation: {
                                    enabled: true,
                                    nextEl: '.image-swiper-button-next',
                                    prevEl: '.image-swiper-button-prev',
                                },
                                slidesPerView: 1.2,
                                centeredSlides: true,
                            },
                        }}
                    >
                        {isMobile &&
                            props.projectSlides &&
                            props.projectSlides.map((project: ProjectSlide, index) => (
                                <SwiperSlide
                                    key={`featuredProject-mobile-${index}`}
                                    className='flex h-fit w-full items-center justify-center'
                                >
                                    <a
                                        href={project.href}
                                        aria-label={`Featured Project ${index} Link`}
                                    >
                                        <img
                                            src={project.desktopImage.image.src}
                                            alt={project.desktopImage.alt}
                                            height={330}
                                            width={327}
                                            className='h-auto w-full'
                                        />
                                    </a>
                                </SwiperSlide>
                            ))}
                        {isMobile &&
                            props.reviewSlides &&
                            props.reviewSlides.map((review: ReviewSlide, index) => (
                                <SwiperSlide
                                    key={`review-mobile-${index}`}
                                    className='flex h-fit w-full items-center justify-center rounded-xl bg-white'
                                >
                                    <div className='flex w-full flex-col items-center justify-center space-y-7 rounded-xl px-4 py-8'>
                                        <span className='icon-[raphael--quote] h-[45px] w-[45px] text-brand-green-primary' />

                                        <p className='mt-5 text-center font-bold leading-[30px]'>
                                            {review.review}
                                        </p>
                                        <div className='flex items-center justify-center space-x-4'>
                                            <div className='flex h-[53px] w-[56px] items-center justify-center rounded-full'>
                                                <img
                                                    src={review.reviewerImage.image.src}
                                                    alt={review.reviewerImage.alt}
                                                    height={2700}
                                                    width={4096}
                                                    className='rounded-full'
                                                />
                                            </div>
                                            <div className='flex flex-col space-y-2'>
                                                <p className='font-bold capitalize leading-tight text-brand-gray-dark'>
                                                    {review.reviewerName}
                                                </p>
                                                <p className='text-sm font-semibold capitalize leading-tight text-brand-gray-dark'>
                                                    {review.reviewerLocation}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        {!isMobile &&
                            props.reviewSlides &&
                            props.reviewSlides.map((review: ReviewSlide, index) => (
                                <SwiperSlide
                                    key={`review-desktop-${index}`}
                                    className='flex h-fit w-full items-center justify-center rounded-xl bg-white'
                                >
                                    <div className='flex h-[370px] w-full flex-col items-center justify-center space-y-8 rounded-xl border px-20 py-8'>
                                        <span className='icon-[raphael--quote] h-[45px] w-[45px] text-brand-green-primary' />

                                        <p className='mt-5 text-center font-bold leading-[30px]'>
                                            {review.review}
                                        </p>
                                        <div className='flex items-center justify-center space-x-4'>
                                            <div className='flex h-[56px] w-[56px] items-center justify-center rounded-full'>
                                                <img
                                                    src={review.reviewerImage.image.src}
                                                    alt={review.reviewerImage.alt}
                                                    height={600}
                                                    width={600}
                                                    className='rounded-full'
                                                />
                                            </div>
                                            <div className='flex flex-col space-y-2'>
                                                <p className='font-bold capitalize leading-tight text-brand-gray-dark'>
                                                    {review.reviewerName}
                                                </p>
                                                <p className='text-sm font-semibold capitalize leading-tight text-brand-gray-dark'>
                                                    {review.reviewerLocation}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>
            </div>

            <div className='flex items-center justify-center space-x-4 pt-4'>
                <div className={props.paginationClass.replace('.', '')} />
            </div>
        </div>
    );
}
