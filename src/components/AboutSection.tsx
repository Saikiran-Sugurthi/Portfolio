import { MapPin, GraduationCap, Mail, Phone, Code, Terminal, ExternalLink } from "lucide-react";

const AboutSection = () => {
  const quickInfo = [
    { icon: MapPin, label: "Hyderabad, India" },
    { icon: GraduationCap, label: "BTech CSE (2023–Present)" },
    { icon: Mail, label: "sugurthisaikiran@gmail.com" },
    { icon: Phone, label: "+91 9959043103" },
  ];

  const codingProfiles = [
    {
      icon: Code,
      label: "LeetCode — DSA Problem Solving",
      href: "https://leetcode.com/u/saikiranytg/",
    },
    {
      icon: Terminal,
      label: "CodeChef — Competitive Programming",
      href: "https://www.codechef.com/users/saikiran1307",
    },
  ];

  return (
    <section id="about" className="bg-secondary/30">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center">About Me</h2>
          <p className="section-subtitle text-center mx-auto">
            Passionate about creating impactful digital solutions
          </p>

          <div className="card-lavender border-2 border-lavender/30">
            {/* Intro Text */}
            <p className="text-lg leading-relaxed text-foreground/90 mb-8">
              Sugurthi Sai Kiran is a Computer Science Engineering student at{" "}
              <span className="font-semibold">CVR College of Engineering</span> (CGPA 9.28).
              He builds full-stack applications, real-time systems, and student-friendly tools.
              As a tech content creator with{" "}
              <span className="text-foreground font-semibold">15K+ followers</span>, he simplifies
              complex concepts into easy-to-learn formats.
            </p>

            {/* Quick Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {quickInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-xl bg-background/50 border border-border/50"
                >
                  <div className="w-10 h-10 rounded-lg bg-lavender/30 flex items-center justify-center">
                    <info.icon className="h-5 w-5 text-foreground" />
                  </div>
                  <span className="text-foreground/80">{info.label}</span>
                </div>
              ))}
            </div>

            {/* Coding Profiles Title */}
            <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
              Coding Profiles
            </h3>

            {/* Coding Profiles (Matching Style) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {codingProfiles.map((profile, index) => (
                <a
                  key={index}
                  href={profile.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-background/50 border border-lavender/40 hover:border-lavender hover:bg-lavender/10 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-lavender/30 flex items-center justify-center group-hover:bg-lavender/40 transition-colors">
                    <profile.icon className="h-5 w-5 text-foreground" />
                  </div>

                  <div className="flex-1 text-foreground/80 font-medium flex items-center gap-2">
                    {profile.label}
                    <ExternalLink className="h-3 w-3 opacity-70 group-hover:opacity-100" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
