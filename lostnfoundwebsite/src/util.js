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

// Function to POST report found item to the backend (db.json)
export async function reportFoundItem(itemData) {
  try {
    const response = await fetch("http://localhost:5001/foundItems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itemData),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    return response; // Returning response for handling success in Vue component
  } catch (error) {
    console.error("Error submitting found item:", error);
    throw error; // Propagate the error to be handled by the Vue component
  }
}



