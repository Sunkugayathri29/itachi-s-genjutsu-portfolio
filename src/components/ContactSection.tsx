import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const contacts = [
  { icon: Phone, label: "Phone", value: "+91 XXXXXXXXXX", href: "tel:+91XXXXXXXXXX" },
  { icon: Mail, label: "Email", value: "gayathri@email.com", href: "mailto:gayathri@email.com" },
  { icon: Linkedin, label: "LinkedIn", value: "LinkedIn Profile", href: "https://linkedin.com" },
  { icon: Github, label: "GitHub", value: "GitHub Profile", href: "https://github.com" },
];

const ContactSection = () => (
  <SectionWrapper id="contact" className="akatsuki-bg">
    <SectionTitle>Contact — Send a Crow</SectionTitle>
    <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
      {contacts.map((c, i) => (
        <motion.a
          key={c.label}
          href={c.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg glow-hover group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
        >
          <c.icon className="w-5 h-5 text-primary group-hover:text-crimson-glow transition-colors" />
          <div>
            <p className="font-body text-xs text-muted-foreground">{c.label}</p>
            <p className="font-body text-sm text-foreground/80">{c.value}</p>
          </div>
        </motion.a>
      ))}
    </div>

    <p className="text-center font-body text-xs text-muted-foreground mt-16">
      &copy; 2025 Sunku Gayathri — Designed in the shadows.
    </p>
  </SectionWrapper>
);

export default ContactSection;
