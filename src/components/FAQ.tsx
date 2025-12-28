import { useState } from "react";
import { Plus, Minus, HelpCircle, MessageCircle } from "lucide-react";
import { Typewriter } from "./Typewriter";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string | React.ReactNode;
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
    <section id="faq" className={`py-20 bg-background relative ${className}`}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 border border-gold/20 rounded-full" />
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-primary/20 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-gold/10 rounded-full transform -translate-y-1/2" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-8">
            <div className="w-1 h-12 bg-gold mx-auto mb-4" />
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-foreground tracking-wide">
              {typeof title === 'string' ? <Typewriter text={title} speed={80} /> : title}
            </h2>
            <div className="w-1 h-12 bg-gold mx-auto mt-4" />
          </div>
          <p className="font-secondary text-base text-muted-foreground max-w-2xl mx-auto italic">
            {subtitle}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {faqs.map((faq, index) => {
            const isOpen = openItem === faq.id;
            
            return (
              <motion.div 
                key={faq.id} 
                className="relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {/* Number indicator */}
                <div className="absolute -left-8 top-0 text-gold/30 text-2xl font-light">
                  {String(index + 1).padStart(2, '0')}
                </div>
                
                <motion.div
                  className="border-l-2 border-transparent hover:border-gold/30 transition-all duration-700 pl-8"
                  whileHover={{ x: 4 }}
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full text-left group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className={`${questionFontClass} text-lg sm:text-xl font-light text-foreground group-hover:text-gold transition-colors duration-300`}>
                        {faq.question}
                      </h3>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-0.5 bg-gold/20 group-hover:bg-gold transition-all duration-300" />
                        <div className={`w-2 h-2 rounded-full bg-gold/30 group-hover:bg-gold transition-all duration-300 ${isOpen ? 'rotate-45' : ''}`} />
                      </div>
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: "auto", marginTop: "1rem" }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="relative pl-4">
                          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-gold/50 to-transparent" />
                          <p className="font-secondary text-muted-foreground leading-relaxed text-base">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: faqs.length * 0.15 }}
        >
          <div className="relative inline-block group">
            {/* Animated background glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-gold/20 to-primary/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Rotating border effect */}
            <div className="absolute inset-0 rounded-full border border-gold/30">
              <div className="absolute inset-0 rounded-full border border-gold/20 animate-spin" style={{ animationDuration: '8s' }} />
            </div>
            
            <motion.button 
              onClick={() => window.location.href = '/contact'}
              className="relative px-10 py-4 bg-gradient-to-r from-gold/10 to-primary/10 text-gold font-light tracking-wide rounded-full border border-gold/40 hover:border-gold transition-all duration-500 overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Sliding background effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-gold to-primary opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Button content */}
              <div className="relative flex items-center gap-3">
                <span className="text-lg">Have more questions</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="text-xl"
                >
                  →
                </motion.div>
              </div>
              
              {/* Corner decorations */}
              <div className="absolute top-1 left-1 w-2 h-2 bg-gold rounded-full opacity-60" />
              <div className="absolute top-1 right-1 w-2 h-2 bg-gold rounded-full opacity-60" />
              <div className="absolute bottom-1 left-1 w-2 h-2 bg-gold rounded-full opacity-60" />
              <div className="absolute bottom-1 right-1 w-2 h-2 bg-gold rounded-full opacity-60" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
