// src/hooks/useAppToast.ts
import { useToast } from "@/components/ui/use-toast";
import { ToastProps } from "@/components/ui/toast";

type ToastVariant = "success" | "warning" | "error" | "default";

export const useAppToast = () => {
  const { toast } = useToast();

  const showToast = (
    title: string,
    description?: string,
    variant: ToastVariant = "default"
  ) => {
    const toastProps: ToastProps = {
      title,
      description,
      variant: variant === "error" ? "destructive" : variant,
    };

    // Configuraciones específicas por tipo
    switch (variant) {
      case "success":
        toastProps.className = "bg-success text-white border-0";
        break;
      case "warning":
        toastProps.className = "bg-warning text-gray-900 border-0";
        break;
      case "error":
        // 'destructive' variant ya tiene sus estilos por defecto
        break;
      default:
        break;
    }

    toast(toastProps);
  };

  return {
    showToast,
    // Métodos predefinidos para casos comunes
    showSuccess: (title: string, description?: string) =>
      showToast(title, description, "success"),
    showWarning: (title: string, description?: string) =>
      showToast(title, description, "warning"),
    showError: (title: string, description?: string) =>
      showToast(title, description, "error"),
  };
};