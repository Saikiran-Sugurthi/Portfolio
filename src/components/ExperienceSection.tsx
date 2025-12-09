import { Trophy, Users, Lightbulb, Rocket } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      icon: Trophy,
      title: "GDSC Solution Challenge Participant",
      year: "2025",
      points: [
        "Collaborated in a 4-member team",
        "Built rapid prototypes for real-world problems",
        "Recognized for innovation & execution",
      ],
    },
  ];

  return (
    <section id="experience">
      <div className="section-container">
        <h2 className="section-title text-center">Experience</h2>
        <p className="section-subtitle text-center mx-auto">
          Notable achievements and professional experiences
        </p>

        <div className="max-w-2xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-8">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-lavender via-lavender-muted to-transparent" />
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-2 h-2 -translate-x-1/2 rounded-full bg-lavender ring-4 ring-background" />

              <div className="card-lavender ml-4">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-lavender/30 flex items-center justify-center shrink-0">
                    <exp.icon className="h-6 w-6 text-foreground" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <h3 className="font-heading font-semibold text-lg text-foreground">
                        {exp.title}
                      </h3>
                      <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-md">
                        {exp.year}
                      </span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 ml-16">
                  {exp.points.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className="flex items-start gap-2 text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-lavender mt-2 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
