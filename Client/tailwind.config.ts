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
        "btnpurple":"rgb(79, 70, 229)",
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"},
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      dropShadow: {
        'custom-xl': '0 0 5px rgba(0, 0, 0, 0.25)', // Example values, adjust as needed
      },
      fontFamily: {
      'body': [
      'Inter', 
      'ui-sans-serif', 
      'system-ui', 
      '-apple-system', 
      'system-ui', 
      'Segoe UI', 
      'Roboto', 
      'Helvetica Neue', 
      'Arial', 
      'Noto Sans', 
      'sans-serif', 
      'Apple Color Emoji', 
      'Segoe UI Emoji', 
      'Segoe UI Symbol', 
      'Noto Color Emoji'
    ],
        'sans': [
      'Inter', 
      'ui-sans-serif', 
      'system-ui', 
      '-apple-system', 
      'system-ui', 
      'Segoe UI', 
      'Roboto', 
      'Helvetica Neue', 
      'Arial', 
      'Noto Sans', 
      'sans-serif', 
      'Apple Color Emoji', 
      'Segoe UI Emoji', 
      'Segoe UI Symbol', 
      'Noto Color Emoji'
    ]
      }
    },
  },
  darkMode: "class",
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
  
};
export default config;
