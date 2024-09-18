import { ColumnDef } from "@tanstack/react-table";
import { Equipment } from "@/dashboard/interfaces/dashboard.interfaces";
import { formatDate } from "@/dashboard/utils/formatDate";



export const columns: ColumnDef<Equipment>[] = [
  {
    accessorKey: "name",
    header: "Nombre",
  },
  {
    accessorKey: "brand",
    header: "Marca",
  },
  {
    accessorKey: "model",
    header: "Modelo",
  },
  {
    accessorKey: "acquisition",
    header: "Adquisición",
    cell: ({row}) => {
      return formatDate(String(row.original.acquisition));
    },
  },
  {
    accessorKey: "location",
    header: "Ubicación",
  },
  {
    accessorKey: "status",
    header: "Estado",
  },
  {
    accessorKey: "organization",
    header: "Organización",
  },
  {
    accessorKey: "createdAt",
    header: "Creado",
    cell: ({row}) => {
      return formatDate(String(row.original.createdAt));
    },
  },
  {
    accessorKey: "updatedAt",
    header: "Actualizado",
    cell: ({row}) => {
      return formatDate(String(row.original.updatedAt));
    },
  },
];
