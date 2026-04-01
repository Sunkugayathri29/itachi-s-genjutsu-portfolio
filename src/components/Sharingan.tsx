import { useState } from "react";

const Sharingan = ({ size = 80 }: { size?: number }) => {
  const [activated, setActivated] = useState(false);

  return (
    <div
      className="relative cursor-pointer select-none"
      style={{ width: size, height: size }}
      onClick={() => {
        setActivated(true);
        setTimeout(() => setActivated(false), 3000);
      }}
    >
      {/* Outer ring */}
      <div
        className={`absolute inset-0 rounded-full border-2 border-primary ${activated ? "sharingan-rotate-fast" : "sharingan-rotate"}`}
        style={{
          background: "radial-gradient(circle, hsl(0 100% 20%) 30%, hsl(0 100% 10%) 70%, hsl(0 0% 0%) 100%)",
        }}
      >
        {/* Tomoe */}
        {[0, 120, 240].map((deg) => (
          <div
            key={deg}
            className="absolute"
            style={{
              width: size * 0.15,
              height: size * 0.15,
              background: "hsl(0 0% 3%)",
              borderRadius: "50% 50% 50% 0",
              top: "15%",
              left: "50%",
              transform: `rotate(${deg}deg) translateY(${size * 0.08}px)`,
              transformOrigin: `0 ${size * 0.35}px`,
            }}
          />
        ))}
        {/* Pupil */}
        <div
          className="absolute rounded-full"
          style={{
            width: size * 0.22,
            height: size * 0.22,
            background: "hsl(0 0% 2%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>
      {/* Glow on activation */}
      {activated && (
        <div
          className="absolute inset-0 rounded-full animate-pulse-glow"
          style={{ boxShadow: "0 0 40px hsl(0 100% 30% / 0.8), 0 0 80px hsl(0 100% 20% / 0.4)" }}
        />
      )}
    </div>
  );
};

export default Sharingan;
