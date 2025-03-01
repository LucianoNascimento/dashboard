import React from "react";
import Link  from 'next/link';
export interface ChartConfig {
  desktop: {
    label: string;
    color: string;
  };
  mobile: {
    label: string;
    color: string;
  };
}

export const ChartContainer = ({ config, children }: { config: ChartConfig; children: React.ReactNode }) => {
  return <div className="chart-container" style={{ padding: "16px", background: "#f9f9f9" }}>{children}</div>;
};

export const ChartTooltip = ({ cursor, content }: { cursor: boolean; content: React.ReactNode }) => {
  return <div className="chart-tooltip" style={{ position: "absolute", top: "10px", left: "10px" }}>{content}</div>;
};

export const ChartTooltipContent = ({ indicator }: { indicator: string }) => {
  return <div className={`tooltip-content-${indicator}`}>{indicator}</div>;
};
