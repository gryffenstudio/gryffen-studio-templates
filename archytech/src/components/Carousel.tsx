import React, { useState, useRef } from 'react';

interface CarouselImage {
    image: any;
    imageAlt: string;
}

interface CarouselProps {
    desktopImages: CarouselImage[];
    mobileImages: CarouselImage[];
}

function Carousel(props: CarouselProps) {
    const [currentImage, setCurrentImage] = useState<number>(0);
    const touchStartX = useRef<number | null>(null);

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (!touchStartX.current) return;

        const touchCurrentX = e.touches[0].clientX;
        const diffX = touchStartX.current - touchCurrentX;

        if (diffX > 0) {
            nextSlide();
        } else if (diffX < 0) {
            previousSlide();
        }

        touchStartX.current = null;
    };

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

    return (
        <div
            className='w-full max-w-full overflow-hidden relative'
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
        >
            <div
                className='flex transition ease-in-out duration-700'
                style={{
                    transform: `translateX(-${currentImage * 100}%)`,
                }}
            >
                {props.mobileImages.map((carouselImage: CarouselImage, index) => (
                    <img
                        key={`mobile-${index}`}
                        src={carouselImage.image.src}
                        alt={carouselImage.imageAlt}
                        className='min-w-full h-auto sm:hidden'
                        decoding='async'
                        loading='lazy'
                    />
                ))}
                {props.desktopImages.map((carouselImage: CarouselImage, index) => (
                    <img
                        key={`desktop-${index}`}
                        src={carouselImage.image.src}
                        alt={carouselImage.imageAlt}
                        className='min-w-full h-auto sm:flex'
                        decoding='async'
                        loading='lazy'
                    />
                ))}
            </div>

            <div className='absolute hidden top-0 h-full w-full justify-between item-center text-white sm:flex'>
                <button aria-label='Previous Slide Button' onClick={previousSlide}>
                    <span className='icon-[iconamoon--arrow-left-2-thin] h-24 w-24'></span>
                </button>
                <button aria-label='Next Slide Button' onClick={nextSlide}>
                    <span className='icon-[iconamoon--arrow-right-2-thin] h-24 w-24'></span>
                </button>
            </div>

            <div className='absolute bottom-0 py-4 flex justify-center items-center w-full gap-10 sm:hidden'>
                {props.mobileImages.map((image: CarouselImage, i: number) => (
                    <div
                        key={`carousel-circle-${i}`}
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