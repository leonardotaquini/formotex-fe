import { useEffect } from "react";
import { useAuthStore } from "../store/auth.store";
import { useNavigate } from "react-router-dom";

interface AuthLayoutProps {
    children: React.ReactNode
    }

export const AuthLayout = ({ children }: AuthLayoutProps) => {

  const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if(user){
      navigate("/dashboard");    
    }
  }, [user]);

  return (
    <>
        <header className="text-center h-40 grid place-items-center text-4xl formotex">Formotex</header>
        <main className="h-full grid place-items-center">
            {children}
        </main>
    </>
  )
}
