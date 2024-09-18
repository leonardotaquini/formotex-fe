import { useAuthStore } from "@/auth/store/auth.store"
import { Navigate, Outlet } from "react-router-dom"

export const ProtectedRoutes = () => {

    const token = useAuthStore(state => state.token);

    return token ? <Outlet /> : <Navigate to="/" />
}
