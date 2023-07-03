export const listNavs = [
    {
        url: "/about",
        title: "About",
    },
    {
        url: "/services",
        title: "Services",
        subMenu: [
            {
                url: "/services/seller",
                title: "Pembelian Limbah",
            },
            {
                url: "/services/waste-management",
                title: "Waste Management",
            },
        ],
    },
    {
        url: "/contact-us",
        title: "Contact Us",
    },
];

export const scraps = [
    "Plongan",
    "H1: H1 scrap mengacu pada Besi kelas super,. Memiliki panjang 2 milimeter dan diproduksi oleh perusahaan manufaktur atau dari kehancuran infrastruktur. ",
    "H2: H2 scrap mengacu pada besi super class 2. Ketebalannya berkisar antara 0,1 hingga 2 millimeter, lebih tipis dan lebih ramping dibandingkan dengan H1. Memo H2 juga diproduksi oleh perusahaan manufaktur atau dari penghancuran infrastruktur. ",
    "G: Gram scrap adalah besi dalam bentuk serbuk besi, yang diproduksi oleh perusahaan manufaktur, perusahaan otomotif, dan bengkel. ",
    "G1: Scrap Gram1 mirip dengan scrap G, tetapi berkarat. Ini juga terdiri dari serbuk besi dan diproduksi oleh perusahaan manufaktur, perusahaan otomotif, dan bengkel. ",
    "R: R atau disebut Rongsok scrap mengandung karbon lebih dari 4%, membuatnya kuat dan sulit dilebur. ",
    "R1: scrap Rongsok 1 adalah skrap campuran yang terlalu besar dan sulit untuk dilebur dan diproses.",
    "K: K mengacu pada kaleng",
];

export const plastics = ["HD,PE", "PP", "ABS", "HD Blow"];

export const category = [
	{
		title: "Limbah",
		subTitle: "Scrap",
		description: "Ada beberapa jenis scrap dan setiap jenis memiliki nilai yang berbeda:",
		src: "/scrap.jpg",
		content: scraps,
	},
		{
		title: "Limbah",
		subTitle: "Plastik",
		description: "Ada beberapa jenis plastik yang saat ini Limbah Kami terima:",
		src: "/home_5.jpg",
		content: scraps,
	},
		{
		title: "Limbah",
		subTitle: "Kardus",
		description: "Menerima semua jenis limbah kardus.",
		src: "/kardus.jpg",
	},
];

