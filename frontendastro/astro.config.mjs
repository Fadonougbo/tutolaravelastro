// @ts-check
import { defineConfig, sharpImageService } from 'astro/config';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

import node from '@astrojs/node';
import { imageService } from '@unpic/astro/service';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(),react()],
  adapter:node({
    mode: 'middleware'
  }),
 image:{
  service:imageService({})
 }
});