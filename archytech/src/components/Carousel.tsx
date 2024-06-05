import { useEffect, useState, memo, type PropsWithChildren, type ReactNode } from 'react';
import { useSwipeable } from 'react-swipeable';

export interface CarouselImage {
    image: any;
    alt: string;
    height?: number;
    width?: number;
    href?: string;
}

export interface CarouselImageProps {
    mobileImages: CarouselImage[];
    desktopImages?: CarouselImage[];
}

export interface CarouselTestimonial {
    mobileImage: CarouselImage;
    desktopImage: CarouselImage;
    quote: string;
    clientName: string;
}

interface CarouselProps {
    images?: CarouselImageProps;
    testimonials?: CarouselTestimonial[];
}

//Custom hook for checking for mobile or desktop
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

function Carousel(props: CarouselProps) {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const isMobile = useMediaQuery('(max-width: 640px)');

    const previousSlide = () => {
        setCurrentSlide((prevSlide) => {
            if (props.images) {
                return prevSlide === 0 ? props.images.mobileImages.length - 1 : prevSlide - 1;
            } else if (props.testimonials) {
                return prevSlide === 0 ? props.testimonials.length - 1 : prevSlide - 1;
            }
            return prevSlide;
        });
    };

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => {
            if (props.images) {
                return prevSlide === props.images.mobileImages.length - 1 ? 0 : prevSlide + 1;
            } else if (props.testimonials) {
                return prevSlide === props.testimonials.length - 1 ? 0 : prevSlide + 1;
            }
            return prevSlide;
        });
    };

    // Define swipe handlers using react-swipeable useSwipeable hook
    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => nextSlide(),
        onSwipedRight: () => previousSlide(),
    });

    return (
        <div className='relative w-full max-w-full overflow-x-hidden ' {...swipeHandlers}>
            {props.testimonials ? (
                <h2 className='relative mb-10 w-fit place-self-start text-start text-2xl font-semibold uppercase tracking-wide text-brand-black lg:text-3xl'>
                    Reviews From Our Clients
                    <span className='after:absolute after:mt-2 after:block after:h-[3px] after:w-[15%] after:bg-brand-black'></span>
                </h2>
            ) : null}
            <div
                className='flex transition duration-1000 ease-in-out'
                style={{
                    transform: `translateX(-${currentSlide * 103.5}%)`,
                }}
            >
                <div className='flex'>
                    {isMobile &&
                        props.images &&
                        props.images.mobileImages.map((carouselImage: CarouselImage, index) => {
                            if (carouselImage.href) {
                                return (
                                    <a
                                        className='block h-auto min-w-full sm:hidden'
                                        href={carouselImage.href}
                                        key={`mobile-${index}`}
                                    >
                                        <img
                                            src={carouselImage.image.src}
                                            alt={carouselImage.alt}
                                            height={
                                                carouselImage.height ? carouselImage.height : 681
                                            }
                                            width={carouselImage.width ? carouselImage.width : 327}
                                            className='mr-5 h-auto min-w-full'
                                            decoding='async'
                                            loading='lazy'
                                        />
                                    </a>
                                );
                            }
                            return (
                                <img
                                    key={`mobile-${index}`}
                                    src={carouselImage.image.src}
                                    alt={carouselImage.alt}
                                    height={681}
                                    width={327}
                                    className='mr-3 block h-auto max-h-[600px] min-w-full sm:hidden'
                                    decoding='async'
                                    loading='lazy'
                                />
                            );
                        })}
                    {!isMobile &&
                        props.images &&
                        props.images.desktopImages &&
                        props.images.desktopImages.map((carouselImage: CarouselImage, index) => {
                            return (
                                <img
                                    key={`desktop-${index}`}
                                    src={carouselImage.image.src}
                                    alt={carouselImage.alt}
                                    height={681}
                                    width={1196}
                                    className='mr-5 hidden h-auto max-h-[850px] min-w-full sm:block lg:mr-8 xl:mr-12'
                                    decoding='async'
                                    loading='lazy'
                                />
                            );
                        })}
                    {isMobile && props.testimonials && (
                        <div className='flex w-full max-w-full sm:hidden'>
                            {props.testimonials.map((testimonial: CarouselTestimonial, index) => {
                                return (
                                    <div
                                        className='mr-[11px] flex w-full min-w-full flex-col items-center'
                                        key={`testimonial-${index}`}
                                    >
                                        <img
                                            key={`desktop-${index}`}
                                            src={testimonial.desktopImage.image}
                                            alt={testimonial.desktopImage.alt}
                                            className='w-full'
                                            decoding='async'
                                            loading='lazy'
                                        />
                                        <div className='relative flex flex-col space-y-10'>
                                            <p className='text-xl font-medium'>
                                                {testimonial.quote}
                                            </p>
                                            <span className='absolute bottom-4 before:absolute before:block before:h-[3px] before:w-[33px] before:bg-brand-black' />
                                            <p className='ml-10 text-xl italic'>
                                                {testimonial.clientName}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                    {!isMobile && props.testimonials && (
                        <div className='hidden h-fit w-full sm:flex'>
                            {props.testimonials.map((testimonial: CarouselTestimonial, index) => {
                                return (
                                    <div
                                        className='mr-5 flex min-w-full items-center justify-between sm:mr-6 lg:mr-8 xl:mr-12'
                                        key={`testimonial-${index}`}
                                    >
                                        <div className='relative flex w-1/2 flex-col space-y-10'>
                                            <p className='text-2xl font-medium'>
                                                {testimonial.quote}
                                            </p>
                                            <span className='absolute bottom-4 before:absolute before:block before:h-[3px] before:w-[33px] before:bg-brand-black' />
                                            <p className='ml-10 text-xl italic'>
                                                {testimonial.clientName}
                                            </p>
                                        </div>
                                        <div>
                                            <img
                                                key={`desktop-${index}`}
                                                src={testimonial.desktopImage.image}
                                                alt={testimonial.desktopImage.alt}
                                                height={500}
                                                width={500}
                                                decoding='async'
                                                loading='lazy'
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>

            {props.images ? (
                <>
                    <div className='item-center absolute top-0 hidden h-full w-full justify-between text-white sm:flex'>
                        <button
                            className='h-fit w-fit place-self-center focus:outline-none'
                            aria-label='Previous Slide Button'
                            onClick={previousSlide}
                        >
                            <span className='icon-[iconamoon--arrow-left-2-thin] h-24 w-24'></span>
                        </button>
                        <button
                            className='h-fit w-fit place-self-center focus:outline-none'
                            aria-label='Next Slide Button'
                            onClick={nextSlide}
                        >
                            <span className='icon-[iconamoon--arrow-right-2-thin] h-24 w-24'></span>
                        </button>
                    </div>
                    <div className='absolute bottom-0 flex w-full items-center justify-center gap-6 py-4 sm:hidden'>
                        {props.images &&
                            props.images.mobileImages.map((image: CarouselImage, i: number) => (
                                <div
                                    key={'carousel-circle-' + i}
                                    className={`cursor-pointer rounded-full transition-all duration-500 ${i === currentSlide ? 'h-5 w-5 bg-brand-black ' : 'h-4 w-4 bg-white'}`}
                                    onClick={() => setCurrentSlide(i)}
                                />
                            ))}
                    </div>
                </>
            ) : null}
            {props.testimonials ? (
                <>
                    <div className='item-center mt-8 flex w-full justify-center space-x-8 text-brand-black'>
                        <button
                            className='flex h-fit w-fit items-center focus:outline-none'
                            aria-label='Previous Slide Button'
                            onClick={previousSlide}
                        >
                            <span className='icon-[iconamoon--arrow-left-2-thin] h-24 w-24'></span>
                        </button>
                        <button
                            className='flex h-fit w-fit items-center focus:outline-none'
                            aria-label='Next Slide Button'
                            onClick={nextSlide}
                        >
                            <span className='icon-[iconamoon--arrow-right-2-thin] h-24 w-24'></span>
                        </button>
                    </div>
                </>
            ) : null}
        </div>
    );
}

export default memo(Carousel);
