import { useState, useEffect } from "react";

export function useReports() {
  const [reportType, setReportType] = useState<string>("");
  const [dateRange, setDateRange] = useState({
    from: new Date(),
    to: new Date(),
  });
  const [reportData, setReportData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchReportData = async () => {
    if (!reportType) return;
    
    setIsLoading(true);
    try {
      // Simulación de llamada a API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Datos de ejemplo según el tipo de reporte
      const mockData = {
        sales: [
          { "Fecha": "2023-01-01", "Cliente": "Cliente A", "Producto": "Producto 1", "Total": 100 },
          { "Fecha": "2023-01-02", "Cliente": "Cliente B", "Producto": "Producto 2", "Total": 200 },
        ],
        inventory: [
          { "Producto": "Producto 1", "Stock": 50, "Ubicación": "Bodega A" },
          { "Producto": "Producto 2", "Stock": 30, "Ubicación": "Bodega B" },
        ],
      };

      setReportData(mockData[reportType as keyof typeof mockData] || []);
    } catch (error) {
      console.error("Error fetching report data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (reportType) {
      fetchReportData();
    }
  }, [reportType]);

  return {
    reportType,
    setReportType,
    dateRange,
    setDateRange,
    reportData,
    isLoading,
    fetchReportData,
  };
}