import httpClientAdapter from "@/adapters/httpClient.adapter";
import { EquipmentRequest, EquipmentResponse } from "../interfaces/dashboard.interfaces";

export class DashboardRequest {

    private static baseUrl = import.meta.env.VITE_API_URL;
    
    private static headers(token: string) {
        return {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
    }

    static async getEquipments(token: string) {
        return await httpClientAdapter.get<EquipmentResponse[]>(`${this.baseUrl}/equipments`, this.headers(token));
    }

    static async addEquipment(token: string, equipment: EquipmentRequest) {
        return await httpClientAdapter.post<EquipmentResponse>(`${this.baseUrl}/equipments`, equipment, this.headers(token));
    }

    static async updateEquipment(token: string, equipment: EquipmentRequest, id: number) {
        return await httpClientAdapter.patch<EquipmentResponse>(`${this.baseUrl}/equipments/${id}`, equipment, this.headers(token));
    }

    static async deleteEquipment(token: string, id: number) {
        return await httpClientAdapter.delete<EquipmentResponse>(`${this.baseUrl}/equipments/${id}`, this.headers(token));
    }


}

