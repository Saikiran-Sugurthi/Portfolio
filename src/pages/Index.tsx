import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import LearningSection from "@/components/LearningSection";
import ProjectsSection from "@/components/ProjectsSection";
import OpenSourceSection from "@/components/OpenSourceSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContentCreatorSection from "@/components/ContentCreatorSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <LearningSection />
      <ProjectsSection />
      <OpenSourceSection />
      <ExperienceSection />
      <ContentCreatorSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
