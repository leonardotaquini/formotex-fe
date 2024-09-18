import { create } from "zustand";
import { AuthState, LoginRequest } from "../interfaces/auth.interface";
import { AuthRequests } from "../api/auth.requests";
import { decodeToken } from "../utils/jwt.decode";
import { persist } from "zustand/middleware";

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isLoading: false,
      
      login: async (user: LoginRequest) => {
        set({ isLoading: true });
        const response = await AuthRequests.login(user);
        if (response.status === 200) {
          const userDecoded = decodeToken(response.data.token);
          set({ user: userDecoded,  token: response.data.token, isLoading: false });
          return {
            msg: `Bienvenido ${userDecoded.name}`,
            status: "success",
            statusCode: response.status,
          };
        }
        set({ isLoading: false });
        return {
          msg: "Error al iniciar sesion",
          status: "error",
          statusCode: response.status,
        };
      },

      logout: () => {
        set({ user: null, token: null });
      },

      checkAuth: async (token: string) => {
        set({isLoading: true});
        const response = await AuthRequests.checkAuth(token);
        if (response.status === 200) {
          const userDecoded = decodeToken(response.data.token);
          set({ user: userDecoded, token: response.data.token, isLoading: false });
          return {
            msg: `Bienvenido de nuevo ${userDecoded.name}`,
            status: "success",
            statusCode: response.status,
          };
        }
        set({ isLoading: false, user: null, token: null });
        return {
          msg: "Error al iniciar sesion",
          status: "error",
          statusCode: response.status,
        };
      },

      setIsLoading: (isLoading) => {
        set({ isLoading });
      },
    }),
    { name: "auth-storage" }
  )
);
