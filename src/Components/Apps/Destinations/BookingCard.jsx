"use client";

import { authClient } from "@/Components/lib/auth-client";
import { createBookingData } from "@/Components/lib/data";
import {
  DateField,
  Label,
  Description,
  FieldError,
  Button,
  Card,
} from "@heroui/react";
import { useState } from "react";
import { toast } from "react-toastify";

const BookingCard = ({ Destinations }) => {
  const { data } = authClient.useSession();
  const user = data?.user;

  const [date, setDate] = useState(null);

  const { price, _id, destinationName, imageUrl, country, departureDate } =
    Destinations;

  const hadelBooking = async () => {
    const bookingData = {
      userId: user?.id,
      userName: user?.name,
      destinationId: _id,
      destinationName,
      price,
      imageUrl,
      country,
      departureDate: new Date(date),
    };

    const data = await createBookingData(bookingData);
    if (data) {
      toast.success(`${destinationName} Booking Successfull`);
    }
  };

  return (
    <div>
      <Card className="p-5 w-100 rounded-none">
        <div className="space-y-5">
          <h2 className="text-xl font-semibold">Stating Form</h2>
          <h2 className="text-3xl font-bold text-cyan-500">${price}</h2>
          <p className="text-xl font-semibold">Per person</p>

          <DateField onChange={setDate} name="date">
            <Label>Departure Date</Label>
            <DateField.Group>
              <DateField.Input>
                {(segment) => <DateField.Segment segment={segment} />}
              </DateField.Input>
            </DateField.Group>
            <Description />
            <FieldError />
          </DateField>
          <Button
            onClick={hadelBooking}
            className="w-full bg-cyan-500 rounded-sm"
          >
            Booking Now
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default BookingCard;
