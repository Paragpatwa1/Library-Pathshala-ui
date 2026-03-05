import API from "./axios";

export async function createBooking(
  seatNumber: number,
  startDate: string,
  endDate: string
) {
  const res = await API.post("/booking", {
    seatNumber,
    startDate,
    endDate,
  });

  return res.data;
}