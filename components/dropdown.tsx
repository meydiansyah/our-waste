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
                <ul className="sm:w-50 w-full p-2">
                    {listMenu.map((e) => {
                        return (
                            <>
                                {e.subMenu ? (
                                    <li key={e.title} onClick={toggleMulti}>
                                        <button className="flex items-center justify-between space-x-2 px-4 py-2 transition duration-300 ease-in-out hover:rounded-md hover:bg-gray-200 hover:text-black">
                                            <span>{e.title}</span>
                                            <ChevronDown
                                                className={`h-4 w-4 transition-all ${
                                                    multiDropdown
                                                        ? "rotate-180"
                                                        : ""
                                                }`}
                                            />
                                        </button>
                                        {multiDropdown && (
                                            <ul className="absolute ml-20 mt-4 w-full rounded-md bg-white p-2 text-gray-700 sm:w-40">
                                                {e.subMenu.map((sub) => (
                                                    <li key={sub["title"]}>
                                                        <a
                                                            className="whitespace-no-wrap block px-4 py-2 hover:rounded-md hover:bg-gray-200"
                                                            href={sub.url}
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
                                            className="whitespace-no-wrap block px-4 py-2 hover:rounded-md hover:bg-gray-200"
                                            href={e.url}
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
