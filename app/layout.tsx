import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Suspense } from "react";

export const metadata = {
    title: "Limbah Kami",
    description: "Deskripsi limbah kami",
    themeColor: "#FFF",
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <div className="fixed h-screen w-full bg-gradient-to-br from-[#f2fee0] via-white to-[#ddffaf]" />
                <Suspense fallback="...">
                    <Navbar />
                </Suspense>
                <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
                    {children}
                    <Footer />
                </main>
            </body>
        </html>
    );
}
