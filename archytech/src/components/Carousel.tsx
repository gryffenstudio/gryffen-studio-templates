import { useEffect, useState, memo } from 'react';
import { useSwipeable } from 'react-swipeable';

export interface CarouselImage {
    image: any;
    alt: string;
    height?: number;
    width?: number;
    href?: string;
}

interface CarouselProps {
    mobileImages: CarouselImage[];
    desktopImages?: CarouselImage[];
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
    const [currentImage, setCurrentImage] = useState<number>(0);
    const isMobile = useMediaQuery('(max-width: 640px)');

    const previousSlide = () => {
        setCurrentImage((prevImage) =>
            prevImage === 0 ? props.mobileImages.length - 1 : prevImage - 1,
        );
    };

    const nextSlide = () => {
        setCurrentImage((prevImage) =>
            prevImage === props.mobileImages.length - 1 ? 0 : prevImage + 1,
        );
    };

    // Define swipe handlers using react-swipeable useSwipeable hook
    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => nextSlide(),
        onSwipedRight: () => previousSlide(),
    });

    return (
        <div className='relative w-full max-w-full overflow-x-hidden' {...swipeHandlers}>
            <div
                className='flex transition duration-1000 ease-in-out'
                style={{
                    transform: `translateX(-${currentImage * 106}%)`,
                }}
            >
                <div className='flex'>
                    {isMobile &&
                        props.mobileImages &&
                        props.mobileImages.map((carouselImage: CarouselImage, index) => {
                            if (carouselImage.href) {
                                return (
                                    <a
                                        className='mr-5 block h-auto min-w-full sm:hidden'
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
                                            className='h-auto min-w-full'
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
                                    className='mr-5 block h-auto max-h-[600px] min-w-full sm:hidden'
                                    decoding='async'
                                    loading='lazy'
                                />
                            );
                        })}
                    {!isMobile &&
                        props.desktopImages &&
                        props.desktopImages.map((carouselImage: CarouselImage, index) => {
                            return (
                                <img
                                    key={`desktop-${index}`}
                                    src={carouselImage.image.src}
                                    alt={carouselImage.alt}
                                    height={681}
                                    width={1196}
                                    className='mr-18 hidden h-auto max-h-[850px] min-w-full sm:block md:mr-[37.5px] lg:mr-[48px] xl:mr-[72px] 2xl:mr-[78px]'
                                    decoding='async'
                                    loading='lazy'
                                />
                            );
                        })}
                </div>
            </div>

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
                {props.mobileImages.map((image: CarouselImage, i: number) => (
                    <div
                        key={'carousel-circle-' + i}
                        className={`cursor-pointer rounded-full transition-all duration-500 ${
                            i === currentImage ? 'h-5 w-5 bg-brand-black ' : 'h-4 w-4 bg-white'
                        }`}
                        onClick={() => setCurrentImage(i)}
                    />
                ))}
            </div>
        </div>
    );
}

export default memo(Carousel);
