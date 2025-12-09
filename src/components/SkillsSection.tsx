const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "Python", "JavaScript"],
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React.js", "Next.js", "Node.js", "Express.js", "Socket.io", "Tailwind CSS", "Bootstrap"],
    },
    {
      title: "Tools & Concepts",
      skills: ["REST APIs", "Vite", "Git/GitHub", "Postman", "dotenv", "JWT", "bcrypt", "Agile", "Deployment"],
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL"],
    },
  ];

  return (
    <section id="skills">
      <div className="section-container">
        <h2 className="section-title text-center">Skills & Technologies</h2>
        <p className="section-subtitle text-center mx-auto">
          Tools and technologies I work with to bring ideas to life
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="card-lavender">
              <h3 className="font-heading font-semibold text-lg mb-4 text-foreground">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="lavender-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
