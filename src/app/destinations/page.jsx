import DestinationsCard from "@/Components/Apps/Destinations/DestinationsCard";
import { getDestinations } from "@/Components/lib/data";

const DestinationsPage = async () => {
  const destinations = await getDestinations();

  return (
    <section>
      <div className="container mx-auto px-2 mb-20">
        <h2 className="text-2xl font-bold py-5">All Destinations</h2>
        <div className="grid grid-cols-3 gap-5">
          {destinations.map((destination) => (
            <DestinationsCard key={destination._id} destination={destination} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsPage;
