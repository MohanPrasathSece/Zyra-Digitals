import { Search, Palette, Code, Rocket } from "lucide-react";

interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface ProcessProps {
  title?: string;
  subtitle?: string;
  steps?: ProcessStep[];
  className?: string;
}

const defaultSteps: ProcessStep[] = [
  {
    id: "discovery",
    number: "01",
    title: "Discovery",
    description: "Goals, audience, and requirements",
    icon: Search
  },
  {
    id: "design",
    number: "02",
    title: "Design",
    description: "Wireframes and clean interfaces",
    icon: Palette
  },
  {
    id: "development",
    number: "03",
    title: "Development",
    description: "Reliable code and performance",
    icon: Code
  },
  {
    id: "launch",
    number: "04",
    title: "Launch",
    description: "Deploy, monitor, refine",
    icon: Rocket
  }
];

export const Process = ({
  title = "Our Process",
  subtitle = "From brief to launch — a clear, simple 4-step journey",
  steps = defaultSteps,
  className = ""
}: ProcessProps) => {
  return (
    <section className={`py-20 bg-background ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            {title}
          </h2>
          <p className="font-secondary text-xl text-muted-foreground max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-6xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-gold/20 via-gold to-gold/20 z-0"></div>
              
              {/* Steps */}
              <div className="grid grid-cols-4 gap-8 relative z-10">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.id} className="text-center group">
                      {/* Icon Container */}
                      <div className="relative mb-8">
                        <div className="w-20 h-20 mx-auto bg-primary rounded-full flex items-center justify-center group-hover:bg-gold transition-colors duration-300 shadow-lg">
                          <Icon className="w-8 h-8 text-primary-foreground group-hover:text-primary transition-colors duration-300" />
                        </div>
                        {/* Step Number */}
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                          <span className="font-heading text-sm font-bold text-primary">
                            {step.number}
                          </span>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="space-y-3">
                        <h3 className="font-heading text-2xl font-semibold text-foreground group-hover:text-gold transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="font-secondary text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Layout */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === steps.length - 1;
              
              return (
                <div key={step.id} className="relative">
                  <div className="flex items-start gap-6">
                    {/* Icon and Line */}
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      {/* Step Number */}
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-gold rounded-full flex items-center justify-center">
                        <span className="font-heading text-xs font-bold text-primary">
                          {step.number}
                        </span>
                      </div>
                      {/* Vertical Line */}
                      {!isLast && (
                        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-gold to-gold/20"></div>
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 pt-2">
                      <h3 className="font-heading text-xl sm:text-2xl font-semibold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="font-secondary text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="font-secondary text-muted-foreground mb-6">
            Ready to start your project journey?
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center font-heading font-semibold text-gold hover:text-gold/80 transition-colors text-lg"
          >
            Let's Begin →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;
