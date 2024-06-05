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
        "onyx": "hsl(0, 0%, 27%)",
        "eblack":"hsl(0, 0%, 13%)",
        "blueIn":"rgb(2, 86, 176)",
        "blueAc":"rgb(0, 123, 255)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      dropShadow: {
        'custom-xl': '0 0 5px rgba(0, 0, 0, 0.25)', // Example values, adjust as needed
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
export default config;
