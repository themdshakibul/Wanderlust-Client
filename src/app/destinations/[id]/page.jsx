import BookingCard from "@/Components/Apps/Destinations/BookingCard";
import DeleteDestinationsCard from "@/Components/Apps/Destinations/DeleteDestinationsCard";
import EditDestinationsCard from "@/Components/Apps/Destinations/EditDestinationsCard";
import { getDestinationsById } from "@/Components/lib/data";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoCalendarNumber } from "react-icons/io5";

export const metadata = {
  title: "Wanderlust | Destination page",
  description:
    "Discover extraordinary travel experiences and hidden gems around the world.",
};

const DestinationsDetailsPage = async ({ params }) => {
  const { id } = await params;
  const Destinations = await getDestinationsById(id);

  const { destinationName, country, duration, imageUrl, description } =
    Destinations;

  return (
    <section className="min-h-screen bg-black pb-20 pt-15">
      {/* Top Hero Section with Buttons */}
      <div className="container mx-auto px-4 md:px-6 pt-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="space-y-2">
            <span className="text-cyan-500 font-bold uppercase tracking-[0.3em] text-xs">
              Exploration Details
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none">
              {destinationName}
            </h1>
          </div>

          {/* Admin Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <EditDestinationsCard Destinations={Destinations} />
            <DeleteDestinationsCard Destinations={Destinations} />
          </div>
        </div>

        {/* Featured Image - Cinematic Look */}
        <div className="relative w-full h-[50vh] md:h-[70vh] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl mb-12">
          <Image
            fill
            alt={destinationName}
            src={imageUrl}
            className="object-cover transition-transform duration-1000 hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-10">
            <div className="flex flex-wrap items-center gap-8 py-6 border-y border-white/5">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-cyan-500/10 rounded-2xl">
                  <FaMapMarkerAlt className="text-cyan-500 text-xl" />
                </div>
                <div>
                  <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">
                    Country
                  </p>
                  <p className="text-white font-bold">{country}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-3 bg-cyan-500/10 rounded-2xl">
                  <IoCalendarNumber className="text-cyan-500 text-xl" />
                </div>
                <div>
                  <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">
                    Duration
                  </p>
                  <p className="text-white font-bold">{duration}</p>
                </div>
              </div>
            </div>

            {/* Overview */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-3">
                Overview
                <span className="h-px w-12 bg-cyan-500 rounded-full" />
              </h2>
              <p className="text-gray-400 leading-relaxed text-lg font-medium">
                {description}
              </p>
            </div>
          </div>

          {/* Sidebar - Booking Card */}
          <div className="relative">
            <div className="sticky top-28">
              <BookingCard Destinations={Destinations} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationsDetailsPage;
