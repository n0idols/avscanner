import { Karla } from "next/font/google";

import Navbar from "@/components/ui/Navbar";
import "../globals.css";
import Footer from "@/components/ui/Footer";

export const metadata = {
  title: "AVScannerNews.com",
  description: "",
};

const karla = Karla({
  variable: "--font-karla",
  display: "swap",
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${karla.variable}`}>
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
