"use client";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Balancer from "react-wrap-balancer";
// <iframe
//                                     src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15863.518721462713!2d106.8035036!3d-6.2795452!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1cba7156625%3A0x6b1dc8021f3fc436!2sBLU%20Coffee%20%26%20Kitchen!5e0!3m2!1sid!2sid!4v1685968028375!5m2!1sid!2sid"
//                                     width="600"
//                                     height="450"
//                                     style={{ border: 0 }}
//                                 ></iframe>
export default function ContactUs() {
    return (
        <ParallaxProvider scrollAxis="vertical">
            <section className="tails-selected-element my-18 z-10 bg-transparent px-2 py-12 md:px-0">
                <div className="container mx-auto max-w-6xl items-center px-8 xl:px-5">
                    <Parallax speed={5}>
                        <div className="h-[1/6] w-full">
                            <div className="aspect-[3/1] overflow-hidden rounded-md shadow-xl sm:rounded-xl ">
                                
                                <img src="/home_1.jpg" className="" alt=""/>
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
                            <form action="#" className="space-y-8">
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-gray-800 dark:text-gray-300">
                                        Your email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-800 shadow-sm"
                                        placeholder="name@flowbite.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-gray-800 dark:text-gray-300">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-800 shadow-sm"
                                        placeholder="Let us know how we can help you"
                                        required
                                    />
                                </div>
                                <div className="sm:col-span-2">
                                    <label className="mb-2 block text-sm font-medium text-gray-800 dark:text-gray-400">
                                        Your message
                                    </label>
                                    <textarea
                                        id="message"
                                        className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-800 shadow-sm"
                                        placeholder="Leave a comment..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="transition-color ml-auto flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-[#a5d163] px-4 py-2 duration-500 ease-in-out hover:bg-[#b6d982] md:px-7 md:py-4"
                                >
                                    <p className="inline-flex text-sm font-semibold text-white">
                                        Kirim masukan{" "}
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
                                            <line
                                                x1="5"
                                                y1="12"
                                                x2="19"
                                                y2="12"
                                            ></line>
                                            <polyline points="12 5 19 12 12 19"></polyline>
                                        </svg>
                                    </p>
                                </button>
                            </form>
                        </div>
                    </Parallax>
                </ParallaxProvider>
            </section>
        </ParallaxProvider>
    );
}
