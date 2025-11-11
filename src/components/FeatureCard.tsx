import { ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface FeatureCardProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const FeatureCard = ({ title, children, className = "" }: FeatureCardProps) => {
  return (
    <Card className={`overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300 ${className}`}>
      <div className="p-8">
        {title && <h3 className="text-2xl font-bold text-foreground mb-6">{title}</h3>}
        {children}
      </div>
    </Card>
  );
};

export default FeatureCard;
