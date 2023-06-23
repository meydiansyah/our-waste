"use client";
import Carousel from "@/components/carousel";
import Content from "@/components/content";
import Header from "@/components/header";
import CategoryWaste from "@/components/home/waste-category";
import WhyUs from "@/components/home/why-us";
import { Parallax, ParallaxProvider, useParallax } from "react-scroll-parallax";

function ParallaxHead() {
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
            <Header
                title="Berikan dampak positif bagi dunia"
                subTitle="Mari mengubah limbah menjadi sumber daya berharga"
                action={
                    <a
                        href="/services"
                        className="transition-color mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-[#a5d163] px-7 py-2 duration-500 ease-in-out hover:bg-[#b6d982]"
                    >
                        <p className="text-sm font-semibold text-white">
                            Pelajari Lebih Lanjut
                        </p>
                    </a>
                }
            />
            <ParallaxHead />
            <Content
                title="Pembelian"
                subTitle="Limbah"
                description="Limbah Kami dapat melakukan pembelian limbah perusahaan dengan sistem timbang bayar"
                src="/home_2.jpg"
            >
                <a
                    href="/services/seller"
                    className="transition-color mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-[#a5d163] px-7 py-2 duration-500 ease-in-out hover:bg-[#b6d982]"
                >
                    <p className="text-sm font-semibold text-white">
                        Baca selengkapnya{" "}
                    </p>
                </a>
            </Content>
            <Content
                title="One Package"
                subTitle="Waste Management"
                description="Konsep yang kami tawarkan kepada perusahaan untuk memudahkan dan menyederhanakan pengelolaan limbah mereka secara menyeluruh."
                src="/home_3.jpg"
                reverse
            >
                <a
                    href="/services/waste-management"
                    className="transition-color mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-[#a5d163] px-7 py-2 duration-500 ease-in-out hover:bg-[#b6d982]"
                >
                    <p className="text-sm font-semibold text-white">
                        Baca selengkapnya{" "}
                    </p>
                </a>
            </Content>
            <CategoryWaste />
            <WhyUs />
            <section className="tails-selected-element z-10 my-10 bg-transparent px-2 md:px-0">
                <div className="container mx-auto max-w-6xl items-center px-8 xl:px-5">
                    <div className="flex flex-col items-start justify-between space-x-4 space-y-4 border-0 border-gray-200 text-gray-900 lg:flex-row lg:items-center">
                        <div className="mx:px-3 box-border flex-1 border-solid text-center sm:text-left">
                            <h2 className="m-0 border-0 border-gray-200 text-left text-2xl font-semibold leading-tight tracking-tight text-black sm:text-5xl">
                                Tertarik menggunakan jasa kami ?
                            </h2>
                            <p className="mt-2 border-0 border-gray-200 text-left text-xl text-gray-900 sm:text-xl">
                                Temukan beberapa keuntungan yang kamu peroleh
                                ketika bergabung dengan kami.
                            </p>
                        </div>
                        <a
                            href="/services"
                            className="transition-color flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-[#a5d163] px-7 py-4 duration-500 ease-in-out hover:bg-[#b6d982] md:mx-auto"
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
