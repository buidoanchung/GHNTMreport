import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import type { ChartType, ChartData, ChartOptions } from 'chart.js';

interface ChartComponentProps {
  type: ChartType;
  data: ChartData;
  options: ChartOptions;
  className?: string;
}

const ChartComponent: React.FC<ChartComponentProps> = ({ type, data, options, className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, {
      type,
      data,
      options,
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, data, options]);

  return (
    <div className={`relative w-full h-full ${className}`}>
        <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default ChartComponent;