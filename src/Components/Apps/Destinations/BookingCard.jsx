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
import { FaBolt } from "react-icons/fa";

const BookingCard = ({ Destinations }) => {
  const { data } = authClient.useSession();
  const user = data?.user;

  const [date, setDate] = useState(null);

  const { price, _id, destinationName, imageUrl, country, departureDate } =
    Destinations;

  const hadelBooking = async () => {
    if (!user) {
      return toast.error("Please login to book this trip!", { theme: "dark" });
    }
    if (!date) {
      return toast.warning("Please select a departure date.");
    }

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

    const { data: tokenData } = await authClient.token();
    const res = await createBookingData(bookingData, tokenData);

    if (res) {
      toast.success(`${destinationName} Booking Successful`, {
        icon: "🚀",
        theme: "dark",
      });
    }
  };

  return (
    <div className="w-full">
      <Card className="relative overflow-hidden bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 shadow-2xl shadow-cyan-500/10">
        {/* Subtle Background Glow */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/20 blur-[60px] pointer-events-none" />

        <div className="space-y-6">
          {/* Pricing Header */}
          <div className="space-y-1">
            <p className="text-gray-400 text-[10px] uppercase tracking-[0.3em] font-bold">
              Starting From
            </p>
            <div className="flex items-baseline gap-2">
              <h2 className="text-5xl font-black text-cyan-400 tracking-tighter">
                ${price}
              </h2>
              <span className="text-gray-400 text-sm font-medium">
                / person
              </span>
            </div>
          </div>

          <div className="h-px w-full bg-white/5" />

          {/* Date Picker Section */}
          <div className="space-y-4">
            <DateField onChange={setDate} name="date" className="w-full">
              <Label className="text-gray-400 text-[10px] uppercase tracking-widest ml-2 mb-2 block font-bold">
                Select Departure Date
              </Label>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-3 focus-within:border-cyan-500 transition-all">
                <DateField.Group className="flex gap-1 text-white">
                  <DateField.Input>
                    {(segment) => (
                      <DateField.Segment
                        segment={segment}
                        className="focus:bg-cyan-500 focus:text-black text-black rounded px-0.5 outline-none"
                      />
                    )}
                  </DateField.Input>
                </DateField.Group>
              </div>
              <Description className="text-[10px] text-gray-500 mt-2 ml-2 italic" />
              <FieldError className="text-red-400 text-xs mt-1 ml-2" />
            </DateField>
          </div>

          {/* Booking Button */}
          <div className="pt-2">
            <Button
              onClick={hadelBooking}
              className="w-full py-8 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-black uppercase tracking-widest text-sm transition-all active:scale-95 shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 group"
            >
              <FaBolt className="group-hover:animate-pulse" />
              Confirm Booking
            </Button>

            <p className="text-center text-gray-500 text-[10px] mt-4 uppercase tracking-tighter">
              * No hidden charges. Instant confirmation.
            </p>
          </div>
        </div>
      </Card>

      {/* Trust Badge Below Card */}
      <div className="mt-6 flex items-center justify-center gap-6 opacity-40 grayscale group-hover:grayscale-0 transition-all">
        <span className="text-[10px] text-white font-bold tracking-widest uppercase">
          Safe Payment
        </span>
        <span className="text-[10px] text-white font-bold tracking-widest uppercase">
          24/7 Support
        </span>
      </div>
    </div>
  );
};

export default BookingCard;
