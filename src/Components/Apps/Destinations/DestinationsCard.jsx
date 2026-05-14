import { Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoCalendarNumber } from "react-icons/io5";

const DestinationsCard = ({ destination }) => {
  const { _id, destinationName, country, price, duration, imageUrl } =
    destination;

  return (
    <section className="group">
      <Card className="relative overflow-hidden bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-3 transition-all duration-500 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] hover:-translate-y-3">
        {/* Image Container with Glassy Tag */}
        <div className="relative h-72 w-full overflow-hidden rounded-[2rem]">
          <Image
            width={400}
            height={400}
            alt={destinationName}
            src={imageUrl}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />

          {/* Price Tag - Home page er button er moto color */}
          <div className="absolute top-4 right-4 bg-cyan-500 text-black px-4 py-1.5 rounded-full shadow-lg">
            <p className="font-black text-sm tracking-tighter">
              ${price}
              <span className="text-[10px] uppercase ml-1">/Per</span>
            </p>
          </div>

          {/* Bottom Overlay for Image */}
          <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent opacity-60" />
        </div>

        {/* Card Body */}
        <div className="mt-6 px-3 pb-4 space-y-4">
          {/* Location Badge */}
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-cyan-500/10 rounded-lg">
              <FaMapMarkerAlt className="text-cyan-500 text-sm" />
            </div>
            <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-cyan-400/90">
              {country}
            </span>
          </div>

          {/* Title & Info */}
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors duration-300">
              {destinationName}
            </h2>
            <div className="flex items-center gap-3 text-slate-400 text-xs font-medium">
              <div className="flex items-center gap-1.5">
                <IoCalendarNumber className="text-cyan-500/70" />
                <span>{duration}</span>
              </div>
              <span className="w-1 h-1 rounded-full bg-slate-700" />
              <span>Full Experience</span>
            </div>
          </div>

          {/* Action Area */}
          <div className="pt-4 border-t border-white/5 flex items-center justify-between">
            <Link
              href={`/destinations/${_id}`}
              className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-white group-hover:text-cyan-400 transition-all"
            >
              Book Adventure
              <div className="p-2 bg-white/5 rounded-full group-hover:bg-cyan-500 group-hover:text-black transition-all">
                <FaArrowTrendUp className="text-xs" />
              </div>
            </Link>
          </div>
        </div>

        {/* Background Glow Effect */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/5 blur-[100px] pointer-events-none" />
      </Card>
    </section>
  );
};

export default DestinationsCard;
