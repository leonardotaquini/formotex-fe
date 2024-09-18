import { create } from "zustand";
import { DashboardState, Equipment, EquipmentRequest } from "../interfaces/dashboard.interfaces";
import { persist } from "zustand/middleware";
import { DashboardRequest } from "../api/dashboard.request";

export const useDashboardStore = create<DashboardState>()(
  persist(
    (set, get) => ({
      equipments: [],
      isLoading: false,
      getEquipments: async (token:string) => {
        const response = await DashboardRequest.getEquipments(token);
        set({ equipments: response.data });
      },
      addEquipment: async(equipment: EquipmentRequest, token:string) =>{
        const response  = await DashboardRequest.addEquipment( token, equipment);
        set({ equipments: [...get().equipments, response.data] });
      },
      deleteEquipment: async (equipment: Equipment, token:string) => {
        const equipmentDeleted = await DashboardRequest.deleteEquipment(token, equipment.id);
        set({ equipments: get().equipments.filter((equip) => equip.id !== equipmentDeleted.data.id) });
      },
      updateEquipment: async (equipment: Equipment, token:string) => {
        const response = await DashboardRequest.updateEquipment(token, equipment, equipment.id);
        set({ equipments: get().equipments.map((equip) => (equip.id === response.data.id ? response.data : equip)) });
      },
    }),
    {
      name: "dashboard-storage",
    }
  )
);
