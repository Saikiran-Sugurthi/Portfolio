import { Globe, Flame, GitPullRequest, Bug, Users, Award } from "lucide-react";

const OpenSourceSection = () => {
  const contributions = [
    {
      icon: Globe,
      title: "GirlScript Summer of Code — 2025",
      badge: "GSSOC'25",
      points: [
        "Contributed to open-source repositories",
        "Implemented new features & fixed bugs",
        "Learned PR workflows & collaborative development",
      ],
    },
    {
      icon: Flame,
      title: "Hacktoberfest 2025 — Super Contributor",
      badge: "Hacktoberfest",
      points: [
        "Submitted 5+ meaningful PRs",
        "Improved frontend, backend & documentation",
        'Earned "Super Contributor" recognition',
      ],
    },
  ];

  return (
    <section id="opensource" className="bg-secondary/30">
      <div className="section-container">
        <h2 className="section-title text-center">Open Source Contributions</h2>
        <p className="section-subtitle text-center mx-auto">
          Giving back to the developer community
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {contributions.map((item, index) => (
            <div key={index} className="card-lavender">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-lavender to-lavender-muted flex items-center justify-center shrink-0">
                  <item.icon className="h-6 w-6 text-foreground" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg text-foreground">
                    {item.title}
                  </h3>
                  <span className="inline-block mt-1 text-xs px-3 py-1 rounded-full bg-lavender/50 text-foreground font-medium">
                    {item.badge}
                  </span>
                </div>
              </div>

              <ul className="space-y-2">
                {item.points.map((point, pointIndex) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenSourceSection;
