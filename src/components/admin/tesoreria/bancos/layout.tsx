
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';


export const Bancos = () => {
  const { toast } = useToast();

  const handleSuccess = () => {
    toast({
      title: "Éxito",
      description: "Se agregó el registro correctamente",
      variant: "success",
    });
  };

  const handleWarning = () => {
    toast({
      title: "Advertencia",
      description: "Borrarás el registro actual, quieres continuar?",
      variant: "warning",
    });
  };

  const handleError = () => {
    toast({
      title: "Error",
      description: "No se pudo actualizar o crear el registro",
      variant: "destructive",
    });
  };
  return (
    <div className="">
      <Card className="p-5">
        <h2 className="text-2xl font-bold mt-5 mb-10 text-primary">Nuevo Registro de Bancos</h2>
        <div className="flex justify-between mx-10">
          <Button
            onClick={handleSuccess}
            className=" w-full md:w-auto"
          >
            Nuevo Registro
          </Button>
          <Button
            onClick={handleWarning}
            className="w-full md:w-auto"
          >
            Borrar Registro
          </Button>

          <Button
            onClick={handleError}
            className="w-full md:w-auto"
          >
            Actualizar Registro
          </Button>

          <input type="number" name="numregistro" id="numregistro" placeholder='Buscar...' className='border px-2 ' />
          <Button
            onClick={handleError}
            className="w-full md:w-auto"
          >
            Buscar
          </Button>
        </div>
      </Card>
      <Card className='mt-5 p-5 bg-slate-400'>
        <form action="" className=' grid grid-cols-3 gap-10'>
        <h3 className="font-semibold text-lg h-full">Información de Referencia</h3>
          <div className="  ">
            <div className="">
              <Label>Placa | Vehículo</Label>
              <Input placeholder="ABC-1234" />
            </div>
            <div className="">
              <Label>Peso (kg)</Label>
              <Input type="number" placeholder="0.00" />
            </div>
          </div>
          <div>
            <div className="">
              <Label>Placa | Vehículo</Label>
              <Input type='text' placeholder="Descipción" className='h-24 mt-2' />
            </div>
          </div>
        </form >
      </Card >
    </div >
  );
}