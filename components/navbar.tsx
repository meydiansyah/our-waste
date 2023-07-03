"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import "react-dropdown/style.css";
import Dropdown from "./dropdown";
import {listNavs} from "@/lib/const/wastes";

export default function NavBar() {
    const scrolled = useScroll(100);
    return (
        <>
            <div
                className={`fixed top-0 w-full ${
                    scrolled
                        ? "border-b border-gray-200 bg-white/100 backdrop-blur-lg"
                        : "bg-white/0"
                } z-30 transition-all`}
            >
                <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between transition duration-300 ease-in-out xl:mx-auto">
                    <Link
                        href="/"
                        className="font-display flex items-center text-2xl"
                    >
                        <Image
                            src="/logo.png"
                            alt="Precedent logo"
                            width="150"
                            height="0"
                            className="mr-2 rounded-sm"
                        ></Image>
                    </Link>
                    <div className="flex items-center space-x-2 text-gray-600">
                        {listNavs.map((e) =>
                            e.subMenu ? (
                                <Dropdown
                                    key={e.title}
                                    title={e.title}
                                    listMenu={e.subMenu}
                                />
                            ) : (
                                <Link
                                    key={e.title}
                                    href={e.url}
									className="p-2 text-lg transition duration-300 ease-in-out hover:text-black"
                                >
                                    {e.title}
                                </Link>
                            )
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
