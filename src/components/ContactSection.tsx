import { Button } from "@/components/ui/button";
import { Linkedin, Github, Instagram, Mail } from "lucide-react";

const ContactSection = () => {
  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/sai-kiran-sugurthi-1a267830b/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/Saikiran-Sugurthi", label: "GitHub" },
    { icon: Instagram, href: "https://instagram.com/saikiran_sugurthi.dev", label: "Instagram" },
    { icon: Mail, href: "mailto:sugurthisaikiran@gmail.com", label: "Email" },
  ];

  return (
    <section id="contact">
      <div className="section-container">
        <h2 className="section-title text-center">Let&apos;s Connect</h2>
        <p className="section-subtitle text-center mx-auto max-w-xl">
          No long forms — just quick links. Reach out where it&apos;s most convenient for you.
        </p>

        <div className="max-w-xl mx-auto">
          <div className="card-lavender border-2 border-lavender/30 flex flex-col gap-6">
            {/* Primary contact action */}
            <div className="text-center space-y-3">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground/70">
                Primary contact
              </p>
              <Button
                asChild
                variant="hero"
                size="lg"
                className="w-full md:w-auto justify-center"
              >
                <a href="mailto:sugurthisaikiran@gmail.com">
                  <Mail className="h-4 w-4 mr-2" />
                  Email me directly
                </a>
              </Button>
              <p className="text-xs text-muted-foreground/80">
                I usually reply within 24 hours.
              </p>
            </div>

            {/* Social Links */}
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-center text-muted-foreground mb-4">
                Or connect with me on
              </p>
              <div className="flex items-center justify-center gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-lavender/30 hover:border-lavender border border-transparent transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
