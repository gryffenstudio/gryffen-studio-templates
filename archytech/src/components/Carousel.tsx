import React, { useState } from 'react'

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

    function previousSlide(){
        console.log(currentImage)
        if (currentImage === 0) setCurrentImage(props.mobileImages.length - 1);
        else setCurrentImage((currentImage) => currentImage - 1)
    }

    function nextSlide(){
        console.log(currentImage)
        if (currentImage === props.mobileImages.length - 1) setCurrentImage(0);
        else setCurrentImage((currentImage) => currentImage + 1)
    }
    return (
        <div className='w-full max-w-full overflow-hidden relative'>
            <div className='flex transition ease-in-out duration-700'
            style={{
                transform: `translateX(-${currentImage * 100}%)`
            }}>
                {
                    props.mobileImages.map((carouselImage: CarouselImage) => {
                        return <img key={`mobile-${props.mobileImages.indexOf(carouselImage)}`} src={carouselImage.image.src} alt={carouselImage.imageAlt} className='min-w-full h-auto md:hidden' decoding='async' loading='lazy' />
                    })
                }
                {
                    props.desktopImages.map((carouselImage: CarouselImage) => {
                        return <img key={`desktop-${props.desktopImages.indexOf(carouselImage)}`} src={carouselImage.image.src} alt={carouselImage.imageAlt} className='min-w-full h-auto md:flex' decoding='async' loading='lazy' />
                    })
                }
            </div>
            <div className='absolute flex top-0 h-full w-full justify-between item-center text-white'>
                <button onClick={() => previousSlide()}>
                    <span className="icon-[iconamoon--arrow-left-2-thin] h-24 w-24"></span>
                </button>
                <button onClick={() => nextSlide()}>
                    <span className="icon-[iconamoon--arrow-right-2-thin] h-24 w-24"></span>
                </button>
            </div>
        </div>

    )
    }

export default Carousel