import React from "react";

export interface ChiddenProps {
  children: JSX.Element;
}
export const Layout: React.FC<ChiddenProps> = ({children}) => {
  return <>{children}</>
}