/* eslint-disable @next/next/no-img-element */
import { Parallax } from "react-scroll-parallax";

export default function Content({
    title,
    subTitle,
    description,
    src,
    children,
	reverse,
}: {
    title: string;
    subTitle: string;
    description: string;
    src: string;
	reverse?: boolean,
    children?: React.ReactNode;
}) {
    return (
        <section className="z-10 px-2 my-20 bg-transparent tails-selected-element md:px-0">
            <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
                <div className={`flex items-center sm:-mx-3 ` + (reverse && 'flex-row-reverse')}>
                    <div className="w-full mx-6 md:w-1/2">
                        <div className="w-full pb-6 space-y-6 sm:max-w-md sm:pr-5 md:space-y-4 md:pb-0 lg:max-w-lg lg:space-y-8 lg:pr-0 xl:space-y-9">
                            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                                <span className="block xl:inline">
                                    {title}{" "}
                                </span>
                                <span className="w-full bg-gradient-to-r from-[#468d49] to-[#9dcd5d] bg-clip-text text-transparent lg:inline">
                                    {subTitle}
                                </span>
                            </h1>
                            <p className="mx-auto text-base text-gray-500 sm:max-w-md md:max-w-3xl lg:text-xl">
                                {description}
                            </p>
                            <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                                {children}
                            </div>
                        </div>
                    </div>
                    <div className="w-full mx-6 md:w-1/2">
                        <Parallax speed={25}>
                            <div
                                className="w-full h-auto overflow-hidden shadow-xl rounded-md sm:rounded-xl"
                                data-rounded="rounded-xl"
                                data-rounded-max="rounded-full"
                            >
                                <img src={src} className="" alt="content" />
                            </div>
                        </Parallax>
                    </div>
                </div>
            </div>
        </section>
    );
}
