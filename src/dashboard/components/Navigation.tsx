import { useAuthStore } from "@/auth/store/auth.store";
import { Avatar, AvatarFallback } from "@/components/shadcn/ui/avatar";
import { Link, useLocation } from "react-router-dom";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/shadcn/ui/dropdown-menu";
import { ChangeTheme } from "@/components/shadcn/ChangeTheme";

export const Navigation = () => {
    const user = useAuthStore((state) => state.user);
    const logout = useAuthStore((state) => state.logout);

    const username = user?.name.split("")[0];
    const location = useLocation();

    const submenuNav = [
        { title: "Panel", path: "/dashboard" },
        { title: "Inventario", path: "/dashboard/inventory" },
    ];

    return (
        <header className="text-base lg:text-sm">
            <nav className="flex justify-between">
                <ul className="flex items-center gap-x-3 max-w-screen-xl px-4 overflow-x-auto lg:px-8">
                    {submenuNav.map((item, idx) => (
                        <li
                            key={idx}
                            className={`py-1 ${
                                location.pathname === item.path
                                    ? "border-b-2 border-indigo-600"
                                    : ""
                            }`}
                        >
                            <Link to={item.path} className="block py-2 px-3 rounded-lg duration-150">
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="p-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Avatar>
                                <AvatarFallback className="uppercase">{username}</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel className="capitalize">{user?.name}</DropdownMenuLabel>
                            <DropdownMenuItem asChild>
                                <ChangeTheme />
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={logout} className="text-red-500">Cerrar sesión</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </nav>
        </header>
    );
};
