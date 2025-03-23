import { ReactNode } from "react";

export type ServicePlan = {
  icon: ReactNode;
  title: string;
  description: string;
  advertencia?: string;
  plans: {
    name: string;
    price: string;
    description: string;
    features: string[];
    icon: ReactNode;
    time?: string;
  }[];
  process?: {
    step: string;
    description: string;
  }[];
  note?: {
    id?: number;
    frase: string;
  }[];
};
