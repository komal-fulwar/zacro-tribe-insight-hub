
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1400px',
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        zacro: {
          DEFAULT: '#7F45FB',
          50: '#F4EEFF',
          100: '#E8DDFE',
          200: '#D1BBFD',
          300: '#BA99FC',
          400: '#A377FB',
          500: '#7F45FB',
          600: '#5D12FA',
          700: '#4602D7',
          800: '#3401A2',
          900: '#22016D',
          950: '#190150'
        },
        dark: {
          DEFAULT: '#0A0A19', 
          50: '#F5F6F9',
          100: '#E0E2EB',
          200: '#C1C6D6',
          300: '#A2AAC1',
          400: '#838DAC',
          500: '#657197',
          600: '#50597A',
          700: '#3C435C',
          800: '#282C3D',
          900: '#14161F',
          950: '#0A0A19'
        },
        crypto: {
          blue: '#007BFF',
          green: '#28C76F',
          yellow: '#FF9F43',
          purple: '#7367F0',
          cyan: '#00CFE8',
          pink: '#EA5455',
          orange: '#FF5722'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'fade-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'slide-in-right': {
          '0%': {
            transform: 'translateX(100%)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1'
          }
        },
        'slide-in-left': {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1'
          }
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0)'
          },
          '50%': {
            transform: 'translateY(-10px)'
          }
        },
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 0 rgba(224, 21, 29, 0)'
          },
          '50%': {
            boxShadow: '0 0 20px rgba(224, 21, 29, 0.5)'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.7s ease-in-out',
        'fade-up': 'fade-up 0.7s ease-out',
        'slide-in-right': 'slide-in-right 0.5s ease-out',
        'slide-in-left': 'slide-in-left 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s infinite'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(to bottom, rgba(10, 10, 25, 0.9), rgba(10, 10, 25, 0.8)), url("/lovable-uploads/af438c3c-77c3-4e4d-8122-c86d7859b3cf.png")',
        'crypto-grid': 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Cpath d=\'M0 0 L50 0 L50 50 L0 50 Z\' fill=\'none\' stroke=\'%233D2A90\' stroke-opacity=\'0.2\' stroke-width=\'0.5\'/%3E%3Cpath d=\'M50 0 L100 0 L100 50 L50 50 Z\' fill=\'none\' stroke=\'%233D2A90\' stroke-opacity=\'0.2\' stroke-width=\'0.5\'/%3E%3Cpath d=\'M0 50 L50 50 L50 100 L0 100 Z\' fill=\'none\' stroke=\'%233D2A90\' stroke-opacity=\'0.2\' stroke-width=\'0.5\'/%3E%3Cpath d=\'M50 50 L100 50 L100 100 L50 100 Z\' fill=\'none\' stroke=\'%233D2A90\' stroke-opacity=\'0.2\' stroke-width=\'0.5\'/%3E%3C/svg%3E"), linear-gradient(to bottom, #0A0A19, #0F0F2D)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['SF Pro Display', 'Inter', 'sans-serif'],
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
