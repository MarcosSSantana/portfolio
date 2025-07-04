import type { ReactNode } from "react";

interface SectionProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

const Section = ({ title, icon, children }: SectionProps) => {
  return (
    <section className="mb-12">
      <div className="font-['Montserrat'] text-xl text-[#1b2a36] mb-6 border-l-4 border-[#4caf50] pl-3 font-semibold flex items-center gap-2">
        {icon} {title}
      </div>
      {children}
    </section>
  );
};

export default Section;
