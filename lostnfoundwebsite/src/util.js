import { baseURL } from "./url";


export const fetchLostItems = async () => {
  const res = await fetch(`${baseURL}/lostItems`);
  const data = await res.json();
  return data;
};


export const fetchLostItem = async (id) => {
  const res = await fetch(`${baseURL}/lostItems/${id}`);
  const data = await res.json();
  return data;
};


