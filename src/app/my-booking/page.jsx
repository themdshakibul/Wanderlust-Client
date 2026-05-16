import AlardDilog from "@/Components/Apps/MyBookList/AlardDilog";
import { auth } from "@/Components/lib/auth";
import { bookingData } from "@/Components/lib/data";
import { Card } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import {
  IoLocationSharp,
  IoCalendarOutline,
  IoTicketOutline,
} from "react-icons/io5";

export const metadata = {
  title: "Wanderlust | Booking Page",
  description:
    "Discover extraordinary travel experiences and hidden gems around the world.",
};

const MyBookingPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const Booking = await bookingData(user?.id, token);

  return (
    <section className="bg-black pb-20 pt-20">
      <div className="container mx-auto px-4 md:px-6 py-10">
        {/* Page Header */}
        <div className="mb-12 space-y-2">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
            My <span className="text-cyan-400 italic">Bookings</span>
          </h2>
          <p className="text-gray-500 font-medium tracking-[0.3em] text-xs uppercase">
            Management of your upcoming journeys
          </p>
        </div>

        {/* Booking List Container */}
        <div className="grid grid-cols-1 gap-6">
          {Booking.length > 0 ? (
            Booking.map((book) => (
              <Card
                key={book._id}
                className="group relative overflow-hidden bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-4 md:p-6 shadow-2xl hover:bg-white/8 transition-all duration-500"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                  {/* Trip Image - Cinematic Style */}
                  <div className="relative w-full lg:w-87 h-48 md:h-56 shrink-0 rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                    <Image
                      fill
                      alt={book.destinationName}
                      src={book.imageUrl}
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 bg-cyan-500 text-black text-[10px] font-black uppercase tracking-widest rounded-full">
                      Confirmed
                    </div>
                  </div>

                  {/* Booking Details Content */}
                  <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="space-y-4">
                      <div className="space-y-1">
                        <h1 className="text-3xl font-black text-white tracking-tight uppercase">
                          {book.destinationName}
                        </h1>
                        <div className="flex items-center gap-2 text-cyan-400 text-sm font-bold tracking-widest uppercase">
                          <IoLocationSharp />{" "}
                          {book.country || "Global Experience"}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-5 py-2">
                        <div className="flex items-center gap-2 text-gray-400 text-xs">
                          <IoCalendarOutline className="text-cyan-500 text-base" />
                          <span className="font-medium">
                            {new Date(book.departureDate).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              },
                            )}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 text-xs">
                          <IoTicketOutline className="text-cyan-500 text-base" />
                          <span className="font-mono opacity-60 italic">
                            ID: {book._id.slice(-8).toUpperCase()}
                          </span>
                        </div>
                      </div>

                      <div className="pt-2">
                        <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">
                          Total Price Paid
                        </p>
                        <h2 className="text-3xl font-black text-cyan-400">
                          ${book.price}
                        </h2>
                      </div>
                    </div>

                    {/* Component: Delete Action */}
                    <div className="pt-4 md:pt-0">
                      <AlardDilog bookingId={book._id} />
                    </div>
                  </div>
                </div>
              </Card>
            ))
          ) : (
            <div className="text-center py-20 border border-dashed border-white/10 rounded-[3rem]">
              <p className="text-gray-500 tracking-widest uppercase font-bold italic">
                No bookings found yet.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MyBookingPage;
