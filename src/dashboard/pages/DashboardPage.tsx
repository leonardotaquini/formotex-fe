import { Card, CardContent } from "@/components/shadcn/ui/card"
import { DashboardLayout } from "../layout/DashboardLayout"
import { Link } from "react-router-dom"


interface DashboardPageProps {
  children: React.ReactNode
}

export const DashboardPage = ({ children }: DashboardPageProps) => {
  return (
    <DashboardLayout>
      <section className=" h-full grid grid-cols-12 shadow-2xl bg-slate-900">
        <aside className="shadow  bg-gray-950 p-4 col-span-12 sm:col-span-3 text-center sm:text-start text-sm">
          <nav className="">
            <ul className="space-y-3 flex flex-col">
              <Link to='/dashboard/inventory' className="p-2 rounded shadow hover:bg-slate-900">Ver todos los equipos</Link>
              <Link to='/dashboard/add' className="p-2 rounded shadow hover:bg-slate-900">Agregar un equipo</Link>
              <Link to='/' className="p-2 rounded shadow hover:bg-slate-900">Editar un equipo</Link>
              <Link to='/' className="p-2 rounded shadow hover:bg-slate-900">Eliminar un equipo</Link>
            </ul>
          </nav>
        </aside>
        <Card className="col-span-12 sm:col-span-9 border-none rounded-none bg-slate-950">
          <CardContent className="h-full">
            { children }
          </CardContent>
        </Card>         
      </section>
    </DashboardLayout>
  )
}
