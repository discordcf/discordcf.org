import { defineConfig } from 'astro/config';

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import mdx from "@astrojs/mdx";
import { backgroundPrimary, foregroundPrimary, tokens } from './syntax-highlighting-theme';

// https://astro.build/config
export default defineConfig({
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: {
        name: 'Star Gaze',
        type: 'dark',
        settings: tokens,
        bg: backgroundPrimary,
        fg: foregroundPrimary,
      },
    }
  },
  integrations: [react(), image(), tailwind({ config: { applyBaseStyles: false }}), mdx()],
});