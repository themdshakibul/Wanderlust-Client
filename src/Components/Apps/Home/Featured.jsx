import { getFetured } from "@/Components/lib/data";
import { Button } from "@heroui/react";
import { IoArrowForward } from "react-icons/io5";
import DestinationsCard from "../Destinations/DestinationsCard";
import Link from "next/link";

const Featured = async () => {
  const destinationsFeturd = await getFetured();

  return (
    <section className="bg-black py-20 px-6">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">
              Featured{" "}
              <span className="text-cyan-500 italic">Destinations</span>
            </h2>
            <p className="text-gray-500 font-bold tracking-[0.3em] uppercase text-xs">
              Handpicked travel experiences for the adventure seekers
            </p>
          </div>
          <Link href={"/destinations"}>
            <Button
              variant="bordered"
              className="border-cyan-500/50 text-cyan-400 font-bold uppercase tracking-widest rounded-full px-8 hover:bg-cyan-500 hover:text-black transition-all h-14"
              endContent={<IoArrowForward />}
            >
              All Destinations
            </Button>
          </Link>
        </div>

        {/* Pass data to Client Slider */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 md:gap-10">
          {destinationsFeturd.map((destination) => (
            <DestinationsCard key={destination._id} destination={destination} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
