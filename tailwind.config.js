import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['index.html', 'src/**/*.{js,ts,jsx,tsx,html,css}'],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '1.5rem',
                lg: '2rem'
            },
            screens: {
                '2xl': '1280px'
            }
        },
        extend: {
            colors: {
                /* ── shadcn token bridge (driven by CSS vars in index.css) ── */
                border: 'oklch(var(--border))',
                input: 'oklch(var(--input))',
                ring: 'oklch(var(--ring) / <alpha-value>)',
                background: 'oklch(var(--background))',
                foreground: 'oklch(var(--foreground))',
                primary: {
                    DEFAULT: 'oklch(var(--primary) / <alpha-value>)',
                    foreground: 'oklch(var(--primary-foreground))',
                    dark: 'oklch(var(--primary-dark) / <alpha-value>)',
                    light: 'oklch(var(--primary-light) / <alpha-value>)'
                },
                secondary: {
                    DEFAULT: 'oklch(var(--secondary) / <alpha-value>)',
                    foreground: 'oklch(var(--secondary-foreground))'
                },
                destructive: {
                    DEFAULT: 'oklch(var(--destructive) / <alpha-value>)',
                    foreground: 'oklch(var(--destructive-foreground))'
                },
                muted: {
                    DEFAULT: 'oklch(var(--muted) / <alpha-value>)',
                    foreground: 'oklch(var(--muted-foreground) / <alpha-value>)'
                },
                accent: {
                    DEFAULT: 'oklch(var(--accent) / <alpha-value>)',
                    foreground: 'oklch(var(--accent-foreground))'
                },
                popover: {
                    DEFAULT: 'oklch(var(--popover))',
                    foreground: 'oklch(var(--popover-foreground))'
                },
                card: {
                    DEFAULT: 'oklch(var(--card))',
                    foreground: 'oklch(var(--card-foreground))'
                },
                button: {
                    default: 'oklch(var(--button-default))',
                    primary: 'oklch(var(--button-primary))',
                    hover: 'oklch(var(--button-hover))'
                },
                chart: {
                    1: 'oklch(var(--chart-1))',
                    2: 'oklch(var(--chart-2))',
                    3: 'oklch(var(--chart-3))',
                    4: 'oklch(var(--chart-4))',
                    5: 'oklch(var(--chart-5))'
                },
                sidebar: {
                    DEFAULT: 'oklch(var(--sidebar))',
                    foreground: 'oklch(var(--sidebar-foreground))',
                    primary: 'oklch(var(--sidebar-primary))',
                    'primary-foreground': 'oklch(var(--sidebar-primary-foreground))',
                    accent: 'oklch(var(--sidebar-accent))',
                    'accent-foreground': 'oklch(var(--sidebar-accent-foreground))',
                    border: 'oklch(var(--sidebar-border))',
                    ring: 'oklch(var(--sidebar-ring))'
                },

                /* ── Invoidea brand palette ───────────────────────────────── */
                'primary-dark': '#1c7a55',
                'primary-light': '#7fd1a4',

                /* Secondary sky-blue family */
                sky: {
                    DEFAULT: '#29abe2',
                    dark: '#0b86c8',
                    deep: '#0c77bd',
                    bright: '#0ba0db'
                },

                /* Backgrounds / Surfaces */
                bg: '#FFFFFF',
                surface: '#FFFFFF',
                'bg-soft': '#f3f3f3',
                'input-bg': '#f7f7f7',
                'tint-blue': '#eefaff',
                'tint-blue-2': '#f1fbff',
                'tint-green': '#e9f9f0',
                'tint-green-2': '#d8f3e5',

                /* Text */
                'text-main': '#1b1d21',
                'text-body': '#4e4e4e',
                'text-sub': '#6d6d6d',
                'text-hint': '#999999',

                /* Status / Tag */
                'job-tag-bg': '#e9f9f0',
                'job-tag-txt': '#2f9e6f',
                'remote-bg': '#eefaff',
                'remote-txt': '#0b86c8',
                'urgent-bg': '#FFEBEB',
                'urgent-txt': '#e63946',
                'course-clr': '#9B59B6',
                'course-bg': '#F5EEFB',

                /* Semantic */
                success: '#22a45d',
                error: '#e63946',
                warning: '#7fd1a4',
                info: '#29abe2'
            },
            fontFamily: {
                sans: ['"Mulish"', '"Segoe UI"', 'system-ui', 'sans-serif']
            },
            backgroundImage: {
                'primary-gradient': 'linear-gradient(90deg, #2f9e6f 0%, #1c7a55 100%)',
                'hero-gradient': 'linear-gradient(135deg, #1b1d21 0%, #0c77bd 55%, #29abe2 100%)',
                'sky-gradient': 'linear-gradient(135deg, #0b86c8 0%, #29abe2 100%)',
                'dark-gradient': 'linear-gradient(135deg, #1b1d21 0%, #1e1d28 100%)'
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            boxShadow: {
                xs: '0 1px 2px 0 rgba(0,0,0,0.05)',
                card: '0 2px 12px rgba(0,0,0,0.07)',
                'card-hover': '0 8px 32px rgba(47,158,111,0.18)',
                cta: '0 4px 20px rgba(47,158,111,0.38)',
                sky: '0 4px 20px rgba(41,171,226,0.32)'
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
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' }
                },
                fadeUp: {
                    from: { opacity: '0', transform: 'translateY(30px)' },
                    to: { opacity: '1', transform: 'translateY(0)' }
                },
                slideIn: {
                    from: { opacity: '0', transform: 'translateX(-20px)' },
                    to: { opacity: '1', transform: 'translateX(0)' }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                float: 'float 3s ease-in-out infinite',
                'fade-up': 'fadeUp 0.6s ease-out forwards',
                'slide-in': 'slideIn 0.5s ease-out forwards'
            }
        }
    },
    plugins: [animate]
};
