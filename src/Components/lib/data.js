export const getDestinations = async () => {
  const res = await fetch("http://localhost:5000/destination");
  const data = await res.json();
  return data;
};

export const getDestinationsById = async (id) => {
  const res = await fetch(`http://localhost:5000/destination/${id}`);
  const data = await res.json();
  return data;
};

export const createDestinationsById = async (_id) => {
  const res = await fetch(`http://localhost:5000/destination/${_id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  const data = await res.json();
  return data;
};

// booking data to mogodb post
export const getBookingData = async () => {
  const res = await fetch("http://localhost:5000/booking");
  const data = await res.json();
  return data;
};

export const createBookingData = async (bookingData) => {
  const res = await fetch("http://localhost:5000/booking", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bookingData),
  });
  const data = await res.json();
  return data;
};
