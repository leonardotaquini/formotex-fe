import { create } from "zustand";
import { DashboardState, Equipment, EquipmentRequest } from "../interfaces/dashboard.interfaces";
import { persist } from "zustand/middleware";
import { DashboardRequest } from "../api/dashboard.request";

export const useDashboardStore = create<DashboardState>()(
  persist(
    (set, get) => ({
      equipments: [],
      isLoading: false,
      equipmentSelected: {} as Equipment,
      getEquipments: async (token:string) => {
        const response = await DashboardRequest.getEquipments(token);
        set({ equipments: response.data });
      },
      addEquipment: async(equipment: EquipmentRequest, token:string) =>{
        const response  = await DashboardRequest.addEquipment( token, equipment);
        set({ equipments: [...get().equipments, response.data] });
        if (response.status === 201) {
          return {
            equipment: response.data,
            message: "Equipo agregado exitosamente",
            status: "success",
            statusCode: response.status,
          };
        }
        return {
          equipment: response.data,
          message: "Error al agregar equipo",
          status: "error",
          statusCode: response.status,
        };
      },
      deleteEquipment: async (id: number, token:string) => {
        const equipmentDeleted = await DashboardRequest.deleteEquipment(token, id);
        set({ equipments: get().equipments.filter((equip) => equip.id !== equipmentDeleted.data.id) });
        if (equipmentDeleted.status === 200) {
          return {
            equipment: equipmentDeleted.data,
            message: "Equipo eliminado exitosamente",
            status: "success",
            statusCode: equipmentDeleted.status,
          };
        }
        return {
          equipment: equipmentDeleted.data,
          message: "Error al eliminar equipo",
          status: "error",
          statusCode: equipmentDeleted.status,
        };
      },
      updateEquipment: async (equipment: EquipmentRequest, token:string) => {
        const response = await DashboardRequest.updateEquipment(token, equipment, get().equipmentSelected.id);
        set({ equipments: get().equipments.map((equip) => (equip.id === response.data.id ? response.data : equip)) });
        if (response.status === 200) {
          return {
            equipment: response.data,
            message: "Equipo actualizado exitosamente",
            status: "success",
            statusCode: response.status,
          };
        }
        return {
          equipment: response.data,
          message: "Error al actualizar equipo",
          status: "error",
          statusCode: response.status,
        };
        
      },
      setSelectEquipment: (id: number) => {
        const equipment = get().equipments.find((equip) => equip.id === id);
        set({ equipmentSelected: equipment! });
      },
    }),
    {
      name: "dashboard-storage",
    }
  )
);
