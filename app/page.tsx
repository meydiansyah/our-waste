"use client";
import Footer from "@/components/footer";
import HeaderHome from "@/components/home/header";
import OurFeatures from "@/components/home/price";
import Testimonials from "@/components/home/testimonials";
import WhyUs from "@/components/home/why-us";
import { Parallax, ParallaxProvider, useParallax } from "react-scroll-parallax";
import Balancer from "react-wrap-balancer";

export function ParallaxHead() {
    const parallax = useParallax<HTMLDivElement>({
        easing: [1, 0, 0.5, 0.1],
        opacity: [1, 0],
    });
    return (
        <section
            ref={parallax.ref}
            className="tails-selected-element z-10 my-20 h-auto bg-transparent"
        >
            <Parallax speed={-5}>
                <div className="mx-auto max-w-7xl px-10 py-24">
                    <div className="mx-auto w-full text-left md:text-center">
                        <h1 className="mx-auto mb-6 max-w-5xl text-3xl font-extrabold leading-none tracking-normal text-gray-900 sm:text-3xl md:text-3xl md:tracking-tight lg:text-5xl">
                            Solusi Limbah yang Efisien
                            <span className="w-full bg-gradient-to-r from-[#468d49] to-[#9dcd5d] bg-clip-text text-transparent lg:inline">
                                {" melindungi lingkungan "}
                            </span>
                            kita, dan membangun masa depan yang berkelanjutan{" "}
                        </h1>
                        <p className="px-0 text-lg text-gray-600 md:text-xl lg:px-24">
                            Bersama-sama, ubah limbah jadi sumber daya, lindungi
                            lingkungan, dan bangun masa depan berkelanjutan
                        </p>
                    </div>
                </div>
            </Parallax>
        </section>
    );
}

export default function Home() {
    return (
        <ParallaxProvider scrollAxis="vertical">
            <HeaderHome />
            <ParallaxHead />
            <section className="tails-selected-element z-10 my-20 bg-transparent px-2 md:px-0">
                <div className="container mx-auto max-w-6xl items-center px-8 xl:px-5">
                    <div className="flex flex-wrap items-center sm:-mx-3">
                        <div className="w-full md:w-1/2 md:px-3">
                            <div className="w-full space-y-6 pb-6 sm:max-w-md sm:pr-5 md:space-y-4 md:pb-0 lg:max-w-lg lg:space-y-8 lg:pr-0 xl:space-y-9">
                                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                                    <span className="block xl:inline">
                                        Pembelian{" "}
                                    </span>
                                    {/*<span className="block text-[#468d49] xl:inline">*/}
                                    <span className="w-full bg-gradient-to-r from-[#468d49] to-[#9dcd5d] bg-clip-text text-transparent lg:inline">
                                        Limbah
                                    </span>
                                </h1>
                                <p className="mx-auto text-base text-gray-500 sm:max-w-md md:max-w-3xl lg:text-xl">
                                    Limbah Kami dapat melakukan pembelian limbah
                                    perusahaan dengan sistem timbang bayar
                                </p>
                                <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                                    <a
                                        href="https://twitter.com/steventey/status/1613928948915920896"
                                        target="_blank"
                                        className="transition-color mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-[#a5d163] px-7 py-2 duration-500 ease-in-out hover:bg-[#b6d982]"
                                    >
                                        <p className="text-sm font-semibold text-white">
                                            Baca selengkapnya{" "}
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <Parallax speed={25}>
                                <div
                                    className="h-auto w-full overflow-hidden rounded-md shadow-xl sm:rounded-xl"
                                    data-rounded="rounded-xl"
                                    data-rounded-max="rounded-full"
                                >
                                    <img src="/home_2.jpg" className="" />
                                </div>
                            </Parallax>
                        </div>
                    </div>
                </div>
            </section>
            <section className="tails-selected-element z-10 bg-transparent p-2 md:px-0">
                <div className="container mx-auto max-w-6xl items-center px-8 xl:px-5">
                    <div className="flex flex-wrap items-center sm:-mx-3">
                        <div className="w-full md:w-1/2">
                            <Parallax speed={25}>
                                <div
                                    className="h-auto w-full overflow-hidden rounded-md shadow-xl sm:rounded-xl"
                                    data-rounded="rounded-xl"
                                    data-rounded-max="rounded-full"
                                >
                                    <img src="/home_3.jpg" className="" />
                                </div>
                            </Parallax>
                        </div>
                        <div className="w-full md:w-1/2 md:px-3">
                            <div className="w-full space-y-6 pb-6 sm:max-w-md sm:pl-5 md:space-y-4 md:pb-0 lg:max-w-lg lg:space-y-8 lg:pr-0 xl:space-y-9">
                                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                                    <span className="block xl:inline">
                                        One Package{" "}
                                    </span>
                                    {/*<span className="block text-[#468d49] xl:inline">*/}
                                    <span className="w-full bg-gradient-to-r from-[#468d49] to-[#9dcd5d] bg-clip-text text-transparent lg:inline">
                                        Waste Management{" "}
                                    </span>
                                </h1>
                                <p className="mx-auto text-base text-gray-500 sm:max-w-md md:max-w-3xl lg:text-xl">
                                    Konsep yang kami tawarkan kepada perusahaan
                                    untuk memudahkan dan menyederhanakan
                                    pengelolaan limbah mereka secara menyeluruh.
                                </p>
                                <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                                    <a
                                        href="https://twitter.com/steventey/status/1613928948915920896"
                                        target="_blank"
                                        className="transition-color mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-[#a5d163] px-7 py-2 duration-500 ease-in-out hover:bg-[#b6d982]"
                                    >
                                        <p className="text-sm font-semibold text-white">
                                            Baca selengkapnya
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <WhyUs />
            <section className="tails-selected-element z-10 my-10 bg-transparent px-2 md:px-0">
                <div className="container mx-auto max-w-6xl items-center px-8 xl:px-5">
                    <div className="flex space-x-4 flex-col items-start justify-between border-0 border-gray-200 text-gray-900 lg:flex-row lg:items-center space-y-4">
						<div className="mx:px-3 box-border flex-1 border-solid text-center sm:text-left">
                            <h2 className="m-0 border-0 border-gray-200 text-left text-2xl font-semibold leading-tight tracking-tight text-black sm:text-5xl">
                                Kategori Sampah
                            </h2>
                            <p className="mt-2 border-0 border-gray-200 text-left text-xl text-gray-900 sm:text-xl">
                                Beberapa kategori sampah yang dapat kamu
                                tukarkan di Limbah Kami.
                            </p>
                        </div>
                        <a
                            href="https://twitter.com/steventey/status/1613928948915920896"
                            target="_blank"
                            rel="noreferrer"
							className="transition-color md:mx-auto flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-[#a5d163] px-7 py-4 duration-500 ease-in-out hover:bg-[#b6d982]"
                        >
                            <p className="inline-flex text-sm font-semibold text-white">
                                Pelajari Lebih Lanjut
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="ml-2 h-5 w-5"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </p>
                        </a>
                    </div>
                </div>
            </section>
        </ParallaxProvider>
    );
}
