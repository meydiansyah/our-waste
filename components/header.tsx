
import Balancer from "react-wrap-balancer";

export default function Header({title, subTitle, action } : {
	title: string,
	subTitle: string,
	action?: React.ReactNode,
}) {
    return (
        <div className="z-10 w-full max-w-2xl px-3 xl:px-0">
            <h1
                className="font-display animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
                style={{
                    animationDelay: "0.15s",
                    animationFillMode: "forwards",
                }}
            >
                <Balancer>{title}</Balancer>
            </h1>
            <p
                className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
                style={{
                    animationDelay: "0.25s",
                    animationFillMode: "forwards",
                }}
            >
                <Balancer>{subTitle}</Balancer>
            </p>
			<div className="py-8">
			{action}
				</div>
        </div>
    );
}
