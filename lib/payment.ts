import API from "./axios";

export async function createOrder(amount: number) {
  const res = await API.post("/payment/create-order", {
    amount
  });

  return res.data;
}

export async function verifyPayment(data: any) {
  const res = await API.post("/payment/verify", data);
  return res.data;
}