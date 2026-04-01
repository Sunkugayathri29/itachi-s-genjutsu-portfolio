import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

const skills = [
  { name: "C", level: 80 },
  { name: "Java", level: 75 },
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 70 },
  { name: "Windows", level: 85 },
  { name: "Linux", level: 65 },
];

const SkillBar = ({ name, level }: { name: string; level: number }) => (
  <div className="mb-5">
    <div className="flex justify-between mb-1">
      <span className="font-body text-sm text-foreground/80 tracking-wide">{name}</span>
      <span className="font-body text-xs text-muted-foreground">{level}%</span>
    </div>
    <div className="h-2 rounded-full bg-secondary overflow-hidden">
      <motion.div
        className="h-full rounded-full"
        style={{ background: "linear-gradient(90deg, hsl(0 100% 20%), hsl(0 100% 35%))" }}
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  </div>
);

const SkillsSection = () => (
  <SectionWrapper id="skills">
    <SectionTitle>Skills — Chakra Arsenal</SectionTitle>
    <div className="grid md:grid-cols-2 gap-x-12 gap-y-2 max-w-3xl mx-auto">
      {skills.map((s) => (
        <SkillBar key={s.name} {...s} />
      ))}
    </div>
  </SectionWrapper>
);

export default SkillsSection;
