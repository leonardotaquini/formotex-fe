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
    getEquipments: (token: string) => void;
    addEquipment: (equipment: Equipment, token: string) => void;
    updateEquipment: (equipment: Equipment, token: string) => void;
    deleteEquipment: (equipment: Equipment, token: string) => void;
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

export interface EquipmentRequest {
    name:        string;
    brand:       string;
    model:       string;
    location:    string;
    acquisition: Date;
    status?:      EquipmentStatus;
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
