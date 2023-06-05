import Balancer from "react-wrap-balancer";

export default function HeaderAbout() {
    return (
        <div className="z-10 w-full max-w-xl px-3 xl:px-0">
            <h1
                className="font-display animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
                style={{
                    animationDelay: "0.15s",
                    animationFillMode: "forwards",
                }}
            >
                <Balancer>Limbah Kami</Balancer>
            </h1>
            <p
                className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
                style={{
                    animationDelay: "0.25s",
                    animationFillMode: "forwards",
                }}
            >
                <Balancer>
                    Optimalkan Pengelolaan Limbah Anda dengan Solusi Kami yang Efisien dan Bertanggung Jawab
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
