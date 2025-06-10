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
			fontFamily: {
				'sinhala': ['Noto Sans Sinhala', 'sans-serif'],
				'tamil': ['Noto Sans Tamil', 'sans-serif'],
				'inter': ['Inter', 'sans-serif'],
			},
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
				// Luxury color palette
				luxury: {
					black: '#0C0C0C',
					'black-light': '#141414',
					'black-lighter': '#1A1A1A',
					'gray-dark': '#1E1E1E',
					'gray': '#282828',
					'gray-light': '#323232',
					'gray-lighter': '#3C3C3C',
				},
				gold: {
					50: '#FFFEF7',
					100: '#FFFAEB',
					200: '#FFF2CC',
					300: '#FFE699',
					400: '#FFD700',
					500: '#DAA520',
					600: '#B8860B',
					700: '#996F00',
					800: '#7A5800',
					900: '#5C4200',
					950: '#3D2C00',
					DEFAULT: '#FFD700',
					muted: '#B8860B',
					dark: '#996F00',
				},
				silver: {
					50: '#FAFAFA',
					100: '#F5F5F5',
					200: '#E5E5E5',
					300: '#D4D4D4',
					400: '#C0C0C0',
					500: '#A9A9A9',
					600: '#808080',
					700: '#696969',
					800: '#505050',
					900: '#404040',
					950: '#262626',
					DEFAULT: '#C0C0C0',
					muted: '#808080',
					dark: '#696969',
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			boxShadow: {
				'luxury': '0 0 0 1px rgba(255, 215, 0, 0.1), 0 4px 20px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 215, 0, 0.1)',
				'luxury-hover': '0 0 0 1px rgba(255, 215, 0, 0.2), 0 8px 30px rgba(0, 0, 0, 0.6), 0 0 20px rgba(255, 215, 0, 0.05)',
				'gold-glow': '0 0 20px rgba(255, 215, 0, 0.3)',
				'silver-glow': '0 0 20px rgba(192, 192, 192, 0.2)',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in': {
					'0%': {
						transform: 'translateX(-100%)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: '1'
					}
				},
				'glow': {
					'0%': {
						boxShadow: '0 0 20px rgba(255, 215, 0, 0.1)'
					},
					'100%': {
						boxShadow: '0 0 30px rgba(255, 215, 0, 0.2)'
					}
				},
				'shimmer': {
					'0%': {
						transform: 'translateX(-100%)'
					},
					'100%': {
						transform: 'translateX(100%)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-in': 'slide-in 0.5s ease-out',
				'glow': 'glow 2s ease-in-out infinite alternate',
				'shimmer': 'shimmer 2s infinite',
			},
			backdropBlur: {
				xs: '2px',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;