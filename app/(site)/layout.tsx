import { Karla, Lora, Source_Sans_Pro } from "next/font/google";

import Navbar from "@/components/ui/Navbar";
import "../globals.css";
import Footer from "@/components/ui/Footer";

export const metadata = {
  title: "AVScannerNews.com",
  description: "",
};

const lora = Lora({
  variable: "--font-lora",
  display: "swap",
  subsets: ["latin"],
});
const karla = Karla({
  variable: "--font-karla",
  display: "swap",
  subsets: ["latin"],
});
const source = Source_Sans_Pro({
  variable: "--font-source",
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${karla.variable} + ${lora.variable} + ${source.variable}`}
    >
      <body>
        <div id="drawer-root"></div>
        <div id="mob-nav"></div>

        {/* <Providers> */}
        <Navbar />
        <div className="min-h-screen">{children}</div>
        <Footer />
        {/* </Providers> */}
      </body>
    </html>
  );
}
