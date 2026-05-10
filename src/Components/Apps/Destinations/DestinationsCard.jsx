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
    <section>
      <Card className="space-y-3 shadow-lg">
        <Image
          width={300}
          height={300}
          alt={destinationName}
          src={imageUrl}
          className="w-full h-80 rounded-2xl"
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
          <Link
            href={`/destinations/${_id}`}
            className="flex items-center gap-2 underline text-xl  text-cyan-500  font-semibold"
          >
            Book Now <FaArrowTrendUp />
          </Link>
        </div>
      </Card>
    </section>
  );
};

export default DestinationsCard;
