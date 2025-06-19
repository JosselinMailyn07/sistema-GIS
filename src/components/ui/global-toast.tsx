// src/components/ui/global-toast.tsx
"use client";

import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { ReactNode, createContext, useContext } from "react";

type ToastContextType = {
  showSuccess: (message: string, description?: string) => void;
  showError: (message: string, description?: string) => void;
  showWarning: (message: string, description?: string) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const toastContext = useToast();

  const showSuccess = (message: string, description?: string) => {
    toastContext.showSuccess({
      title: message,
      description,
      className: "bg-success text-success-foreground border-success",
    });
  };

  const showError = (message: string, description?: string) => {
    toastContext.showError({
      title: message,
      description,
    });
  };

  const showWarning = (message: string, description?: string) => {
    toastContext.showWarning({
      title: message,
      description,
      className: "bg-warning text-warning-foreground border-warning",
    });
  };

  return (
    <ToastContext.Provider value={{ showSuccess, showError, showWarning }}>
      {children}
      <Toaster />
    </ToastContext.Provider>
  );
};

export const useGlobalToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useGlobalToast must be used within a ToastProvider");
  }
  return context;
};