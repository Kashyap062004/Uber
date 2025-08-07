import { gsap } from "gsap";
export const slideIn = (el) => {
  gsap.fromTo(el, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" });
};
