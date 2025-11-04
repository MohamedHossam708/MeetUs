import useAuthStore from "../store/useAuthStore";


const API_BASE_URL = "https://api-yeshtery.dev.meetusvr.com/v1";
export const getUserInfo = async () => {
  const { token } = useAuthStore.getState();

  if (!token) throw new Error("No auth token found");

  try {
    const response = await fetch(`${API_BASE_URL}/user/info`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      const message = data.message || data.detail || "Failed to fetch user info";
      throw new Error(message);
    }

    return data;
  } catch (error) {
    console.error("Error fetching user info:", error);
    throw new Error(error.message || "Network error occurred");
  }
};
