/* eslint-disable @next/next/no-img-element */
"use client";
import Header from "@/components/header";
import {
    Parallax,
    ParallaxProvider,
} from "react-scroll-parallax";

export default function AboutPage() {
    return (
        <ParallaxProvider scrollAxis="vertical">
			<Header title="Limbah Kami" subTitle="Optimalkan Pengelolaan Limbah Anda dengan Solusi Kami yang Efisien dan Bertanggung Jawab" />

            <section className="tails-selected-element my-18 z-10 bg-transparent px-2 py-12 md:px-0">
                <div className="container mx-auto max-w-6xl items-center px-8 xl:px-5">
                    <Parallax speed={5}>
                        <div className="h-[1/6] w-full">
                            <div
                                className="aspect-[3/1] overflow-hidden rounded-md shadow-xl sm:rounded-xl "
                            >
                                <img src="/home_1.jpg" className="" alt=""/>
                            </div>
                        </div>
                    </Parallax>
                </div>
            </section>

            <section className="tails-selected-element z-10 py-20">
                <div className="container mx-auto max-w-6xl items-center px-10 px-4 sm:px-20 md:px-32 lg:px-16">
                    <div className="-mx-3 flex flex-wrap items-center">
                        <div className="lg:order-0 order-1 w-full px-3 lg:w-1/2">
                            <div className="w-full lg:max-w-md">
                                <h2 className="font-heading mb-8 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                                    Tentang Limbah Kami
                                </h2>
                                <p className="mb-4 font-medium tracking-normal text-gray-400 xl:mb-6">
                                    Kami memahami bahwa banyak perusahaan
                                    menghadapi tantangan dalam pengelolaan
                                    limbah, seperti keterbatasan pengetahuan dan
                                    biaya yang tinggi. Sebagai pengelola limbah
                                    yang berdedikasi, kami memberikan layanan
                                    yang andal, berkelanjutan, dan hemat biaya.
                                </p>
                                <p className="mb-4 font-medium tracking-normal text-gray-400 xl:mb-6">
                                    Dalam memenuhi tujuan kami, kami menawarkan
                                    layanan pengumpulan, pengangkutan,
                                    pengolahan, dan pembuangan limbah. Dengan
                                    pendekatan kami, perusahaan dapat
                                    memaksimalkan efisiensi dalam pengelolaan
                                    limbah mereka.
                                </p>
                            </div>
                        </div>
                        <div className="order-0 mb-12 w-full px-3 lg:order-1 lg:mb-0 lg:w-1/2">
                            <img
                                className="mx-auto sm:max-w-sm lg:max-w-full"
                                src="/about.png"
                                alt="feature image"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="min-w-screen animation-fade animation-delay tails-selected-element relative z-10 py-16">
                <div className="container mx-auto px-0 px-8 sm:px-12 xl:px-5">
                    <p className="sm:text-normal text-left text-xs font-bold uppercase text-[#a5d163] sm:mx-6 sm:text-center sm:font-bold">
                        Tentang
                    </p>
                    <h3 className="mt-1 text-left text-2xl font-bold text-gray-800 sm:mx-0 sm:mx-6 sm:text-center sm:text-3xl md:text-4xl lg:text-5xl">
                        Visi & Misi
                    </h3>
					<p className="mt-4 font-medium tracking-normal text-lg sm:text-xl text-gray-400 text-left sm:text-center">Menjadi perusahaan pengelola sampah terkemuka di Indonesia</p>
                    <div className="-mx-3 flex flex-row-reverse flex-wrap items-center">
                        <div className="lg:order-0 order-1 w-full px-3 lg:w-1/2">
                            <div className="w-full lg:max-w-md">
                                <h2 className="font-heading mb-8 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                                    Misi Limbah Kami
                                </h2>
                                <p className="mb-4 font-medium tracking-normal text-gray-400 xl:mb-6">
                                    Dengan dua misi untuk merealisasikan visi
                                    kami yaitu:
                                </p>
                                <ul>
                                    <li className="flex items-center space-x-4 py-2 xl:py-3">
                                        <img
                                            className="mx-auto -scale-x-100 transform w-10 h-10"
                                            src="/services.png"
                                            alt="feature image"
                                        />
                                        <span className="font-medium text-gray-500">
                                            Menjadi mitra terpercaya dalam
                                            pengelolaan sampah, menyediakan
                                            layanan yang efisien dan andal
                                            dengan tetap mengutamakan
                                            kelestarian lingkungan dan
                                            keterlibatan masyarakat.
                                        </span>
                                    </li>
									<li className="flex items-center space-x-4 py-2 xl:py-3">
                                        <img
                                            className="mx-auto -scale-x-100 transform w-10 h-10"
                                            src="/collaborate.png"
                                            alt="feature image"
                                        />
                                        <span className="font-medium text-gray-500">
                                    Untuk terus meningkatkan layanan kami
                                    melalui kolaborasi, dan komitmen untuk
                                    keunggulan.
                                </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="order-0 mb-12 w-full px-3 lg:order-1 lg:mb-0 lg:w-1/2">
                    <Parallax speed={20}>
                            <img
                                className="mx-auto -scale-x-100 transform sm:max-w-sm lg:max-w-full"
                                src="/about_2.png"
                                alt="feature image"
                            />
					</Parallax>
                        </div>
                    </div>
                </div>
            </section>
        </ParallaxProvider>
    );
}
