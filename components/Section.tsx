import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
}

export default function Section({ children, className = "", id, fullWidth = false }: SectionProps) {
  return (
    <section id={id} className={`py-24 lg:py-32 ${className}`}>
      <div className={fullWidth ? "w-full" : "max-w-7xl mx-auto px-6 lg:px-12"}>
        {children}
      </div>
    </section>
  );
}
