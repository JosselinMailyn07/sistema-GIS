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
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        // Colores base
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        
        // Colores principales según la paleta proporcionada
        primary: {
          DEFAULT: 'hsl(224, 48%, 22%)',  // #1E2B52 - color principal
          foreground: 'hsl(0, 0%, 100%)',  // #ffffff - texto en header
        },
        secondary: {
          DEFAULT: 'hsl(204, 70%, 53%)',  // #3498db - color de botones azules
          foreground: 'hsl(0, 0%, 100%)',
        },
        accent: {
          DEFAULT: 'hsl(28, 93%, 48%)',   // #ef7c08 - color de botones naranja
          foreground: 'hsl(0, 0%, 100%)',
        },
        
        // Colores de estado
        success: {
          DEFAULT: 'hsl(145, 63%, 42%)',  // #27AE60 - indicaciones de éxito
          foreground: 'hsl(0, 0%, 100%)',
        },
        warning: {
          DEFAULT: 'hsl(48, 89%, 50%)',   // #F1c40f - notificaciones advertencia
          foreground: 'hsl(0, 7.70%, 94.90%)',
        },
        destructive: {
          DEFAULT: 'hsl(0, 83%, 47%)',    // rgb(229, 13, 13) - alertas de error
          foreground: 'hsl(0, 0%, 100%)',
        },
        
        // Colores adicionales
        muted: {
          DEFAULT: 'hsl(216, 12%, 84%)',  // #8C939F - texto side menu
          foreground: 'hsl(220, 13%, 46%)',
        },
        
        // Colores para el sidebar
        sidebar: {
          background: 'hsl(0, 0%, 98%)',  // Fondo del sidebar
          foreground: 'hsl(220, 10%, 20%)',
          accent: 'hsl(210, 20%, 96%)',    // hover:bg-blue-50
          border: 'hsl(220, 13%, 91%)',
        },
        
        // Colores para cards y fondos
        card: {
          DEFAULT: 'hsl(0, 0%, 100%)',
          foreground: 'hsl(222.2, 84%, 4.9%)',
        },
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
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;