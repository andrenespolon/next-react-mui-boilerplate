import { type ThemeOptions, darken, lighten } from '@mui/material';

export type ThemeComponents = Partial<ThemeOptions['components']>;

export const components: ThemeComponents = {
	MuiButton: {
		defaultProps: {
			variant: 'contained',
			disableElevation: true,
			disableRipple: true,
			size: 'medium',
		},
		styleOverrides: {
			sizeMedium: {
				maxHeight: '32px',
				height: '32px',
			},
			sizeSmall: {
				maxHeight: '28px',
				height: '28px',
			},
			contained: ({ theme }) => ({
				':active': {
					backgroundColor: darken(theme.palette.primary.dark, 0.25),
				},
			}),
			outlined: ({ theme }) => ({
				border: 'none',
				backgroundColor: lighten(theme.palette.primary.dark, 0.95),
				':hover': {
					border: 'none',
					backgroundColor: lighten(theme.palette.primary.dark, 0.9),
				},
				':disabled': {
					border: 'none',
				},
			}),
			root: ({ theme }) => ({
				':active': {
					backgroundColor: lighten(theme.palette.primary.dark, 0.9),
				},
				whiteSpace: 'nowrap',
				fontWeight: 600,
				lineHeight: '1px',
				padding: '6px 12px',
			}),
		},
	},
	MuiIconButton: {
		defaultProps: {
			size: 'medium',
			disableRipple: true,
		},
		styleOverrides: {
			root: ({ theme }) => ({
				borderRadius: theme.shape.borderRadius,
				':active': {
					backgroundColor: lighten(theme.palette.primary.dark, 0.9),
				},
				':hover': {
					backgroundColor: theme.palette.grey[200],
				},
				padding: '4px',
				'& svg': {
					fontSize: '24px',
				},
			}),
			sizeLarge: {
				height: '32px',
				width: '32px',
			},
			sizeMedium: {
				height: '32px',
				width: '32px',
			},
			sizeSmall: {
				height: '28px',
				width: '28px',
			},
		},
	},
	MuiIcon: {
		defaultProps: {
			fontSize: 'inherit',
		},
	},
	MuiFormControl: {
		defaultProps: {
			margin: 'dense',
			size: 'small',
		},
	},
	MuiInputLabel: {
		defaultProps: {
			margin: 'dense',
			color: 'secondary',
			shrink: false,
		},
		styleOverrides: {
			root: ({ theme }) => ({
				color: theme.palette.text.secondary,
				position: 'relative',
				transform: 'none',
				fontSize: '0.725rem',
				fontWeight: 700,
				marginBottom: 2,
			}),
		},
	},
	MuiFormLabel: {
		styleOverrides: {
			root: ({ theme }) => ({
				color: theme.palette.text.secondary,
				'&.Mui-focused': {
					color: theme.palette.text.secondary,
				},
			}),
			asterisk: ({ theme }) => ({
				color: theme.palette.error.main,
			}),
		},
	},
	MuiFormHelperText: {
		defaultProps: {
			margin: 'dense',
		},
		styleOverrides: {
			root: {
				marginLeft: 0,
			},
		},
	},
	MuiTextField: {
		defaultProps: {
			variant: 'outlined',
			size: 'medium',
		},
		styleOverrides: {
			root: {
				padding: '0px',
			},
		},
	},
	MuiOutlinedInput: {
		defaultProps: {
			size: 'medium',
		},
		styleOverrides: {
			root: {
				padding: '0px',
			},
		},
	},
	MuiInputBase: {
		defaultProps: {
			margin: 'dense',
			size: 'medium',
		},
		styleOverrides: {
			multiline: {
				height: 'auto',
				maxHeight: 'auto',
			},
			sizeSmall: {
				height: '32px',
				'& input': {
					padding: '4px 6px',
				},
			},
			root: ({ theme }) => ({
				padding: '0px',
				transition: `background-color 0.2s ease-in-out, border-color 0.2s ease-in-out`,
				backgroundColor: '#fafbfc',
				borderColor: '#dfe1e6',
				borderWidth: '2px',
				borderStyle: 'solid',
				height: '40px',
				verticalAlign: 'middle',
				'& svg': {
					fontSize: '24px',
					margin: '4px',
					color: theme.palette.text.secondary,
				},
				'& fieldset': {
					display: 'none',
				},
				'& input, & textarea': {
					padding: '8px 6px',
				},
				'&:hover:not([data-disabled])': {
					backgroundColor: '#ebecf0',
					borderColor: '#dfe1e6',
				},
				'&:focus-within:not([data-disabled])': {
					backgroundColor: theme.palette.common.white,
					borderColor: theme.palette.info.main,
					boxShadow: theme.palette.info.main,
				},
			}),
		},
	},
	MuiSelect: {
		defaultProps: {
			margin: 'dense',
			size: 'medium',
		},
		styleOverrides: {
			root: ({ theme }) => ({
				padding: '0px',
				transition: `background-color 0.2s ease-in-out, border-color 0.2s ease-in-out`,
				backgroundColor: '#F4F5F7',
				borderColor: '#F4F5F7',
				borderWidth: '2px',
				borderStyle: 'solid',
				height: '40px',
				verticalAlign: 'middle',
				'&:hover:not([data-disabled])': {
					backgroundColor: '#EBECF0',
					borderColor: '#EBECF0',
				},
				'&:focus-within:not([data-disabled])': {
					backgroundColor: theme.palette.common.white,
					borderColor: theme.palette.info.main,
					boxShadow: theme.palette.info.main,
				},
			}),
		},
	},
};
