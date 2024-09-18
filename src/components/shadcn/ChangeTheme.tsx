import { Button } from "./ui/button"
import { useTheme } from "./theme-provider"
import {SunIcon, MoonIcon} from 'lucide-react'

export const ChangeTheme = () => {

    const { theme, setTheme } = useTheme();

    const changeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

  return (
    <>
        <Button onClick={ changeTheme } variant={'ghost'} className="w-full">
            {theme === "light" ? <MoonIcon/> :  <SunIcon/>} 
        </Button>
    </>
  )
}
