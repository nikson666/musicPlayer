import { meEndpoint } from "./spotify";

export const getMe = async () => {
  const storeToken = window.localStorage.getItem("token");
  const res = await fetch(meEndpoint, {
    headers: {
      Authorization: `Bearer ${storeToken}`,
    },
    method: "GET",
  });
  return await res.json();
};
