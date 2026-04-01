import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

const projects = [
  {
    title: "Web Automation System",
    description: "An intelligent automation tool that streamlines web-based tasks using scripting and browser APIs.",
    tech: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "Student Management System",
    description: "A full-stack application to manage student records, attendance, and grades efficiently.",
    tech: ["Java", "HTML", "CSS"],
  },
  {
    title: "Portfolio Website",
    description: "A dark-themed personal portfolio inspired by the Akatsuki aesthetic, built with React and Tailwind.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
  },
];

const ProjectsSection = () => (
  <SectionWrapper id="projects" className="akatsuki-bg">
    <SectionTitle>Projects — Forbidden Jutsu</SectionTitle>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((p, i) => (
        <motion.div
          key={p.title}
          className="bg-card border border-border rounded-lg p-6 glow-hover"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15, duration: 0.5 }}
        >
          <h3 className="font-display text-lg text-primary mb-3">{p.title}</h3>
          <p className="font-body text-sm text-foreground/60 mb-4 leading-relaxed">{p.description}</p>
          <div className="flex flex-wrap gap-2">
            {p.tech.map((t) => (
              <span key={t} className="text-xs font-body px-2 py-1 rounded-sm bg-secondary text-secondary-foreground">
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default ProjectsSection;
