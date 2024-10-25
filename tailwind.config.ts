import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'stats-background': "url('/images/stats_bg.png')",
        'rosana-palestrando': "url('/images/imagem_rosana_palestrando.jpg')"
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        lora: ["Lora", "serif"]
      },
      colors: {
        // primary colors
        'primary-50': '#eaecee',
        'primary-100': '#bec3c9',
        'primary-200': '#9ea6af',
        'primary-300': '#727e8a',
        'primary-400': '#566573',
        'primary-500': '#2c3e50',
        'primary-600': '#283849',
        'primary-700': '#1f2c39',
        'primary-800': '#18222c',
        'primary-900': '#121a22',
        // secondary colors
        'secondary-50': '#f2eaf2',
        'secondary-100': '#d8bdd7',
        'secondary-200': '#c59dc3',
        'secondary-300': '#aa70a8',
        'secondary-400': '#995497',
        'secondary-500': '#80297d',
        'secondary-600': '#742572',
        'secondary-700': '#5b1d59',
        'secondary-800': '#461745',
        'secondary-900': '#361135',
        // other colors
        'golden': '#DDBA00'
      },
    },
  },
  plugins: [],
};
export default config;
