import { motion } from "framer-motion";
import Sharingan from "./Sharingan";

const HeroSection = () => (
  <section
    id="hero"
    className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden"
  >
    {/* Ambient fog */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="fog-layer absolute w-[200%] h-full opacity-10 bg-gradient-to-r from-transparent via-fog/10 to-transparent top-1/2" />
    </div>

    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="mb-8"
    >
      <Sharingan size={100} />
    </motion.div>

    <motion.h1
      className="font-display text-5xl md:text-7xl font-bold tracking-widest text-foreground"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8 }}
    >
      Sunku Gayathri
    </motion.h1>

    <motion.p
      className="font-body text-lg md:text-xl text-muted-foreground mt-4 tracking-wide"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
    >
      Computer Science Engineering Student
    </motion.p>

    <motion.p
      className="font-body text-sm md:text-base text-primary italic mt-3 max-w-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
    >
      "Walking the path of code and illusion"
    </motion.p>

    <motion.a
      href="#about"
      className="mt-12 px-8 py-3 border border-primary text-primary font-body text-sm tracking-widest uppercase glow-hover rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.4, duration: 0.8 }}
      whileHover={{ scale: 1.05 }}
    >
      Enter the Genjutsu
    </motion.a>

    {/* Scroll indicator */}
    <motion.div
      className="absolute bottom-8 flex flex-col items-center gap-2"
      animate={{ y: [0, 8, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
    >
      <div className="w-px h-8 bg-gradient-to-b from-primary/50 to-transparent" />
    </motion.div>
  </section>
);

export default HeroSection;
