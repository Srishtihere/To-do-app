import React from 'react'
import { Container, Stack, TextField, Typography } from '@mui/material'
import Checkbox from '@mui/material/Checkbox';

export const Todo = () => {
	const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
	return (
		<Container maxWidth='xl' sx={{ mt: 5 }}>
			<Typography variant='h3' align='center' sx={{mb:3}}>
				TO-do List
			</Typography>
			<Stack direction='column' spacing={3}>
				<Stack direction='row' spacing={3}>
					<Checkbox {...label} defaultChecked />
					<TextField fullWidth label="Items" id="fullWidth" />
				</Stack>
				<Stack direction='row' spacing={3}>
					<Checkbox {...label} defaultChecked />
					<TextField fullWidth label="Items" id="fullWidth" />
				</Stack>
				<Stack direction='row' spacing={3}>
					<Checkbox {...label} defaultChecked />
					<TextField fullWidth label="Items" id="fullWidth" />
				</Stack>
				<Stack direction='row' spacing={3}>
					<Checkbox {...label} defaultChecked />
					<TextField fullWidth label="Items" id="fullWidth" />
				</Stack>
				<Stack direction='row' spacing={3}>
					<Checkbox {...label} defaultChecked />
					<TextField fullWidth label="Items" id="fullWidth" />
				</Stack>
				<Stack direction='row' spacing={3}>
					<Checkbox {...label} defaultChecked />
					<TextField fullWidth label="Items" id="fullWidth" />
				</Stack>
				<Stack direction='row' spacing={3}>
					<Checkbox {...label} defaultChecked />
					<TextField fullWidth label="Items" id="fullWidth" />
				</Stack>
				<Stack direction='row' spacing={3}>
					<Checkbox {...label} defaultChecked />
					<TextField fullWidth label="Items" id="fullWidth" />
				</Stack>
				<Stack direction='row' spacing={3}>
					<Checkbox {...label} defaultChecked />
					<TextField fullWidth label="Items" id="fullWidth" />
				</Stack>
			</Stack>
		</Container>
	)
}
