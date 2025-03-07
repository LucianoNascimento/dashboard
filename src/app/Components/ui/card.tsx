import React from "react";
import Link  from 'next/link';
export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {children}
    </div>
  );
};

export const CardHeader = ({ children }: { children: React.ReactNode }) => {
  return <div className="text-xl font-bold">{children}</div>;
};

export const CardTitle = ({ children }: { children: React.ReactNode }) => {
  return <h3 className="text-lg font-semibold">{children}</h3>;
};

export const CardDescription = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-sm text-muted">{children}</p>;
};

export const CardContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="mt-4">{children}</div>;
};

export const CardFooter = ({ children }: { children: React.ReactNode }) => {
  return <div className="mt-4 text-sm">{children}</div>;
};

