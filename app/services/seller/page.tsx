"use client";
import Content from "@/components/content";
import Header from "@/components/header";
import { category, plastics, scraps } from "@/lib/const/wastes";
import { Parallax, ParallaxProvider, useParallax } from "react-scroll-parallax";

function ParallaxComponent() {
    const parallax = useParallax<HTMLDivElement>({
        easing: [1, 0, 0.5, 0.1],
        opacity: [1, 0],
    });
    return (
        <Parallax speed={-5}>
            <section
                ref={parallax.ref}
                className="tails-selected-element z-10 my-20 h-auto rounded-md bg-[#468d49]"
            >
                <div className="mx-auto max-w-7xl px-10 py-24">
                    <div className="mx-auto w-full text-left md:text-center">
                        <h1 className="mx-auto max-w-5xl text-3xl font-extrabold leading-none tracking-normal text-white sm:text-3xl md:text-3xl md:tracking-tight lg:text-5xl">
                            Solusi
                            <span className="w-full text-gray-900 lg:inline">
                                {" terpercaya "}
                            </span>
                            dalam pembelian limbah dengan sistem timbang bayar.
                        </h1>
                    </div>
                </div>
            </section>
        </Parallax>
    );
}

export default function SellerPage() {
    return (
        <ParallaxProvider scrollAxis="vertical">
            <Header
                title="Pembelian Limbah"
                subTitle="Timbang, Bayar, Manfaatkan"
            />
            <Content
                title="Limbah"
                subTitle="Scrap"
                description="Ada beberapa jenis scrap dan setiap jenis memiliki nilai yang berbeda:"
                src="/scrap.jpg"
            >
                <ol className="list-decimal px-4">
                    {scraps.map((e) => (
                        <li key={e} className="my-2 font-medium text-gray-500">
                            {e}
                        </li>
                    ))}
                </ol>
            </Content>
            <Content
                title="Limbah"
                subTitle="Plastik"
                description="Ada beberapa jenis plastik yang saat ini Limbah Kami terima:"
                src="/home_5.jpg"
                reverse
            >
                <ol className="list-decimal px-4">
                    {plastics.map((e) => (
                        <li key={e} className="my-2 font-medium text-gray-500">
                            {e}
                        </li>
                    ))}
                </ol>
            </Content>
            <Content
                title="Limbah"
                subTitle="Kardus"
                description="Menerima semua jenis limbah kardus."
                src="/kardus.jpg"
            />
            <ParallaxComponent />
        </ParallaxProvider>
    );
}
