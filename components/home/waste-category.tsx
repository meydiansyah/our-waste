import { category } from "@/lib/const/wastes";

/* eslint-disable @next/next/no-img-element */
export default function CategoryWaste() {
    return (
        <div className="mx-auto my-12 mb-24 max-w-7xl px-6 md:px-12 xl:px-6">
            <div className="mb-12 space-y-2 text-center">
                <h3 className="mt-1 text-left text-2xl font-bold text-gray-800 sm:mx-0 sm:mx-6 sm:text-center sm:text-3xl md:text-4xl lg:text-5xl">
                    Kategori Sampah
                </h3>
                <p className="text-gray-600 lg:mx-auto lg:w-6/12">
                    Timbang, Bayar, Manfaatkan
                </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {category.map((e) => (
                    <div
                        key={e.title}
                        className="group rounded-3xl border border-[#468d49] p-6 shadow-2xl shadow-gray-600/10 sm:p-8"
                    >
                        <div className="relative overflow-hidden rounded-xl">
                            <img
                                src={e.src}
                                alt="art cover"
                                loading="lazy"
                                width="1000"
                                height="667"
                                className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="relative mt-6">
                            <h3 className="text-2xl font-semibold text-gray-800 ">{`${e.title} ${e.subTitle}`}</h3>
                            <p className="mb-8 mt-6 text-gray-600">
                                {e.description}
                            </p>
                            <a className="inline-block" href="/services/seller">
                                <span className="text-[#468d49]">
                                    Baca selengkapnya
                                </span>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
