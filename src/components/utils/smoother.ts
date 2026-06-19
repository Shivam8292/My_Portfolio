import { ScrollSmoother } from "gsap/ScrollSmoother";

export let smoother: ScrollSmoother;

export function setSmoother(instance: ScrollSmoother) {
  smoother = instance;
}
