import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Swipe from "react-easy-swipe";

export default function Carousel({ images }: { images: string[] }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNextSlide = () => {
        let newSlide =
            currentSlide === images.length - 1 ? 0 : currentSlide + 1;
        setCurrentSlide(newSlide);
    };

    const handlePrevSlide = () => {
        let newSlide =
            currentSlide === 0 ? images.length - 1 : currentSlide - 1;
        setCurrentSlide(newSlide);
    };

    return (
        <section className="tails-selected-element z-10 my-10 bg-gray-800 px-2 md:px-0">
            <div className="container mx-auto max-w-6xl items-center px-8 xl:px-5">
                <ChevronLeft
                    onClick={handlePrevSlide}
                    className="absolute inset-y-1/2 left-0 z-20 m-auto cursor-pointer text-5xl text-gray-400"
                />
                <div className="relative flex h-[50vh] w-full overflow-hidden">
                    <Swipe
                        onSwipeLeft={handleNextSlide}
                        onSwipeRight={handlePrevSlide}
                        className="relative z-10 h-full w-full"
                    >
                        {images.map((image, index) => {
                            if (index === currentSlide) {
                                return (
                                    <Image
                                        key={index}
                                        src={image}
                                        layout="fill"
                                        objectFit="contain"
                                        className="animate-fadeIn"
                                        alt="carousel-image"
                                    />
                                );
                            }
                        })}
                    </Swipe>
                </div>
                <ChevronRight
                    onClick={handleNextSlide}
                    className="absolute inset-y-1/2 right-0 z-20 m-auto cursor-pointer text-5xl text-gray-400"
                />

                <div className="relative flex justify-center p-2">
                    {images.map((_, key) => {
                        return (
                            <div
                                className={
                                    key === currentSlide
                                        ? "mx-2 mb-2 h-3 w-3 cursor-pointer rounded-full bg-gray-700"
                                        : "mx-2 mb-2 h-3 w-3 cursor-pointer rounded-full bg-gray-300"
                                }
                                key={key}
                                onClick={() => {
                                    setCurrentSlide(key);
                                }}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
