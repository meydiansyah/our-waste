export default function WhyUs() {
    const data = [
        {
            title: "Apakah platform ini sudah berpengalaman ?",
            desc: 'Melalui platform kami yang sudah berjalan selama <span class="font-bold">20 tahun</span> dalam mengelola limbah dapat menghubungkan berbagai penjual dan pembeli limbah. Dan juga, terdapat layanan yang membantu pelanggan dengan menyederhanakan pengelolaan limbah anda dengan One Package Service.',
        },
		{
			title: "Apakah aman menggunakan layanan ini ?",
			desc: "Platform website yang sudah terdaftar <span class='font-bold'>pajak</span> memberikan kepercayaan kepada pengguna atau pelanggan bahwa transaksi yang mereka lakukan mematuhi hukum perpajakan dan turut berkontribusi pada penerimaan negara.",
		}
    ];
    return (
        <section className="min-w-screen animation-fade animation-delay tails-selected-element relative z-10 py-16">
            <div className="container mx-auto px-0 px-8 sm:px-12 xl:px-5">
                <p className="sm:text-normal text-left text-xs font-bold uppercase text-[#a5d163] sm:mx-6 sm:text-center sm:font-bold">
                    Limbah Kami
                </p>
                <h3 className="mt-1 text-left text-2xl font-bold text-gray-800 sm:mx-0 sm:mx-6 sm:text-center sm:text-3xl md:text-4xl lg:text-5xl">
                    Why us ?
                </h3>
                {data.map((e) => (
                    <div
                        key={e.title}
                        className="mx-auto my-10 w-full rounded-lg border border-gray-200 bg-white px-6 py-6 sm:px-8 sm:py-8 sm:shadow md:px-12 lg:w-5/6 xl:w-2/3"
                        data-rounded="rounded-lg"
                        data-rounded-max="rounded-full"
                    >
                        <h3 className="text-lg font-bold text-[#468d49] sm:text-xl md:text-2xl">
                            {e.title}
                        </h3>
                        <p
                            className="md:text-normal mt-2 text-base text-gray-600 sm:text-lg"
                            dangerouslySetInnerHTML={{ __html: e.desc }}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
