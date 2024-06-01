import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "footergray": "hsl(0, 0%, 60%)",
        "silver":"hsl(0, 0%, 47%)",
        "footerblack":"hsl(0, 0%, 13%)",
        "salmon":"#ff91a4",
        "sandyBrown": "hsl(29, 90%, 65%)",
        "bittersweet": "hsl(0, 100%, 70%)",
        "oceanGreen": "hsl(152, 51%, 52%)",
        "davysilver":"hsl(0, 0%, 33%)",
        "cultured": "hsl(0, 0%, 93%)",
        "white": "hsl(0, 100%, 100%)",
        "onyx": "hsl(0, 0%, 27%)"
    },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
