import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-lavender-glow/20" />

      {/* Floating lavender orbs */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-lavender/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-32 left-16 w-48 h-48 bg-lavender-muted/15 rounded-full blur-3xl animate-float animation-delay-200" />

      <div className="section-container relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <p className="text-muted-foreground text-lg mb-4 opacity-0 animate-fade-up">
  Welcome to my digital playground
</p>

<h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0 animate-fade-up animation-delay-100">
  Hi, I'm{" "}
  <span className="bg-gradient-to-r from-foreground via-foreground to-lavender-muted bg-clip-text">
    Sugurthi Sai Kiran
  </span>{" "}
  <span className="inline-block animate-float">👋</span>
</h1>

<p className="font-heading text-xl md:text-2xl text-muted-foreground mb-4 opacity-0 animate-fade-up animation-delay-200">
  Full-Stack Developer • ML Learner • Open-Source Contributor
</p>

<p className="text-lg text-muted-foreground/80 mb-12 max-w-2xl mx-auto opacity-0 animate-fade-up animation-delay-300">
  I build fast, scalable, and human-centered digital experiences — crafting
  systems that blend clean engineering with modern design.
</p>


          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 opacity-0 animate-fade-up animation-delay-400">
            <Button variant="hero" size="lg" onClick={scrollToProjects}>
              View Projects
              <ArrowDown className="ml-1 h-4 w-4" />
            </Button>
            <Button variant="glow" size="lg" asChild>
              <a
                href="/Sai_Kiran_Sugurthi-Resume.pdf"
                download="Sai_Kiran_Sugurthi-Resume.pdf"
              >
                <Download className="mr-1 h-4 w-4" />
                Download Resume
              </a>
            </Button>

            <Button variant="hero-outline" size="lg" onClick={scrollToContact}>
              <Mail className="mr-1 h-4 w-4" />
              Contact Me
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up animation-delay-400">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
