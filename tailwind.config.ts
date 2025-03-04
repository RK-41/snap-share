import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';
import tailwindScrollbar from 'tailwind-scrollbar';

export default defineConfig({
	plugins: [tailwindcss, tailwindScrollbar],
});
