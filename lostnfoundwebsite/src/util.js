import { baseURL } from "./url";


export async function fetchLostItems() {
  const response = await fetch(`${baseURL}/lostItems`);
  return response.json();
}
export async function fetchLostItem(id) {
  const response = await fetch(`${baseURL}/lostItems/${id}`);
  return response.json();
}
export async function updateLostItem(item) {
  const response = await fetch(`${baseURL}/lostItems/${item.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });
  return response.json();
}
export async function deleteLostItem(id) {
  const response = await fetch(`${baseURL}/lostItems/${id}`, {
    method: "DELETE",
  });
  return response.ok;
}
export async function fetchFoundItems() {
  const response = await fetch(`${baseURL}/foundItems`);
  return response.json();
}
export async function fetchFoundItem(id) {
  const response = await fetch(`${baseURL}/foundItems/${id}`);
  return response.json();
}
export async function updateFoundItem(item) {
  const response = await fetch(`${baseURL}/foundItems/${item.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });
  return response.json();
}

export async function deleteFoundItem(id) {
  const response = await fetch(`${baseURL}/foundItems/${id}`, {
    method: "DELETE",
  });
  return response.ok;
}


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



