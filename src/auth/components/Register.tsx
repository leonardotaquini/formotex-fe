import { AuthLayout } from "../layout/AuthLayout"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/shadcn/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shadcn/ui/form";
import { Input } from "@/components/shadcn/ui/input";


const formSchema = z.object({
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  confirmPassword: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
    lastname: z.string().min(2, {
        message: "Lastname must be at least 2 characters"
    }),
}).refine(data => data.password === data.confirmPassword, {
  path: ['password'],
  message: 'Las contraseñas no coinciden',
});
export const Register = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          lastname: "",
          email: "",
          password: "",
          confirmPassword: "",
        },
      });
    
      async function onSubmit(values: z.infer<typeof formSchema>) {
        const {confirmPassword, ...user} = values;
        console.log(user);
      };

  return (
    <AuthLayout>
        <main className="h-full sm:w-1/3">
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="p-4 grid grid-cols-12 m-auto shadow rounded space-x-1">
        <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="col-span-12 sm:col-span-6">
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

            <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                <FormItem className="col-span-12 sm:col-span-6">
                    <FormLabel>Apellido</FormLabel>
                    <FormControl>
                    <Input placeholder="Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="col-span-12">
                <FormLabel>Correo Electronico</FormLabel>
                <FormControl>
                  <Input placeholder="usuario" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="col-span-12">
                <FormLabel>Contraseña</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="********" {...field} />
                </FormControl>
                 <FormDescription>* La contraseña debe tener 8 caracteres</FormDescription>
                 <FormDescription>* La contraseña debe tener almenos una mayuscula</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className="col-span-12">
                <FormLabel>Confirmar contraseña</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="col-span-12 mt-2">Registrarse</Button>
        </form>
      </Form>
        </main>
    </AuthLayout>
  )
}
