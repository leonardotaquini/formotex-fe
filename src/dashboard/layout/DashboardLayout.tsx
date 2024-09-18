import { Navbar } from "../components/Navbar";
import { Navigation } from "../components/Navigation"


interface DashboardLayoutProps {
  children: React.ReactNode;
}


export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
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
