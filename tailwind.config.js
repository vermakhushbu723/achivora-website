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

                /* ── Brand palette ────────────────────────────────────────
                   Every surface/ink token is a CSS variable so the whole
                   site repaints for the dark theme without a single
                   `dark:` class in the markup. Values live in index.css. */
                'primary-dark': 'rgb(var(--c-primary-dark) / <alpha-value>)',
                'primary-light': 'rgb(var(--c-primary-light) / <alpha-value>)',

                /* Secondary sky-blue family */
                sky: {
                    DEFAULT: 'rgb(var(--c-sky) / <alpha-value>)',
                    dark: 'rgb(var(--c-sky-dark) / <alpha-value>)',
                    deep: 'rgb(var(--c-sky-deep) / <alpha-value>)',
                    bright: 'rgb(var(--c-sky-bright) / <alpha-value>)'
                },

                /* Backgrounds / Surfaces */
                bg: 'rgb(var(--c-bg) / <alpha-value>)',
                surface: 'rgb(var(--c-surface) / <alpha-value>)',
                'surface-2': 'rgb(var(--c-surface-2) / <alpha-value>)',
                'bg-soft': 'rgb(var(--c-bg-soft) / <alpha-value>)',
                'input-bg': 'rgb(var(--c-input-bg) / <alpha-value>)',
                'tint-blue': 'rgb(var(--c-tint-blue) / <alpha-value>)',
                'tint-blue-2': 'rgb(var(--c-tint-blue-2) / <alpha-value>)',
                'tint-green': 'rgb(var(--c-tint-green) / <alpha-value>)',
                'tint-green-2': 'rgb(var(--c-tint-green-2) / <alpha-value>)',

                /* Text */
                'text-main': 'rgb(var(--c-text-main) / <alpha-value>)',
                'text-body': 'rgb(var(--c-text-body) / <alpha-value>)',
                'text-sub': 'rgb(var(--c-text-sub) / <alpha-value>)',
                'text-hint': 'rgb(var(--c-text-hint) / <alpha-value>)',

                /* Status / Tag */
                'job-tag-bg': 'rgb(var(--c-job-tag-bg) / <alpha-value>)',
                'job-tag-txt': 'rgb(var(--c-job-tag-txt) / <alpha-value>)',
                'remote-bg': 'rgb(var(--c-remote-bg) / <alpha-value>)',
                'remote-txt': 'rgb(var(--c-remote-txt) / <alpha-value>)',
                'urgent-bg': 'rgb(var(--c-urgent-bg) / <alpha-value>)',
                'urgent-txt': 'rgb(var(--c-urgent-txt) / <alpha-value>)',
                'course-clr': 'rgb(var(--c-course-clr) / <alpha-value>)',
                'course-bg': 'rgb(var(--c-course-bg) / <alpha-value>)',

                /* Semantic */
                success: 'rgb(var(--c-success) / <alpha-value>)',
                error: 'rgb(var(--c-error) / <alpha-value>)',
                warning: 'rgb(var(--c-warning) / <alpha-value>)',
                info: 'rgb(var(--c-sky) / <alpha-value>)'
            },
            fontFamily: {
                sans: ['"Mulish"', '"Segoe UI"', 'system-ui', 'sans-serif']
            },
            backgroundImage: {
                'primary-gradient': 'linear-gradient(90deg, rgb(var(--c-primary)) 0%, rgb(var(--c-primary-dark)) 100%)',
                'hero-gradient': 'linear-gradient(135deg, rgb(var(--c-hero-a)) 0%, rgb(var(--c-hero-b)) 55%, rgb(var(--c-hero-c)) 100%)',
                'sky-gradient': 'linear-gradient(135deg, rgb(var(--c-sky-dark)) 0%, rgb(var(--c-sky)) 100%)',
                'dark-gradient': 'linear-gradient(135deg, #1b1d21 0%, #1e1d28 100%)'
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            boxShadow: {
                xs: '0 1px 2px 0 rgba(0,0,0,0.05)',
                card: 'var(--shadow-card)',
                'card-hover': 'var(--shadow-card-hover)',
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
