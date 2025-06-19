import { VentasSubHeader } from '@/components/admin/ventas/ventasSubHeader';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

export const Factura = () => {
  const { toast } = useToast();

  const handleSuccess = () => {
    toast({
      title: "Factura generada",
      description: "La factura se ha creado correctamente",
      variant: "success",
    });
  };

  const handleWarning = () => {
    toast({
      title: "Advertencia",
      description: "Faltan campos por completar en la factura",
      variant: "warning",
    });
  };

  const handleError = () => {
    toast({
      title: "Error",
      description: "No se pudo generar la factura",
      variant: "destructive",
    });
  };

  return (
    <div className="space-y-6">
      <VentasSubHeader />
      
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-6 text-primary">Nueva Factura</h2>
        
        {/* Formulario de factura */}
        <div className="space-y-4 mb-6">
          {/* Secciones del formulario... */}
        </div>
        
        {/* Botones de acción con toasts */}
        <div className="flex gap-4">
          <Button 
            onClick={handleSuccess}
            className="bg-success hover:bg-success/90"
          >
            Guardar Factura
          </Button>
          
          <Button 
            onClick={handleWarning}
            variant="outline"
            className="text-warning border-warning hover:bg-warning/10"
          >
            Validar Factura
          </Button>
          
          <Button 
            onClick={handleError}
            variant="outline"
            className="text-destructive border-destructive hover:bg-destructive/10"
          >
            Cancelar
          </Button>
        </div>
      </Card>
    </div>
  );
};