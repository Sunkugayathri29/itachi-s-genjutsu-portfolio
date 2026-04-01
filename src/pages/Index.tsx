import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import SoftSkillsAndInterests from "@/components/SoftSkillsAndInterests";
import ContactSection from "@/components/ContactSection";
import CrowParticles from "@/components/CrowParticles";
import CursorGlow from "@/components/CursorGlow";

const Index = () => (
  <div className="relative min-h-screen bg-background text-foreground">
    <CursorGlow />
    <CrowParticles />
    <Navbar />
    <HeroSection />
    <div className="section-divider" />
    <AboutSection />
    <div className="section-divider" />
    <SkillsSection />
    <div className="section-divider" />
    <ProjectsSection />
    <div className="section-divider" />
    <ExperienceSection />
    <div className="section-divider" />
    <EducationSection />
    <div className="section-divider" />
    <SoftSkillsAndInterests />
    <div className="section-divider" />
    <ContactSection />
  </div>
);

export default Index;
