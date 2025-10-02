import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  subtitle?: string;
  faqs?: FAQItem[];
  className?: string;
}

const defaultFAQs: FAQItem[] = [
  {
    id: "faq-1",
    question: "What services do you offer?",
    answer: "We specialize in website development, personal portfolios, business websites, and e-commerce solutions. Our services include custom web development, responsive design, SEO optimization, and ongoing maintenance and support."
  },
  {
    id: "faq-2",
    question: "How long does it take to build a website?",
    answer: "The timeline depends on the complexity and scope of your project. A simple portfolio website typically takes 1-2 weeks, while a complex e-commerce site may take 4-8 weeks. We'll provide a detailed timeline during our initial consultation."
  },
  {
    id: "faq-3",
    question: "What is your development process?",
    answer: "Our process includes: 1) Discovery and planning, 2) Design and wireframing, 3) Development and coding, 4) Testing and optimization, 5) Launch and deployment, 6) Ongoing support and maintenance. We keep you involved throughout each phase."
  },
  {
    id: "faq-4",
    question: "Do you provide ongoing support after launch?",
    answer: "Yes, we offer comprehensive post-launch support including bug fixes, security updates, content updates, and technical assistance. We have various maintenance packages to suit different needs and budgets."
  },
  {
    id: "faq-5",
    question: "What technologies do you use?",
    answer: "We use modern, industry-standard technologies including React, TypeScript, Next.js, Tailwind CSS, and various backend solutions. We choose the best technology stack based on your specific project requirements."
  },
  {
    id: "faq-6",
    question: "Can you help with SEO and digital marketing?",
    answer: "Absolutely! We build SEO-friendly websites with optimized code, fast loading times, and proper meta tags. We can also provide guidance on content strategy and basic digital marketing best practices."
  },
  {
    id: "faq-7",
    question: "What are your pricing options?",
    answer: "Our pricing varies based on project scope, complexity, and timeline. We offer competitive rates and flexible payment options. Contact us for a detailed quote tailored to your specific needs and budget."
  },
  {
    id: "faq-8",
    question: "Do you work with clients internationally?",
    answer: "Yes, we work with clients worldwide. We're experienced in remote collaboration and use modern communication tools to ensure smooth project delivery regardless of location or time zone."
  }
];

export const FAQ = ({ 
  title = "Frequently Asked Questions", 
  subtitle = "Find answers to common questions about our services and process",
  faqs = defaultFAQs,
  className = ""
}: FAQProps) => {
  return (
    <section id="faq" className={`py-20 bg-background ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="h-8 w-8 text-gold mr-3" />
            <h2 className="font-subheading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
              {title}
            </h2>
          </div>
          <p className="font-secondary text-xl text-muted-foreground max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className="border border-border rounded-lg px-6 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-colors"
              >
                <AccordionTrigger className="text-left font-subheading text-lg font-semibold text-foreground hover:text-gold transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-secondary text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="font-secondary text-muted-foreground mb-4">
            Still have questions? We're here to help!
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center font-subheading font-semibold text-gold hover:text-gold/80 transition-colors"
          >
            Get in Touch →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
