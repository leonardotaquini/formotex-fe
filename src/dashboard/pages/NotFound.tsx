import { Button } from "@/components/shadcn/ui/button"
import { Link } from "react-router-dom"

export const NotFound = () => {
  return (
    <main className="h-full grid place-items-center">
        <section>
            <h1 className="text-4xl font-semibold text-gray-800">404 - Pagina no encontrada</h1>
            <Button asChild variant={'secondary'}>
                <Link to="/dashboard" className="text-blue-500 hover:underline">Ir al inicio</Link>
            </Button>
        </section>
    </main>
  )
}
