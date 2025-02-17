export { default as AnimatedLogoCloud } from "../components/AnimatedLogoCloud.vue";

interface Logo {
  name: string;
  path: string;
}
export interface AnimateLogoCloudProps {
  class?: string;
  title?: string;
  logos?: Logo[];
}