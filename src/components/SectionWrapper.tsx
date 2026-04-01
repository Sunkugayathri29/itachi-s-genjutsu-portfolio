import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  id?: string;
  className?: string;
}

const SectionWrapper = ({ children, id, className = "" }: Props) => (
  <motion.section
    id={id}
    className={`relative py-20 px-4 md:px-8 ${className}`}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    <div className="max-w-5xl mx-auto">{children}</div>
  </motion.section>
);

export default SectionWrapper;
