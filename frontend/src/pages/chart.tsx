import React, { useEffect, useRef } from "react";
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, BarController } from "chart.js";

// Registrar os componentes necessários, incluindo o controlador de barras
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, BarController);

const ChartComponent: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      if (ctx) {
        // Criando o gráfico com o controlador de barras registrado
        chartInstanceRef.current = new Chart(ctx, {
          type: "bar", // Tipo de gráfico (barra)
          data: {
            labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"], // Labels do eixo X
            datasets: [
              {
                label: "Vendas Mensais", // Nome da métrica
                data: [12, 19, 3, 5, 2, 6, 8, 7, 9, 10, 16, 17], // Dados do gráfico
                backgroundColor: "rgba(54, 162, 235, 0.2)", // Cor das barras
                borderColor: "rgba(54, 162, 235, 1)", // Cor das bordas
                borderWidth: 1, // Espessura da borda
              },
            ],
          },
          options: {
            responsive: true, // Gráfico responsivo
            scales: {
              y: {
                beginAtZero: true, // Iniciar a escala Y em 0
              },
            },
          },
        });
      }
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default ChartComponent;
