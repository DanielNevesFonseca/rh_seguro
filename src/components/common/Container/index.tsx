import { ReactNode } from "react";

export const Container = ({ children }: { children: ReactNode }) => {
  return <div className="max-w-screen-xl mx-auto px-3 w-full">{children}</div>;
};


