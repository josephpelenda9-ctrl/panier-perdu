import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B1220",
        ember: "#C1440E",
      },
    },
  },
  plugins: [],
};
export default config;
