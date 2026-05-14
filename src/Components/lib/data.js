export const getDestinations = async () => {
  const res = await fetch(
    "https://wanderlust-server-omega.vercel.app/destination",
  );
  const data = await res.json();
  return data;
};

export const createDestinations = async () => {
  const res = await fetch(
    "https://wanderlust-server-omega.vercel.app/destination",
  );
  const data = await res.json();
  return data;
};

// post
export const psotDestinations = async (destination) => {
  const res = await fetch(
    "https://wanderlust-server-omega.vercel.app/destination",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(destination),
    },
  );
  const data = await res.json();
  return data;
};

// dynamic id
export const getDestinationsById = async (id) => {
  const res = await fetch(
    `https://wanderlust-server-omega.vercel.app/destination/${id}`,
  );
  const data = await res.json();
  return data;
};

export const DeleteDestinationsById = async (_id) => {
  const res = await fetch(
    `https://wanderlust-server-omega.vercel.app/destination/${_id}`,
    {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    },
  );
  const data = await res.json();
  return data;
};

// edit
export const editDestinationsById = async (_id, destination) => {
  const res = await fetch(
    `https://wanderlust-server-omega.vercel.app/destination/${_id}`,
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(destination),
    },
  );
  const data = await res.json();
  return data;
};

// booking data to mogodb post
export const getBookingData = async () => {
  const res = await fetch("https://wanderlust-server-omega.vercel.app/booking");
  const data = await res.json();
  return data;
};

export const createBookingData = async (bookingData) => {
  const res = await fetch(
    "https://wanderlust-server-omega.vercel.app/booking",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookingData),
    },
  );
  const data = await res.json();
  return data;
};

// my bookingData
export const bookingData = async (id) => {
  const res = await fetch(
    `https://wanderlust-server-omega.vercel.app/booking/${id}`,
  );
  const data = await res.json();
  return data;
};

export const DeleteBooking = async (bookingId) => {
  const res = await fetch(
    `https://wanderlust-server-omega.vercel.app/booking/${bookingId}`,
    {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    },
  );
  const data = await res.json();
  return data;
};
