import API from "./axios";

export async function getSeats(category: string) {
  const res = await API.get(`/seats?category=${category}`);
  return res.data;
}