import { VariantToast } from "@/components/hooks/useToast";

export interface Equipment {
    id: number;
    name: string;
    brand: string;
    model: string;
    acquisition: Date;
    location: string;
    status: EquipmentStatus;
    organization: string;
    createdAt: Date;
    updatedAt: Date;
  }


  export interface DashboardState {
    equipments: Equipment[];
    isLoading: boolean;
    equipmentSelected: Equipment;
    getEquipments: (token: string) => void;
    addEquipment: (equipment: EquipmentRequest, token: string) => Promise<DashboardResponse>;
    updateEquipment: (equipment: EquipmentRequest, token: string) => Promise<DashboardResponse>;
    deleteEquipment: (id: number, token: string) => Promise<DashboardResponse>;
    setSelectEquipment: (id: number) => void;
  } 

  export interface EquipmentResponse {
    id:          number;
    name:        string;
    brand:       string;
    model:       string;
    status:      EquipmentStatus;
    location:    string;
    organization: string;
    acquisition: Date;
    createdAt:   Date;
    updatedAt:   Date;
}

export interface DashboardResponse {
  equipment: EquipmentResponse;
  message:   string;
  status:    VariantToast;
  statusCode: number;
}

export interface EquipmentRequest {
    name:        string;
    brand:       string;
    model:       string;
    location:    string;
    acquisition: Date;
    status:      EquipmentStatus;
    organization: string;
}

export enum EquipmentStatus {
  Available = "Available",
  Assigned = "Assigned",
  InRepair = "InRepair",
  UnderReview = "UnderReview",
  OnLoan = "OnLoan",
  Obsolete = "Obsolete",
  Decommissioning = "Decommissioning",
  Decommissioned = "Decommissioned",
  PendingAssignment = "PendingAssignment",
  Reserved = "Reserved"
}
