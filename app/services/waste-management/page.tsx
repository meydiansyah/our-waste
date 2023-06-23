/* eslint-disable @next/next/no-img-element */
"use client";
import Header from "@/components/header";
import { Parallax, ParallaxProvider, useParallax } from "react-scroll-parallax";

export default function WasteManagementPage() {
    return (
        <ParallaxProvider scrollAxis="vertical">
            <Header title="One Package" subTitle="Waste Management" />

            <section className="tails-selected-element my-18 z-10 bg-transparent px-2 py-12 md:px-0">
                <div className="container mx-auto max-w-6xl items-center px-8 xl:px-5">
                    <Parallax speed={5}>
                        <div className="h-[1/6] w-full">
                            <div className="aspect-[3/1] overflow-hidden rounded-md object-center shadow-xl sm:rounded-xl">
                                <img
                                    src="/service.jpg"
                                    className="object-none object-center"
                                    alt=""
                                />
                            </div>
                        </div>
                    </Parallax>
                </div>
            </section>

            <section className="z-20 mx-auto mb-20 max-w-4xl">
                <ParallaxProvider scrollAxis="vertical">
                    <Parallax speed={-15}>
                        <div className="mx-auto max-w-screen-md rounded-lg bg-white p-8 shadow-lg lg:py-14">
                            <p className="mb-8 text-center font-light text-gray-500 dark:text-gray-400 sm:text-xl lg:mb-16">
                                Memudahkan dan menyederhanakan pengelolaan
                                limbah perusahaan dengan solusi terintegrasi dan
                                komprehensif.
                            </p>
                            <p className="mb-8 font-light text-gray-500 dark:text-gray-400 sm:text-xl lg:mb-16">
                                One Package Service pada Limbah Kami adalah
                                konsep yang kami tawarkan kepada perusahaan
                                untuk memudahkan dan menyederhanakan pengelolaan
                                limbah mereka secara menyeluruh. Dengan
                                pendekatan ini, kami menyediakan solusi yang
                                komprehensif dan terintegrasi untuk semua aspek
                                pengelolaan limbah perusahaan.
                            </p>
                            <p className="mb-8 font-light text-gray-500 dark:text-gray-400 sm:text-xl lg:mb-16">
                                Melalui One Package Service, kami menangani
                                berbagai tahap dalam siklus pengelolaan limbah,
                                mulai dari pengumpulan, transportasi, pemilahan
                                dan pemrosesan limbah, hingga pembuangan yang
                                sesuai dengan regulasi lingkungan. Kami
                                berkomitmen untuk memberikan pengalaman yang
                                mudah dan efisien bagi perusahaan dalam
                                mengelola limbah mereka.
                            </p>
                            <p className="font-light text-gray-500 dark:text-gray-400 sm:text-xl">
                                Keuntungan utama dari One Package Service adalah
                                kesederhanaan dan kepraktisannya. Perusahaan
                                tidak perlu mengurus berbagai vendor atau
                                penyedia layanan yang berbeda untuk setiap tahap
                                pengelolaan limbah. Sebagai gantinya, mereka
                                dapat mengandalkan kami sebagai satu titik
                                kontak untuk semua kebutuhan pengelolaan limbah
                                mereka.
                            </p>
                        </div>
                    </Parallax>
                </ParallaxProvider>
            </section>
            <section className="tails-selected-element z-10 my-20 h-auto rounded-md bg-[#468d49]">
                <div className="mx-auto max-w-7xl px-10 py-12">
                    <div className="mx-auto w-full text-left md:text-center">
                        <h1 className="mx-auto max-w-5xl text-3xl font-extrabold leading-none tracking-normal text-white sm:text-3xl md:text-3xl md:tracking-tight lg:text-5xl">
                            Menjadi mitra yang dapat
                            <span className="w-full text-gray-900 lg:inline">
                                {" diandalkan dan membantu "}
                            </span>
                            perusahaan mencapai tujuan keberlanjutan mereka
                            dengan lebih efektif dan efisien.
                        </h1>
                    </div>
                </div>
            </section>
        </ParallaxProvider>
    );
}
