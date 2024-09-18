import { useAuthStore } from "@/auth/store/auth.store";
import { Navbar } from "../components/Navbar";
import { Navigation } from "../components/Navigation"
import { useDashboardStore } from "../store/dashboard.store";
import { useEffect } from "react";


interface DashboardLayoutProps {
  children: React.ReactNode;
}


export const DashboardLayout = ({ children }: DashboardLayoutProps) => {


  
  const getEquipments = useDashboardStore((state) => state.getEquipments);
  const token = useAuthStore((state) => state.token);

  useEffect(() => {
    if (token) getEquipments( token );
  }, [getEquipments]);

  return (
    <>
        <Navbar />
        <main className="h-full flex flex-col">
        <Navigation />

          {children}
        </main>
    </>
  )
}
