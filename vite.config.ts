import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { svelteTesting } from '@testing-library/svelte/vite';
import { defineConfig } from 'vitest/config';

const usePolling = process.env.HOST_OS === 'Windows_NT';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit(), svelteTesting()],
	server: {
		host: '0.0.0.0',
		port: 5173,
		strictPort: false,
		watch: usePolling ? { usePolling: true, interval: 100 } : undefined
	},
	test: {
		environment: 'jsdom',
		setupFiles: ['./vitest.setup.ts'],
		include: ['src/**/*.test.ts', 'tests/unit/**/*.test.ts']
	}
});
