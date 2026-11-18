"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function CarFront() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-13, 13]), { stiffness: 120, damping: 18 });
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [8, -8]), { stiffness: 120, damping: 18 });

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  }

  function resetPointer() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <div className="hero-car-wrap">
      <div className="hero-car-orbit hero-car-orbit-one" />
      <div className="hero-car-orbit hero-car-orbit-two" />
      <motion.div
        className="hero-car-card"
        onPointerMove={handlePointerMove}
        onPointerLeave={resetPointer}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ scale: 1.025 }}
        transition={{ type: "spring", stiffness: 180, damping: 18 }}
      >
        <div className="hero-car-photo" role="img" aria-label="Premium sports car viewed from the front" />
        <div className="hero-car-glow" />
        <div className="hero-car-caption">
          <span>YOUR JOURNEY STARTS HERE</span>
          <span>R / 01</span>
        </div>
      </motion.div>
      <div className="hero-car-hint"><span /> MOVE YOUR CURSOR TO EXPLORE</div>
    </div>
  );
}
