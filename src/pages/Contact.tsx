import { ContactForm } from "@/components/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl sm:text-6xl font-bold text-foreground mb-6">
              Let's Create Together
            </h1>
            <p className="font-secondary text-xl text-muted-foreground leading-relaxed">
              Have a project in mind? We'd love to hear about it. 
              Reach out and let's discuss how we can bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-background p-8 rounded-lg border border-border">
              <h2 className="font-subheading text-3xl font-bold text-foreground mb-6">
                Send a Message
              </h2>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-subheading text-3xl font-bold text-foreground mb-6">
                  Get in Touch
                </h2>
                <p className="font-secondary text-lg text-muted-foreground leading-relaxed mb-8">
                  Whether you have a detailed project brief or just an idea you'd like to explore, 
                  we're here to help. Contact us through the form or reach out directly.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-gold mt-1">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-subheading font-semibold text-foreground mb-1">Email</h3>
                    <a
                      href="mailto:zyradigitalsofficial@email.com"
                      className="font-secondary text-muted-foreground hover:text-gold transition-colors"
                    >
                      zyradigitalsofficial@email.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-gold mt-1">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-subheading font-semibold text-foreground mb-1">Phone</h3>
                    <a
                      href="https://wa.me/9025421149"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-secondary text-muted-foreground hover:text-gold transition-colors"
                    >
                      WhatsApp: 9025421149
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-gold mt-1">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-subheading font-semibold text-foreground mb-1">Location</h3>
                    <p className="font-secondary text-muted-foreground">
                      Remote • Worldwide
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-border">
                <h3 className="font-subheading text-xl font-semibold text-foreground mb-3">
                  Business Hours
                </h3>
                <p className="font-secondary text-muted-foreground">
                  Monday – Sunday: 6:00 AM – 6:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-subheading text-4xl font-bold text-center text-foreground mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-8">
              {[
                {
                  question: "What is your typical project timeline?",
                  answer: "Project timelines vary based on scope and complexity. A standard website typically takes 4-8 weeks from initial consultation to launch. We'll provide a detailed timeline during our discovery phase.",
                },
                {
                  question: "Do you work with clients internationally?",
                  answer: "Absolutely! As a remote studio, we work with clients worldwide. We're experienced in managing projects across different time zones and ensure clear communication throughout.",
                },
                {
                  question: "What is your pricing structure?",
                  answer: "We offer custom quotes based on your specific requirements. Each project is unique, and we believe in transparent pricing tailored to your needs and budget.",
                },
              ].map((faq, index) => (
                <div key={index} className="border-b border-border pb-6">
                  <h3 className="font-subheading text-xl font-semibold text-foreground mb-3">
                    {faq.question}
                  </h3>
                  <p className="font-secondary text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
