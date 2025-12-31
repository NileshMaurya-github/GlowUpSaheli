import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import Background3D from "./Background3D";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Background3D />
      <Navbar />
      <main className="flex-1 pt-24 relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};
