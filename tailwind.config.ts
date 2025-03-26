
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
          DEFAULT: '#0C0E15', 
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
          950: '#0A0B10'
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
        'pulse-glow': 'pulse-glow 2s infinite'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(to bottom, rgba(12, 14, 21, 0.9), rgba(12, 14, 21, 0.8)), url("/public/lovable-uploads/c5832dc7-b42a-46b5-a0e7-2004ec586cfc.png")',
        'crypto-grid': 'linear-gradient(rgba(12, 14, 21, 0.97), rgba(12, 14, 21, 0.97)), url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%237F45FB\' fill-opacity=\'0.05\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2v40H40V0zm0 38h40v2H40v-2z\'/%3E%3C/g%3E%3C/svg%3E")',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['SF Pro Display', 'Inter', 'sans-serif'],
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
