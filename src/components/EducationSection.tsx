import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

const education = [
  { period: "2025–2029", title: "B.Tech CSE", detail: "SGPA: 8.4", institution: "University" },
  { period: "2023–2025", title: "Intermediate", detail: "82.4%", institution: "Senior Secondary" },
  { period: "2023", title: "SSC", detail: "89.6%", institution: "Secondary School" },
];

const EducationSection = () => (
  <SectionWrapper id="education" className="akatsuki-bg">
    <SectionTitle>Education — Training Arc</SectionTitle>
    <div className="relative max-w-xl mx-auto">
      <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

      {education.map((e, i) => (
        <motion.div
          key={e.title}
          className="relative ml-10 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15, duration: 0.5 }}
        >
          <div className="absolute -left-[26px] w-3 h-3 bg-primary rounded-full animate-pulse-glow" />
          <span className="text-xs font-body text-primary tracking-wider">{e.period}</span>
          <h3 className="font-display text-lg text-foreground mt-1">{e.title}</h3>
          <p className="font-body text-sm text-muted-foreground">{e.institution}</p>
          <p className="font-body text-sm text-primary/80 font-semibold mt-1">{e.detail}</p>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default EducationSection;
