import { Button } from "@/components/ui/button";
import { Instagram, Users, Video, BookOpen } from "lucide-react";

const ContentCreatorSection = () => {
  const highlights = [
    { icon: Video, text: "Creates educational reels on C, Web Dev & coding concepts" },
    { icon: BookOpen, text: "Helps engineering students upgrade their skills" },
    { icon: Users, text: "Known for clarity, creativity & consistency" },
  ];

  return (
    <section id="content" className="bg-lavender-glow/20">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lavender/30 border border-lavender mb-6">
            <Video className="h-4 w-4" />
            <span className="text-sm font-medium">Content Creator</span>
          </div>

          <h2 className="section-title">Tech Content Creator</h2>
          
          <div className="flex items-center justify-center gap-2 mb-8">
            <Users className="h-6 w-6 text-lavender-muted" />
            <span className="text-2xl font-heading font-bold text-foreground">15K+</span>
            <span className="text-muted-foreground">Followers</span>
          </div>

          <div className="card-lavender text-left mb-8">
            <div className="space-y-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-lavender/30 flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-foreground" />
                  </div>
                  <span className="text-foreground/90">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <Button variant="glow" size="lg" asChild>
            <a
              href="https://instagram.com/saikiran_sugurthi.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-5 w-5 mr-2" />
              @saikiran_sugurthi.dev
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContentCreatorSection;
