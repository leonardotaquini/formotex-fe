import { Card, CardContent } from "@/components/shadcn/ui/card"
import { DashboardLayout } from "../layout/DashboardLayout"
import { Link } from "react-router-dom"


interface DashboardPageProps {
  children: React.ReactNode
}

export const DashboardPage = ({ children }: DashboardPageProps) => {
  return (
    <DashboardLayout>
      <section className=" h-full grid grid-cols-12 shadow-2xl ">
        <aside className="shadow dark:bg-inherit bg-slate-50 p-4 col-span-12 sm:col-span-3 text-center sm:text-start text-sm">
          <nav className="">
            <ul className="space-y-3 flex flex-col">
              <Link to='/dashboard/inventory' className="p-2 rounded dark:shadow hover:bg-secondary">Ver todos los equipos</Link>
              <Link to='/dashboard/add' className="p-2 rounded dark:shadow hover:bg-secondary">Agregar un equipo</Link>
              <Link to='/dashboard/inventory' className="p-2 rounded dark:shadow hover:bg-secondary">Editar un equipo</Link>
              <Link to='/dashboard/inventory' className="p-2 rounded dark:shadow hover:bg-secondary">Eliminar un equipo</Link>
            </ul>
          </nav>
        </aside>
        <Card className="col-span-12 sm:col-span-9 border-none rounded-none ">
          <CardContent className="h-full">
            { children }
          </CardContent>
        </Card>         
      </section>
    </DashboardLayout>
  )
}
