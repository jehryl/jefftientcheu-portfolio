// @ts-check
import { defineConfig } from 'astro/config';
//import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

const isVercel = process.env.VERCEL === '1';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  // site: 'https://jehryl.github.io',
  // base: 'jefftientcheu-portfolio',
  // trailingSlash: 'always',

  site: isVercel
    ? "https://jefftientcheu-portfolio.vercel.app/"
    : "https://jehryl.github.io",
  base: isVercel ? "/" : "/jefftientcheu-portfolio/",

  // vite: {
      // plugins: [tailwindcss()],
  // },
});