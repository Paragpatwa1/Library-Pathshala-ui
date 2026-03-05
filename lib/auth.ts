import API from "./axios";

export async function login(email: string, password: string) {
  const res = await API.post("/auth/login", {
    email,
    password,
  });

  localStorage.setItem("token", res.data.access_token);

  return res.data;
}

export async function register(
  name: string,
  email: string,
  password: string,
  confirmPassword: string
) {
  const res = await API.post("/auth/register", {
    name,
    email,
    password,
    confirmPassword,
  });

  return res.data;
}

export function googleLogin() {
  window.location.href =
    "https://pathshala-backend-production.up.railway.app/auth/google";
}