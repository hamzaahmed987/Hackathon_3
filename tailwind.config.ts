import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'light-gray' : "var(--light-gray)",
        'text-primary-gray': "var(--text-primary-gray)",
        'text-secondary-gray': "var(--text-secondary-gray)",
      },

      gridTemplateColumns: {
        // Defines a 30-column grid
        30: 'repeat(30, minmax(0, 1fr))',
      },

    },
  },
  plugins: [],
} satisfies Config;
