import AlardDilog from "@/Components/Apps/MyBookList/AlardDilog";
import { auth } from "@/Components/lib/auth";
import { mybookingData } from "@/Components/lib/data";
import { Button, Card } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";

const MyBookingPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;
 const Booking = await mybookingData(user?.id);
 

  return (
    <section>
      <div className="container mx-auto px-2 py-5">
        <h2 className="text-3xl font-bold py-5">MyBooking</h2>

        <div className="space-y-5">
          {Booking.map((book) => (
            <Card key={book._id} className="shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <Image
                    width={300}
                    height={300}
                    alt="Image"
                    src={book.imageUrl}
                    className="rounded-lg"
                  />
                  <div>
                    <h1 className="text-3xl font-bold">
                      {book.destinationName}
                    </h1>
                    <p>
                      {new Date(book.departureDate).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        },
                      )}
                    </p>
                    <h2 className="text-xl font-semibold">
                      Booking Id: {book._id}
                    </h2>
                    <h2 className="text-3xl font-semibold text-cyan-500">
                      ${book.price}
                    </h2>
                  </div>
                </div>
                {/* components */}
                <AlardDilog bookingId={book._id} />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyBookingPage;
