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




// Function to fetch user details based on email
export async function fetchUserDetailsByEmail(email) {
  const response = await fetch(`${baseURL}/users?email=${email}`);
  if (!response.ok) {
    throw new Error(`Error fetching user details: ${response.statusText}`);
  }
  return await response.json();
}

// Function to submit a lost item
export async function reportLostItem(itemData) {
  try {
    const response = await fetch(`${baseURL}/lostItems`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itemData),
    });

    if (!response.ok) {
      throw new Error(`Error submitting lost item: ${response.statusText}`);
    }
    return response.json(); // Return response data
  } catch (error) {
    console.error("Error reporting lost item:", error);
    throw error;
  }
}

// Function to submit a found item
export async function reportFoundItem(itemData) {
  try {
    const response = await fetch(`${baseURL}/foundItems`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itemData),
    });

    if (!response.ok) {
      throw new Error(`Error submitting found item: ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error reporting found item:", error);
    throw error;
  }
}

// Function to fetch all found items
export async function fetchAllFoundItems() {
  try {
    const response = await fetch(`${baseURL}/foundItems`);
    if (!response.ok) {
      throw new Error(`Error fetching found items: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching found items:", error);
    throw error;
  }
}




