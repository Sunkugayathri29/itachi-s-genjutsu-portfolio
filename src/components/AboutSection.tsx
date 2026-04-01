import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

const AboutSection = () => (
  <SectionWrapper id="about" className="akatsuki-bg">
    <SectionTitle>About Me</SectionTitle>
    <div className="max-w-3xl mx-auto space-y-6 text-center">
      <p className="text-foreground/80 font-body text-lg leading-relaxed">
        <span className="text-primary italic">"Those who cannot acknowledge themselves will eventually fail."</span>
      </p>
      <p className="text-foreground/70 font-body text-base leading-relaxed">
        A Computer Science Engineering undergraduate forging strong foundations in{" "}
        <span className="text-primary font-semibold">C</span>,{" "}
        <span className="text-primary font-semibold">Java</span>, and{" "}
        <span className="text-primary font-semibold">Web Technologies</span>.
        Every line of code is a jutsu — crafted with precision, executed with purpose.
      </p>
      <p className="text-foreground/70 font-body text-base leading-relaxed">
        Passionate about building real-world projects and participating in hackathons.
        Like a shinobi honing their craft in the shadows, I work relentlessly to master
        the art of development — always learning, always evolving.
      </p>
    </div>
  </SectionWrapper>
);

export default AboutSection;
