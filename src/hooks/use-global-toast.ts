// src/hooks/use-global-toast.ts
"use client";

import { toast } from "@/hooks/use-toast";

type ToastVariant = "default" | "destructive" | "success" | "warning";

export const useGlobalToast = () => {
  const showToast = (
    variant: ToastVariant,
    title: string,
    description?: string
  ) => {
    toast({
      variant,
      title,
      description,
      className: variant === "success" 
        ? "bg-success text-success-foreground" 
        : variant === "warning" 
          ? "bg-warning text-warning-foreground"
          : "",
    });
  };

  const showSuccess = (title: string, description?: string) => 
    showToast("success", title, description);

  const showError = (title: string, description?: string) => 
    showToast("destructive", title, description);

  const showWarning = (title: string, description?: string) => 
    showToast("warning", title, description);

  const showInfo = (title: string, description?: string) => 
    showToast("default", title, description);

  return {
    showSuccess,
    showError,
    showWarning,
    showInfo,
    toast: showToast,
  };
};