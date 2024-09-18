import { Card, CardHeader, CardTitle } from "@/components/shadcn/ui/card"

export const Navbar = () => {
  return (
    <>
       <Card className="w-full border-b rounded-none border-t-0 border-x-0">
            <CardHeader>
                <CardTitle className="formotex">Formotex</CardTitle>
            </CardHeader>
        </Card> 
    </>
  )
}
