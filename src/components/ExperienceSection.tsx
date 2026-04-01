import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

const experiences = [
  { year: "2025–26", title: "Event Organizer", desc: "Department of CSE — organizing technical and cultural events." },
  { year: "2024–25", title: "NSS Volunteer", desc: "National Service Scheme — community service and social outreach." },
  { year: "Ongoing", title: "Community Participation", desc: "Active in coding communities, hackathons, and tech meetups." },
];

const ExperienceSection = () => (
  <SectionWrapper id="experience">
    <SectionTitle>Experience — Mission Log</SectionTitle>
    <div className="relative max-w-2xl mx-auto">
      {/* Timeline line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

      {experiences.map((e, i) => (
        <motion.div
          key={e.title}
          className={`relative flex mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
          initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.15 }}
        >
          {/* Dot */}
          <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 mt-1.5 animate-pulse-glow" />

          <div className={`ml-10 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10"}`}>
            <span className="text-xs font-body text-primary tracking-wider">{e.year}</span>
            <h3 className="font-display text-lg text-foreground mt-1">{e.title}</h3>
            <p className="font-body text-sm text-muted-foreground mt-1">{e.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default ExperienceSection;
