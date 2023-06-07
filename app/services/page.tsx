/* eslint-disable @next/next/no-img-element */
"use client";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Balancer from "react-wrap-balancer";

export default function Service() {
    return (
        <ParallaxProvider scrollAxis="vertical">
            <div className="z-10 w-full max-w-xl px-3 xl:px-0">
                <h1
                    className="font-display animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
                    style={{
                        animationDelay: "0.15s",
                        animationFillMode: "forwards",
                    }}
                >
                    <Balancer>Services</Balancer>
                </h1>
                <p
                    className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
                    style={{
                        animationDelay: "0.25s",
                        animationFillMode: "forwards",
                    }}
                >
                    <Balancer>
                        Beberapa pelayanan yang dapat kami berikan berupa :
                    </Balancer>
                </p>
                <div
                    className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
                    style={{
                        animationDelay: "0.3s",
                        animationFillMode: "forwards",
                    }}
                ></div>
            </div>

            <section className=" z-10  mx-auto max-w-6xl px-2 py-8 md:px-0">
                <div className="flex w-full items-center space-x-4  px-8 sm:items-center xl:px-5">
                    <a
                        href="/services/seller"
                        className="transition-color flex max-w-fit animate-fade-up items-center justify-center overflow-hidden rounded-full bg-[#a5d163] px-7 py-3 text-sm font-semibold text-white duration-500 ease-in-out hover:bg-[#b6d982]"
                    >
                        Pembelian Limbah
                    </a>
                    <a
                        href="/services/waste-management"
                        className="transition-color flex max-w-fit animate-fade-up items-center justify-center overflow-hidden rounded-full bg-[#a5d163] px-7 py-3 text-sm font-semibold text-white duration-500 ease-in-out hover:bg-[#b6d982]"
                    >
                        One Package Service
                    </a>
                </div>
            </section>

            <section className="tails-selected-element my-18 z-10 bg-transparent px-2 py-12 md:px-0">
                <div className="container mx-auto max-w-6xl items-center px-8 xl:px-5">
                    <Parallax speed={5}>
                        <div className="h-[1/6] w-full">
                            <div className="aspect-[3/1] overflow-hidden rounded-md shadow-xl sm:rounded-xl ">
                                <img src="/service.jpg" className="" alt="" />
                            </div>
                        </div>
                    </Parallax>
                </div>
            </section>
        </ParallaxProvider>
    );
}
