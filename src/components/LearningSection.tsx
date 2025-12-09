import { Brain, Sparkles, Database, Cpu, Lightbulb, Zap, Code, Bot } from "lucide-react";

const LearningSection = () => {
  const learningTopics = [
    { icon: Brain, text: "Foundations of Machine Learning" },
    { icon: Code, text: "Python-based ML workflows" },
    { icon: Database, text: "Data preprocessing & feature engineering" },
    { icon: Cpu, text: "ML algorithms (SVM, Regression, Trees)" },
    { icon: Sparkles, text: "Understanding Neural Networks" },
    { icon: Lightbulb, text: "Prompt Engineering fundamentals" },
    { icon: Bot, text: "Building simple GenAI tools" },
    { icon: Zap, text: "Integrating AI into full-stack apps" },
  ];

  return (
    <section id="learning" className="bg-lavender-glow/20">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lavender/30 border border-lavender mb-6">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Currently Exploring</span>
            </div>
            <h2 className="section-title">AI/ML & Generative AI</h2>
            <p className="section-subtitle mx-auto">
              Expanding my skillset into the world of artificial intelligence
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {learningTopics.map((topic, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-lavender/50 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-lavender/30 flex items-center justify-center shrink-0">
                  <topic.icon className="h-5 w-5 text-foreground" />
                </div>
                <span className="text-foreground/90">{topic.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningSection;
