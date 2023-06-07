/* eslint-disable @next/next/no-img-element */
"use client";
import { PhoneCall, AtSign } from "lucide-react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Balancer from "react-wrap-balancer";

export default function ContactUs() {
    return (
        <ParallaxProvider scrollAxis="vertical">
            <section className="tails-selected-element my-18 z-10 bg-transparent px-2 py-12 md:px-0">
                <div className="container mx-auto max-w-6xl items-center px-8 xl:px-5">
                    <Parallax speed={5}>
                        <div className="h-[1/6] w-full">
                            <div className="aspect-[3/1] overflow-hidden rounded-md shadow-xl sm:rounded-xl ">
                                <img src="/home_1.jpg" className="" alt="" />
                            </div>
                        </div>
                    </Parallax>
                </div>
            </section>

            <section className="z-20 mx-auto max-w-4xl">
                <ParallaxProvider scrollAxis="vertical">
                    <Parallax speed={-15}>
                        <div className="mx-auto max-w-screen-md rounded-lg bg-white p-8 shadow-lg lg:py-14">
                            <h1
                                className="font-display animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
                                style={{
                                    animationDelay: "0.15s",
                                    animationFillMode: "forwards",
                                }}
                            >
                                <Balancer>Contact Us</Balancer>
                            </h1>
                            <p className="mb-8 text-center font-light text-gray-500 dark:text-gray-400 sm:text-xl lg:mb-16">
                                Punya masalah teknis? Ingin mengirim masukan
                                tentang fitur beta? Butuh detail tentang rencana
                                Bisnis kami? Beritahu kami.
                            </p>
                            <div className="mb-8 flex w-full justify-center space-x-4">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15863.518721462713!2d106.8035036!3d-6.2795452!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1cba7156625%3A0x6b1dc8021f3fc436!2sBLU%20Coffee%20%26%20Kitchen!5e0!3m2!1sid!2sid!4v1685968028375!5m2!1sid!2sid"
                                    width="500"
                                    height="350"
                                    style={{ border: 0 }}
                                ></iframe>
                            </div>

                            <div className="flex flex-row justify-center space-x-8">
                                <a href="https://wa.me/15551234567" target="__blank" className="flex flex-row space-x-4">
                                    <PhoneCall />
                                    <span className="font-medium">
                                        (+62) 088383
                                    </span>
                                </a>
                                <div className="flex flex-row space-x-4">
                                    <AtSign />
                                    <span className="font-medium">tellme@limbahkami.com</span>
                                </div>
                            </div>
                        </div>
                    </Parallax>
                </ParallaxProvider>
            </section>
        </ParallaxProvider>
    );
}
