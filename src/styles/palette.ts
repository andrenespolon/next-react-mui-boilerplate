import type { ThemeOptions } from '@mui/material';

export type ThemePalette = Partial<ThemeOptions['palette']>;

export const palette: ThemePalette = {
	mode: 'light',
	primary: {
		dark: '#0747a6',
		main: '#0052cc',
		light: '#0065ff',
		contrastText: '#fff',
	},
	error: {
		main: '#ff5555',
		contrastText: '#fff',
	},
	success: {
		main: '#00875a',
		contrastText: '#fff',
	},
	warning: {
		main: '#ff9800',
		contrastText: '#fff',
	},
	info: {
		main: '#1890ff',
		contrastText: '#fff',
	},
	text: {
		primary: 'rgba(0, 0, 0, 0.8)',
	},
	background: {
		default: '#fff',
		paper: '#fff',
	},
};
