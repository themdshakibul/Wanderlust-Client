import Link from "next/link";
import { FaXTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[#050505] text-gray-500 px-6 md:px-16 py-20 border-t border-white/5">
      <div className="container mx-auto">
        {/* Top Branding Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">
              Wander<span className="text-cyan-500 italic">lust</span>
            </h1>
            <p className="mt-6 text-lg text-gray-400 font-medium leading-relaxed max-w-md">
              Crafting extraordinary journeys for the modern explorer. Your
              gateway to the worlds most hidden gems.
            </p>
          </div>

          {/* Newsletter with Modern Input */}
          <div className="w-full lg:w-100">
            <h3 className="text-white text-xs font-black tracking-[0.3em] uppercase mb-6">
              Newsletter
            </h3>
            <p className="mb-6 text-sm">
              Subscribe for exclusive travel deals and inspiration.
            </p>

            <div className="group relative flex items-center border-b-2 border-white/10 focus-within:border-cyan-500 transition-all duration-500 pb-2">
              <input
                type="email"
                placeholder="YOUR EMAIL ADDRESS"
                className="bg-transparent outline-none flex-1 text-sm font-bold text-white tracking-widest placeholder:text-gray-700"
              />
              <button className="p-2 bg-cyan-500 text-black rounded-full hover:scale-110 transition-transform">
                <FiArrowUpRight className="text-xl" />
              </button>
            </div>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 border-b border-white/5 pb-20">
          {/* Quick Links */}
          <div>
            <h3 className="text-white text-[10px] font-black tracking-[0.4em] uppercase mb-8">
              Navigation
            </h3>
            <ul className="space-y-4">
              {["Home", "Destinations", "My Bookings", "My Profile"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase().replace(" ", "")}`}
                      className="text-sm font-bold hover:text-cyan-400 transition-colors uppercase tracking-widest"
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white text-[10px] font-black tracking-[0.4em] uppercase mb-8">
              Service
            </h3>
            <ul className="space-y-4">
              {["Help Center", "Terms of Service", "Privacy Policy"].map(
                (item) => (
                  <li
                    key={item}
                    className="text-sm font-bold hover:text-white cursor-pointer transition-colors uppercase tracking-widest"
                  >
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-white text-[10px] font-black tracking-[0.4em] uppercase mb-8">
              Get in Touch
            </h3>
            <div className="space-y-4">
              <p className="text-xl font-black text-white hover:text-cyan-500 transition-colors cursor-pointer">
                +880 1234 567 890
              </p>
              <p className="text-sm font-bold tracking-widest text-gray-400">
                CONTACT@WANDERLUST.COM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-600">
            © 2026 Wanderlust Global. Crafted with passion.
          </p>

          {/* Social Icons with Glassy Circle */}
          <div className="flex gap-4">
            {[
              { icon: <FaXTwitter />, link: "#" },
              { icon: <FaLinkedinIn />, link: "#" },
              { icon: <FaInstagram />, link: "#" },
            ].map((social, idx) => (
              <Link
                key={idx}
                href={social.link}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
