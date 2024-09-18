import { AuthLayout } from "../layout/AuthLayout"
import { Button } from "@/components/shadcn/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/shadcn/ui/form";
import { Input } from "@/components/shadcn/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useAuthStore } from "../store/auth.store";
import { useToast } from "@/components/hooks/useToast";
import { useNavigate } from "react-router-dom";


const formSchema = z.object({
    email: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),
});
export const Login = () => {

    const toast = useToast();
    const login = useAuthStore((state) => state.login);
    const navigate = useNavigate();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {

        const data = {
            email: values.email,
            password: values.password,
        };
       
        const res = await login(data);
        toast(res.msg, res.status);
        if(res.statusCode === 200){
            navigate("/dashboard");
        }
    }


  return (
    <AuthLayout>
        <main className="w-full h-full grid place-items-center">
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full sm:w-96 shadow p-4 rounded">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Correo Electronico</FormLabel>
                            <FormControl>
                                <Input placeholder="usuario@gmail.com" type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Contraseña</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="********" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full uppercase">Ingresar</Button>
            </form>
        </Form>
        </main>
    </AuthLayout>
  )
}
