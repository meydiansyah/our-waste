"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import Popover from "./popover";

export interface NavigationProps {
    url: string;
    title: string;
    subMenu?: NavigationProps[];
}
const Dropdown = ({
    title,
    listMenu,
}: {
    title: string;
    listMenu: NavigationProps[];
}) => {
    const [openPopover, setOpenPopover] = useState(false);
    const [multiDropdown, setMultiDropdown] = useState(false);

    useEffect(() => {
        if (!openPopover) {
            setMultiDropdown(false);
        }
    }, [openPopover]);

    const toggleMulti = () => {
        setMultiDropdown(!multiDropdown);
    };
    return (
        <Popover
            content={
                <ul className="w-full p-2 sm:w-50">
                    {listMenu.map((e) => {
                        return (
                            <>
                                {e.subMenu ? (
                                    <li key={e.title} onClick={toggleMulti}>
                                        <button className="flex items-center justify-between px-4 py-2 hover:rounded-md hover:bg-gray-200 transition duration-300 ease-in-out hover:text-black space-x-2">
                                            <span >
                                                {e.title}
                                            </span>
                                            <ChevronDown
                                                className={`h-4 w-4 transition-all ${
                                                    multiDropdown
                                                        ? "rotate-180"
                                                        : ""
                                                }`}
                                            />
                                        </button>
                                        {multiDropdown && (
                                            <ul className="absolute w-full p-2 mt-4 ml-20 text-gray-700 bg-white rounded-md sm:w-40">
                                                {e.subMenu.map((sub) => (
                                                    <li key={sub["title"]}>
                                                        <a
                                                            className="block px-4 py-2 whitespace-no-wrap hover:rounded-md hover:bg-gray-200"
                                                            href="#"
                                                        >
                                                            {sub["title"]}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ) : (
                                    <li key={e.title}>
                                        <a
                                            className="block px-4 py-2 whitespace-no-wrap hover:rounded-md hover:bg-gray-200"
                                            href="#"
                                        >
                                            {e["title"]}
                                        </a>
                                    </li>
                                )}
                            </>
                        );
                    })}
                </ul>
            }
            openPopover={openPopover}
            setOpenPopover={setOpenPopover}
        >
            <button
                onClick={() => setOpenPopover(!openPopover)}
                className="flex items-center justify-between px-4 py-2"
            >
                <p className="p-2 text-lg transition duration-300 ease-in-out hover:text-black">
                    {title}
                </p>
                <ChevronDown
                    className={`h-4 w-4 text-gray-600 transition-all ${
                        openPopover ? "rotate-180" : ""
                    }`}
                />
            </button>
        </Popover>
    );
};

export default Dropdown;
