export default function OurFeatures() {
    return (
        <section className="tails-selected-element z-20 py-20">
            <div className="container mx-auto max-w-6xl">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-center text-4xl font-bold tracking-tight">
                        Our Features
                    </h2>
                    <p className="mt-2 text-center text-lg text-gray-600">
                        Check out our list of awesome features below.
                    </p>
                    <div className="mt-10 grid grid-cols-4 gap-8 sm:grid-cols-8 sm:px-8 lg:grid-cols-12 xl:px-0">
                        <div
                            className="relative col-span-4 flex flex-col items-center justify-between space-y-4 overflow-hidden bg-gray-100 px-8 py-12 sm:rounded-xl"
                        >
                            <div
                                className="rounded-full bg-green-500 p-3 text-white"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 "
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    ></path>
                                    <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                                    <path d="M5 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5"></path>
                                    <circle cx="6" cy="14" r="3"></circle>
                                    <path d="M4.5 17l-1.5 5l3 -1.5l3 1.5l-1.5 -5"></path>
                                </svg>
                            </div>
                            <h4 className="text-xl font-medium text-gray-700">
                                Certifications
                            </h4>
                            <p className="text-center text-base text-gray-500">
                                Each of our plan will provide you and your team
                                with certifications.
                            </p>
                        </div>

                        <div
                            className="col-span-4 flex flex-col items-center justify-between space-y-4 bg-gray-100 px-8 py-12 sm:rounded-xl"
                        >
                            <div
                                className="rounded-full bg-green-500 p-3 text-white"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 "
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    ></path>
                                    <path d="M18 8a3 3 0 0 1 0 6"></path>
                                    <path d="M10 8v11a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-5"></path>
                                    <path d="M12 8h0l4.524 -3.77a0.9 .9 0 0 1 1.476 .692v12.156a0.9 .9 0 0 1 -1.476 .692l-4.524 -3.77h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h8"></path>
                                </svg>
                            </div>
                            <h4 className="text-xl font-medium text-gray-700">
                                Notifications
                            </h4>
                            <p className="text-center text-base text-gray-500">
                                Send out notifications to all your customers to
                                keep them engaged.
                            </p>
                        </div>

                        <div
                            className="col-span-4 flex flex-col items-center justify-between space-y-4 bg-gray-100 px-8 py-12 sm:rounded-xl"
                            data-rounded="rounded-xl"
                            data-rounded-max="rounded-full"
                        >
                            <div
                                className="rounded-full bg-green-500 p-3 text-white"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 "
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    ></path>
                                    <polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3"></polyline>
                                    <line
                                        x1="12"
                                        y1="12"
                                        x2="20"
                                        y2="7.5"
                                    ></line>
                                    <line
                                        x1="12"
                                        y1="12"
                                        x2="12"
                                        y2="21"
                                    ></line>
                                    <line
                                        x1="12"
                                        y1="12"
                                        x2="4"
                                        y2="7.5"
                                    ></line>
                                    <line
                                        x1="16"
                                        y1="5.25"
                                        x2="8"
                                        y2="9.75"
                                    ></line>
                                </svg>
                            </div>
                            <h4 className="text-xl font-medium text-gray-700">
                                Bundles
                            </h4>
                            <p className="text-center text-base text-gray-500">
                                High-quality bundles of awesome tools to help
                                you out.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}