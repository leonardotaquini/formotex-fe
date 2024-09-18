import { ColumnDef } from "@tanstack/react-table";
import { Equipment } from "@/dashboard/interfaces/dashboard.interfaces";
import { formatDate } from "@/dashboard/utils/formatDate";
import { Button } from "@/components/shadcn/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/shadcn/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { useDashboardStore } from "@/dashboard/store/dashboard.store";
import { useAuthStore } from "@/auth/store/auth.store";
import { useToast } from "@/components/hooks/useToast";
import { useNavigate } from "react-router-dom";



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
  {
    accessorKey: 'id',
    header: ()=> {return <Button variant={'ghost'} className='hover:bg-transparent hover:cursor-default'>Acciones</Button>},
    cell: ({ row }) => {

      const deleteEquipment = useDashboardStore((state) => state.deleteEquipment);
      const setSelectedEquipment = useDashboardStore((state) => state.setSelectEquipment);
      const token = useAuthStore((state) => state.token);
      const navigate = useNavigate();
      const toast = useToast();

      const handleDelete = async (id: number) => {
        const res = await deleteEquipment(id, token!);
        toast(res.message, res.status);
      };

      const handleUpdate = (id: number) => {
        setSelectedEquipment(id);
        navigate(`/dashboard/edit`);
      }


      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center">
            <DropdownMenuLabel>Acciones</DropdownMenuLabel>
            <DropdownMenuItem
              className="text-foreground"
              onClick={() => handleUpdate( row.original.id )}
            >
              Editar
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-red-500"
              onClick={() => handleDelete( row.original.id )}
            >
              Eliminar
            </DropdownMenuItem>
            
            <DropdownMenuSeparator />

            <DropdownMenuItem>Ver usuario</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
