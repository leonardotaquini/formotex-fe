import { Route, Routes } from "react-router-dom"
import { InventoryPage } from "../pages/InventoryPage"
import { NotFound } from "../pages/NotFound"
import { DashboardHomeView } from "../views/DashboardHomeView"
import { DashboardForm } from "../components/DashboardForm"
import { EditForm } from "../components/EditForm"

export const DashboardRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<DashboardHomeView />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/add" element={<DashboardForm />} />
        <Route path="/edit" element={<EditForm />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
