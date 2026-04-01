import { motion } from "framer-motion";

const SectionTitle = ({ children }: { children: string }) => (
  <motion.h2
    className="font-display text-3xl md:text-4xl font-bold text-primary mb-10 tracking-wider text-center"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    {children}
    <div className="section-divider mt-4 mx-auto max-w-[200px]" />
  </motion.h2>
);

export default SectionTitle;
