import DestinationsCard from "@/Components/Apps/Destinations/DestinationsCard";
import { getDestinations } from "@/Components/lib/data";

export const metadata = {
  title: "Wanderlust | Destinations Page",
  description:
    "Discover extraordinary travel experiences and hidden gems around the world.",
};

const DestinationsPage = async () => {
  const destinations = await getDestinations();

  return (
    <section className="min-h-screen bg-black pt-15 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header Section - Home Page style */}
        <div className="mb-12 space-y-2 mt-10">
          <span className="text-cyan-500 font-bold uppercase tracking-[0.3em] text-xs">
            Our Collection
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            All <span className="text-cyan-400 italic">Destinations</span>
          </h2>
          <div className="h-1 w-20 bg-cyan-500 rounded-full mt-4" />
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 md:gap-10">
          {destinations?.length > 0 ? (
            destinations.map((destination) => (
              <DestinationsCard
                key={destination._id}
                destination={destination}
              />
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-slate-500 text-xl italic tracking-widest">
                No adventures found at the moment...
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DestinationsPage;
