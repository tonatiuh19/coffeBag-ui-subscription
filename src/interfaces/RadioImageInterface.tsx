import * as React from "react";

export interface RadioImageInterface {
  changed: any;
  id: string;
  isSelected: boolean;
  value: string;
  children: React.ReactNode;
  label: string[];
  classSelected: boolean;
  secondLabel: boolean;
}
