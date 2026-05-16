export const getDestinations = async (token) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`, {
    headers: { authorization: `Bearer ${token}` },
  });
  const data = await res.json();
  return data;
};

export const createDestinations = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`);
  const data = await res.json();
  return data;
};

export const getFetured = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`);
  const data = await res.json();
  return data;
};

// post
export const psotDestinations = async (destination, tokenData) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${tokenData?.token}`,
    },
    body: JSON.stringify(destination),
  });
  const data = await res.json();
  return data;
};

// dynamic id
export const getDestinationsById = async (id, token) => {
  const res = await fetch(
    // `https://wanderlust-server-omega.vercel.app/destination/${id}`,
    `${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${id}`,
    {
      headers: { authorization: `Bearer ${token}` },
    },
  );
  const data = await res.json();
  return data;
};

export const DeleteDestinationsById = async (_id, tokenData) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${_id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${tokenData?.token}`,
      },
    },
  );
  const data = await res.json();
  return data;
};

// edit
export const editDestinationsById = async (_id, destination, tokenData) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${_id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${tokenData?.token}`,
      },
      body: JSON.stringify(destination),
    },
  );
  const data = await res.json();
  return data;
};

// booking data to mogodb post
export const getBookingData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`);
  const data = await res.json();
  return data;
};

export const createBookingData = async (bookingsData, tokenData) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${tokenData?.token}`,
    },
    body: JSON.stringify(bookingsData),
  });
  const data = await res.json();
  return data;
};

// my bookingData
export const bookingData = async (id, token) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${id}`,
    {
      authorization: `Bearer ${token}`,
    },
  );
  const data = await res.json();
  return data;
};

export const DeleteBooking = async (bookingId, tokenData) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${bookingId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${tokenData?.token}`,
      },
    },
  );
  const data = await res.json();
  return data;
};
