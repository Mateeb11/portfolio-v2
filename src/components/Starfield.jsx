import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const options = {
  fpsLimit: 60,
  background: { color: "transparent" },
  fullScreen: { enable: false },
  detectRetina: true,
  particles: {
    number: { value: 160, density: { enable: true, area: 900 } },
    color: { value: ["#ffffff", "#cfe7ff", "#8aebff", "#ffd84d"] },
    shape: { type: "circle" },
    opacity: {
      value: { min: 0.2, max: 0.9 },
      animation: { enable: true, speed: 0.6, sync: false, startValue: "random" },
    },
    size: {
      value: { min: 0.4, max: 1.8 },
      animation: { enable: true, speed: 1.4, sync: false, startValue: "random" },
    },
    move: { enable: true, speed: 0.18, direction: "none", random: true, straight: false, outModes: { default: "out" } },
    twinkle: { particles: { enable: true, frequency: 0.04, opacity: 1, color: { value: "#8aebff" } } },
  },
  emitters: [
    {
      direction: "top-right",
      rate: { delay: 6, quantity: 1 },
      position: { x: 0, y: 100 },
      particles: {
        shape: { type: "line" },
        color: { value: "#8aebff" },
        opacity: { value: 0.85 },
        size: { value: { min: 1, max: 2 } },
        move: { enable: true, speed: 22, straight: true, outModes: { default: "destroy" } },
        life: { duration: { value: 1.6 }, count: 1 },
        stroke: { color: { value: "#8aebff" }, width: 1.2 },
      },
    },
  ],
};

export default function Starfield() {
  const init = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return null;
  return <Particles id="tsparticles" init={init} options={options} />;
}
