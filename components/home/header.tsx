import Balancer from "react-wrap-balancer";

export default function HeaderHome() {
    return (
        <div className="z-10 w-full max-w-xl px-3 xl:px-0">
            <a
                href="/services"
                className="transition-color mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-[#a5d163] px-7 py-2 duration-500 ease-in-out hover:bg-[#b6d982]"
            >
                <p className="text-sm font-semibold text-white">Pelajari Lebih Lanjut</p>
            </a>
            <h1
                className="font-display animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
                style={{
                    animationDelay: "0.15s",
                    animationFillMode: "forwards",
                }}
            >
                <Balancer>Berikan dampak positif bagi dunia</Balancer>
            </h1>
            <p
                className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
                style={{
                    animationDelay: "0.25s",
                    animationFillMode: "forwards",
                }}
            >
                <Balancer>
                    Mari mengubah limbah menjadi sumber daya berharga.{" "}
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
    );
}
