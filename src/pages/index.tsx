import React from 'react';

import { AddAPhoto, CreditCard } from '@mui/icons-material';
import {
	Box,
	Button,
	FormControl,
	IconButton,
	InputLabel,
	OutlinedInput,
	Select,
	Typography,
} from '@mui/material';

export default function Home() {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: 1,
			}}
		>
			<Typography variant='h1'>Typography</Typography>
			<Typography>Test with Material UI theme.</Typography>
			<Box
				sx={{
					maxWidth: '300px',
				}}
			>
				<FormControl fullWidth>
					<InputLabel shrink>Outlined input</InputLabel>
					<OutlinedInput
						size='small'
						fullWidth
						placeholder='Outlined Input'
						endAdornment={<AddAPhoto />}
					/>
				</FormControl>
			</Box>
			<Box
				sx={{
					maxWidth: '300px',
				}}
			>
				<FormControl fullWidth>
					<InputLabel shrink>Outlined input</InputLabel>
					<OutlinedInput
						fullWidth
						placeholder='Outlined Input'
						endAdornment={<CreditCard />}
					/>
				</FormControl>
			</Box>
			<Box
				sx={{
					maxWidth: '300px',
				}}
			>
				<FormControl fullWidth>
					<InputLabel shrink>Outlined input</InputLabel>
					<OutlinedInput
						fullWidth
						placeholder='Outlined Input'
						endAdornment={
							<IconButton>
								<AddAPhoto />
							</IconButton>
						}
					/>
				</FormControl>
			</Box>
			<Box
				sx={{
					maxWidth: '300px',
				}}
			>
				<FormControl fullWidth>
					<InputLabel shrink>Text field area</InputLabel>
					<OutlinedInput
						fullWidth
						multiline
						rows={3}
						minRows={3}
						placeholder='Text field area'
					/>
				</FormControl>
			</Box>
			<Box
				sx={{
					maxWidth: '300px',
				}}
			>
				<FormControl fullWidth>
					<InputLabel shrink>Text field area</InputLabel>
					<Select fullWidth placeholder='Select' />
				</FormControl>
			</Box>
			<Box>
				<Button>Button</Button>
			</Box>
			<Box>
				<Button>Button</Button>
			</Box>
			<Box>
				<Button variant='outlined'>Button</Button>
			</Box>
			<Box>
				<Button variant='text'>Button</Button>
			</Box>
		</Box>
	);
}
