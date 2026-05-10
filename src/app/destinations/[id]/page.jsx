import DeleteDestinationsCard from "@/Components/Apps/Destinations/DeleteDestinationsCard";
import EditDestinationsCard from "@/Components/Apps/Destinations/EditDestinationsCard";
import { getDestinationsById } from "@/Components/lib/data";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { BiEdit } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoCalendarNumber } from "react-icons/io5";

const DestinationsDetailsPage = async ({ params }) => {
  const { id } = await params;
  const Destinations = await getDestinationsById(id);
  console.log(Destinations);
  const { destinationName, country, price, duration, imageUrl, description } =
    Destinations;

  return (
    <section>
      <div className="container mx-auto px-2 mb-30">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold py-5">Destinations Detals page</h2>
          <div className="flex items-center gap-5">
            <EditDestinationsCard Destinations={Destinations} />
            <DeleteDestinationsCard Destinations={Destinations} />
          </div>
        </div>
        <div className="space-y-5">
          <Image
            width={300}
            height={300}
            alt={destinationName}
            src={imageUrl}
            className="w-full h-170"
          />
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xl font-bold">
              <FaMapMarkerAlt size={25} /> <span>{country}</span>
            </div>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">{destinationName}</h2>
              <p className="text-xl font-bold">${price}/Person</p>
            </div>
            <p className="flex items-center gap-1 font-semibold">
              <IoCalendarNumber />
              {duration}
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Overview</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationsDetailsPage;
