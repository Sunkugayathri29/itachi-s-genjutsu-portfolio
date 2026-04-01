import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

const softSkills = ["Adaptability", "Leadership", "Coordination", "Problem Solving", "Teamwork"];

const interests = [
  { name: "Coding", icon: "💻" },
  { name: "Reading", icon: "📚" },
  { name: "Gaming", icon: "🎮" },
  { name: "Puzzles", icon: "🧩" },
  { name: "Arts", icon: "🎨" },
];

const SoftSkillsAndInterests = () => (
  <SectionWrapper id="interests">
    <SectionTitle>Traits & Interests</SectionTitle>

    {/* Soft Skills */}
    <div className="flex flex-wrap justify-center gap-3 mb-14">
      {softSkills.map((s, i) => (
        <motion.span
          key={s}
          className="px-4 py-2 border border-primary/40 rounded-full font-body text-sm text-foreground/80 glow-hover"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ borderColor: "hsl(0 100% 40%)" }}
        >
          {s}
        </motion.span>
      ))}
    </div>

    {/* Interests */}
    <div className="flex flex-wrap justify-center gap-6">
      {interests.map((item, i) => (
        <motion.div
          key={item.name}
          className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card border border-border glow-hover min-w-[90px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
        >
          <span className="text-2xl">{item.icon}</span>
          <span className="font-body text-xs text-muted-foreground">{item.name}</span>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default SoftSkillsAndInterests;
