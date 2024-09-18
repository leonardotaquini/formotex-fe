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
import { useToast } from "@/components/hooks/useToast";
import { useNavigate } from "react-router-dom";
import { DashboardPage } from "../pages/DashboardPage";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/ui/select";
import { EquipmentStatus } from "../interfaces/dashboard.interfaces";
import { useDashboardStore } from "../store/dashboard.store";
import { useAuthStore } from "@/auth/store/auth.store";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  brand: z.string().min(3, {
    message: "Brand must be at least 3 characters.",
  }),
  model: z.string().min(3, {
    message: "Model must be at least 3 characters.",
  }),
  acquisition: z.string(),
  location: z.string().min(3, {
    message: "Location must be at least 3 characters.",
  }),
  status: z.string().min(2, {
    message: "Status must be at least 2 characters.",
  }),
  organization: z.string().min(3, {
    message: "Organization must be at least 3 characters.",
  }),
});



export const EditForm = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const updateEquipment = useDashboardStore((state) => state.updateEquipment);
  const equipmentSelected = useDashboardStore((state) => state.equipmentSelected);
  const token = useAuthStore((state) => state.token);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: equipmentSelected.name,
      brand: equipmentSelected.brand,
      model: equipmentSelected.model,
      acquisition: '',
      location: equipmentSelected.location,
      status: equipmentSelected.status,
      organization: equipmentSelected.organization,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Convertir el valor de "acquisition" a formato ISO antes de enviar al backend
    const formattedValues = {
      ...values,
      acquisition: new Date(values.acquisition),
      status: values.status as EquipmentStatus,
    };
    const res = await updateEquipment(formattedValues, token!);

    if (res.status === "success") {
      toast(res.message, res.status);
      navigate("/dashboard/inventory");
    } else {
      toast(res.message, res.status);
    }
  }

  const handleCancel = () => {
    form.reset();
    navigate("/dashboard/inventory");
  }


  return (
    <DashboardPage>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="gap-y-2 gap-x-2 grid grid-cols-12 shadow p-4 border rounded h-full"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="col-span-12 sm:col-span-6">
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Nombre del equipo"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="brand"
            render={({ field }) => (
              <FormItem className="col-span-12 sm:col-span-6">
                <FormLabel>Marca</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Marca del equipo"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="model"
            render={({ field }) => (
              <FormItem className="col-span-12 sm:col-span-6">
                <FormLabel>Modelo</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Modelo del equipo"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="acquisition"
            render={({ field }) => (
              <FormItem className="col-span-12 sm:col-span-6">
                <FormLabel>Fecha de adquisición</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem className="col-span-12 sm:col-span-6">
                <FormLabel>Ubicación</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ubicación del equipo"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="organization"
            render={({ field }) => (
              <FormItem className="col-span-12 sm:col-span-6">
                <FormLabel>Organización</FormLabel>
                <FormControl>
                  <Input placeholder="Organización" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem className="col-span-12">
                <FormLabel>Estado</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione un estado" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value={EquipmentStatus.Assigned}>
                        <SelectLabel>Asignado</SelectLabel>
                      </SelectItem>
                      <SelectItem value={EquipmentStatus.Available}>
                        <SelectLabel>Disponible</SelectLabel>
                      </SelectItem>
                      <SelectItem value={EquipmentStatus.InRepair}>
                        <SelectLabel>En reparación</SelectLabel>
                      </SelectItem>
                      <SelectItem value={EquipmentStatus.OnLoan}>
                        <SelectLabel>En préstamo</SelectLabel>
                      </SelectItem>
                      <SelectItem value={EquipmentStatus.Obsolete}>
                        <SelectLabel>Obsoleto</SelectLabel>
                      </SelectItem>
                      <SelectItem value={EquipmentStatus.PendingAssignment}>
                        <SelectLabel>Asignación pendiente</SelectLabel>
                      </SelectItem>
                      <SelectItem value={EquipmentStatus.Reserved}>
                        <SelectLabel>Reservado</SelectLabel>
                      </SelectItem>
                      <SelectItem value={EquipmentStatus.UnderReview}>
                        <SelectLabel>En revisión</SelectLabel>
                      </SelectItem>
                      <SelectItem value={EquipmentStatus.Decommissioning}>
                        <SelectLabel>Desmantelamiento</SelectLabel>
                      </SelectItem>
                      <SelectItem value={EquipmentStatus.Decommissioned}>
                        <SelectLabel>Desmantelado</SelectLabel>
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            variant={"outline"}
            className="col-span-12 sm:col-span-6 uppercase"
          >
            Moficar
          </Button>
          <Button
            type="button"
            variant={"destructive"}
            className="col-span-12 sm:col-span-6 uppercase"
            onClick={() => handleCancel() }
          >
            Cancelar
          </Button>
        </form>
      </Form>
    </DashboardPage>
  );
};
