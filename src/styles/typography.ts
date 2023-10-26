import type { ThemeOptions } from '@mui/material';

export type ThemeTypography = Partial<ThemeOptions['typography']>;

export const typography: ThemeTypography = {
	letterSpacing: '0em',
	fontWeight: 400,
	htmlFontSize: 14,
	fontFamily:
		"-apple-system, BlinkMacSystemFont, 'Segoe UI', Ubuntu, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
	h1: {
		fontWeight: 700,
		fontSize: '2.5rem',
		letterSpacing: '0em',
	},
	h2: {
		fontWeight: 700,
		fontSize: '2rem',
		letterSpacing: '0em',
	},
	h3: {
		fontWeight: 500,
		fontSize: '1.3rem',
		letterSpacing: '0em',
	},
	h4: {
		fontWeight: 500,
		fontSize: '1.3rem',
		letterSpacing: '0em',
	},
	h5: {
		fontWeight: 500,
		fontSize: '1rem',
		letterSpacing: '0em',
	},
	h6: {
		fontWeight: 500,
		fontSize: '0.875rem',
		letterSpacing: '0em',
	},
	subtitle1: {
		fontSize: '0.875rem',
		letterSpacing: '0em',
	},
	subtitle2: {
		fontSize: '0.875rem',
		letterSpacing: '0em',
	},
	body1: {
		fontSize: '0.875rem',
		letterSpacing: '0em',
	},
	body2: {
		fontSize: '0.875rem',
		letterSpacing: '0em',
	},
	button: {
		fontWeight: 500,
		fontSize: '0.875rem',
		textTransform: 'none',
		letterSpacing: '0em',
	},
	caption: {
		fontSize: '0.75rem',
		letterSpacing: '0em',
	},
	overline: {
		fontSize: '0.75rem',
		letterSpacing: '0em',
	},
};
