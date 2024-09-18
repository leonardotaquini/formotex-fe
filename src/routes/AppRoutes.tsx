import { AuthRoutes } from "@/auth/routes/AuthRoutes"
import { DashboardRoutes } from "@/dashboard/routes/DashboardRoutes"
import { Route, Routes } from "react-router-dom"
import { ProtectedRoutes } from "./ProtectedRoutes"

export const AppRoutes = () => {
  return (
    <Routes>
       <Route path="/" element={ <AuthRoutes/>} />
       <Route path="/" element={ <ProtectedRoutes/>}>
        <Route path="/dashboard/*" element={ <DashboardRoutes/>} />
       </Route>
    </Routes>
  )
}
