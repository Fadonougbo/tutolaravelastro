// @ts-check
import { defineConfig, sharpImageService } from 'astro/config';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

import node from '@astrojs/node';
import { imageService } from '@unpic/astro/service';
import zeabur from '@zeabur/astro-adapter/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(),react()],
  adapter:zeabur(),
 image:{
  service:imageService({})
 }
});