import * as React from "react";

export interface NodeLayoutInterface {
  children: React.ReactNode;
  step?: number;
  handlePreviousStep?: any;
}
