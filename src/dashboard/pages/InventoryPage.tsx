import { useEffect } from "react";
import { DashboardLayout } from "../layout/DashboardLayout"
import { useDashboardStore } from "../store/dashboard.store"
import { useAuthStore } from "@/auth/store/auth.store";
import { DataTable } from "../components/table/DataTable";
import { columns } from "../components/table/Columns";

export const InventoryPage = () => {

  const getEquipments = useDashboardStore((state) => state.getEquipments);
  const equipments = useDashboardStore((state) => state.equipments);
  const token = useAuthStore((state) => state.token);

  useEffect(() => {
    if (token) getEquipments( token );
  }, [getEquipments]);

  return (
    <DashboardLayout>
       <DataTable columns={columns} data={equipments} />
    </DashboardLayout>
  )
}
