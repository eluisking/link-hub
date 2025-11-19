// @ts-check
import { defineConfig } from 'astro/config';
// Importamos Tailwind CSS
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    // Agregando plugin de Vite/Tailwind CSS
    vite: {
        plugins: [tailwindcss()],
    },
});
