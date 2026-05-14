import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Shared/Navbar";
import Footer from "@/Components/Shared/Footer";
import { ToastContainer } from "react-toastify";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
});

export const metadata = {
  title: "Wanderlust | Home Page",
  description:
    "Discover extraordinary travel experiences and hidden gems around the world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${josefinSans.className}  h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
