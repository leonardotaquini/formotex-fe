import httpClientAdapter from "@/adapters/httpClient.adapter";
import { LoginRequest, LoginResponse } from "../interfaces/auth.interface";

export class AuthRequests {
  private static baseUrl = import.meta.env.VITE_API_URL;

  static async login(data: LoginRequest) {
    return httpClientAdapter.post<LoginResponse>(
      `${this.baseUrl}/auth/login`,
      data
    );
  }

  static async register() {
    return httpClientAdapter.post<LoginResponse>(
      `${this.baseUrl}/auth/register`
    );
  }

  static async checkAuth(refreshToken: string) {
    return httpClientAdapter.post<{ token:string }>(`${this.baseUrl}/auth/refresh-token`,  refreshToken);
  }
}
