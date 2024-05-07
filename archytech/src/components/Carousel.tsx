import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

interface CarouselImage {
    image: any;
    alt: string;
}

interface CarouselProps {
    desktopImages: CarouselImage[];
    mobileImages: CarouselImage[];
}

function Carousel(props: CarouselProps) {
    const [currentImage, setCurrentImage] = useState<number>(0);

    const previousSlide = () => {
        setCurrentImage((prevImage) =>
            prevImage === 0 ? props.mobileImages.length - 1 : prevImage - 1
        );
    };

    const nextSlide = () => {
        setCurrentImage((prevImage) =>
            prevImage === props.mobileImages.length - 1 ? 0 : prevImage + 1
        );
    };

    // Define swipe handlers using react-swipeable useSwipeable hook
    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => nextSlide(),
        onSwipedRight: () => previousSlide(),
    });

    return (
        <div className='w-full max-w-full overflow-hidden relative' {...swipeHandlers}>
            <div
                className='flex transition ease-in-out duration-700'
                style={{
                    transform: `translateX(-${currentImage * 100}%)`
                }}
            >
                {props.mobileImages.map((carouselImage: CarouselImage, index) => (
                    <img
                        key={`mobile-${index}`}
                        src={carouselImage.image.src}
                        alt={carouselImage.alt}
                        height={681}
                        width={327}
                        className='min-w-full h-auto block sm:hidden'
                        decoding='async'
                        loading='lazy'
                    />
                ))}
                {props.desktopImages.map((carouselImage: CarouselImage, index) => (
                    <img
                        key={`desktop-${index}`}
                        src={carouselImage.image.src}
                        alt={carouselImage.alt}
                        height={681}
                        width={1196}
                        className='min-w-full h-auto hidden sm:block'
                        decoding='async'
                        loading='lazy'
                    />
                ))}
            </div>

            <div className='absolute hidden top-0 h-full w-full justify-between item-center text-white sm:flex'>
                <button aria-label='Previous Slide Button' onClick={previousSlide}>
                    <span className="icon-[iconamoon--arrow-left-2-thin] h-24 w-24"></span>
                </button>
                <button aria-label='Next Slide Button' onClick={nextSlide}>
                    <span className="icon-[iconamoon--arrow-right-2-thin] h-24 w-24"></span>
                </button>
            </div>

            <div className='absolute bottom-0 py-4 flex justify-center items-center w-full gap-6 sm:hidden'>
                {props.mobileImages.map((image: CarouselImage, i: number) => (
                    <div
                        key={'carousel-circle-' + i}
                        className={`transition-all duration-500 rounded-full cursor-pointer ${
                            i === currentImage ? 'bg-brand-black h-5 w-5 ' : 'bg-white h-4 w-4'
                        }`}
                        onClick={() => setCurrentImage(i)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Carousel;
