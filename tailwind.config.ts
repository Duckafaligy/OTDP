import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      borderRadius: {
        sm: '2px',
        DEFAULT: '2px',
        md: '2px',
        lg: '2px',
        xl: '2px',
        '2xl': '2px',
        '3xl': '3px',
      },
      colors: {
        ink: {
          50: '#f5f3f7',
          100: '#e8e3ee',
          200: '#cabbd9',
          900: '#0a0610',
          950: '#05030a',
        },
        plum: {
          50: '#faf7ff',
          100: '#f1e9ff',
          200: '#dccaff',
          300: '#bea0ff',
          400: '#9d72ff',
          500: '#7c4dff',
          600: '#6332ee',
          700: '#5021ca',
          800: '#421ca3',
          900: '#371b82',
          950: '#1f0e52',
        },
        amber: {
          400: '#f5b942',
          500: '#e29c1d',
        },
        teal: {
          400: '#2dd4bf',
          500: '#14b8a6',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-fraunces)', 'serif'],
        mono: ['var(--font-jetbrains)', 'ui-monospace', 'monospace'],
        script: ['var(--font-caveat)', 'cursive'],
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        'plum-radial': 'radial-gradient(60% 60% at 50% 0%, rgba(124,77,255,0.35) 0%, rgba(10,6,16,0) 70%)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        shine: {
          '0%': { backgroundPosition: '200% 50%' },
          '100%': { backgroundPosition: '-200% 50%' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        float: 'float 4s ease-in-out infinite',
        shine: 'shine 8s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
