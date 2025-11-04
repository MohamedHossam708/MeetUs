import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      token: null,
      refresh: null,
      userInfo: null, // full user object (id, name, email, etc.)

      // Save all relevant credentials
      setCredentials: ({ token, refresh, userInfo }) =>
        set({ token, refresh, userInfo }),

      // Clear credentials (logout)
      clearCredentials: () =>
        set({ token: null, refresh: null, userInfo: null }),

      // Optional helper to check login state
      isAuthenticated: () => {
        const { token } = useAuthStore.getState();
        return !!token;
      },
    }),
    {
      name: "auth-storage",
      getStorage: () => localStorage,
      // Only persist non-sensitive info
      partialize: (state) => ({
        token: state.token,
        refresh: state.refresh,
        userInfo: state.userInfo,
      }),
    }
  )
);

export default useAuthStore;
