import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages 메인 사이트(username.github.io) 사용 시 site만 지정, base는 비워둠
  // 만약 username.github.io/portfolio 형태면 base: '/portfolio' 로 변경
  site: 'https://ahntaekok.github.io',
  integrations: [tailwind({ applyBaseStyles: false })],
  output: 'static',
  compressHTML: true,
});
