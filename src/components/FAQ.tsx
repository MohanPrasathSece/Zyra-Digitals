import { useState } from "react";
import { Plus, Minus } from "lucide-react";

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
  questionFont?: "primary" | "secondary";
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
    answer: "The timeline depends on the complexity and scope of your project. A simple portfolio website typically takes 1-2 weeks, while more complex projects may take up to 2-4 weeks maximum. We'll provide a detailed timeline during our initial consultation."
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
  title = "Common Questions", 
  subtitle = "We use only the best quality materials and modern techniques to provide the best outcomes for our clients.",
  faqs = defaultFAQs,
  className = "",
  questionFont = "primary"
}: FAQProps) => {
  const [openItem, setOpenItem] = useState<string>("faq-1"); // First item open by default

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? "" : id);
  };

  const questionFontClass = questionFont === "primary" ? "font-heading" : "font-secondary";

  return (
    <section id="faq" className={`py-20 bg-background ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
            {title}
          </h2>
          <p className="font-secondary text-lg text-muted-foreground max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openItem === faq.id;
            const isFirst = index === 0;
            
            return (
              <div key={faq.id} className="group">
                {isOpen ? (
                  // Expanded FAQ Item (using primary color like the design)
                  <div className="bg-primary text-primary-foreground rounded-2xl p-6 sm:p-8 shadow-lg">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className={`${questionFontClass} text-lg sm:text-xl font-semibold pr-4 leading-relaxed`}>
                        {faq.question}
                      </h3>
                      <button
                        onClick={() => toggleItem(faq.id)}
                        className="flex-shrink-0 w-8 h-8 bg-gold rounded-full flex items-center justify-center hover:bg-gold/90 transition-colors"
                        aria-label="Collapse answer"
                      >
                        <Minus className="w-4 h-4 text-primary font-bold" />
                      </button>
                    </div>
                    <p className="font-secondary text-primary-foreground/90 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ) : (
                  // Collapsed FAQ Items
                  <div 
                    className="bg-card border border-border rounded-2xl p-6 sm:p-8 hover:border-gold/30 hover:shadow-md transition-all duration-200 cursor-pointer"
                    onClick={() => toggleItem(faq.id)}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className={`${questionFontClass} text-lg sm:text-xl font-semibold text-foreground pr-4`}>
                        {faq.question}
                      </h3>
                      <button
                        className="flex-shrink-0 w-8 h-8 bg-gold/10 border border-gold/20 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-200"
                        aria-label="Expand answer"
                      >
                        <Plus className="w-4 h-4 text-gold font-bold" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
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
