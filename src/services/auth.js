import useAuthStore from "../store/useAuthStore";

const API_BASE_URL = "https://api-yeshtery.dev.meetusvr.com/v1/yeshtery";

export const loginUser = async (credentials) => {
  const { setCredentials } = useAuthStore.getState();

  try {
    const response = await fetch(`${API_BASE_URL}/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...credentials,
        isEmployee: true,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const errMsg =
        errorData.message ||
        errorData.detail ||
        errorData.errors?.[0]?.message ||
        "Login failed";
      throw new Error(errMsg);
    }

    const data = await response.json();

    // Save credentials safely in Zustand
    setCredentials({
      token: data.token,
      refresh: data.refresh,
      userInfo: data.userInfo, // store full user info
    });

    console.log("✅ Login successful:", data);

    return data;
  } catch (error) {
    throw new Error(error?.message || "Network error occurred");
  }
};
