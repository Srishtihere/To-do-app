import { Container, Stack, Typography } from '@mui/material'
import React from 'react'
import Divider from '@mui/material/Divider';
import { TextField } from '@mui/material';

export const Skincare = () => {
  return (
    <>
      <Container maxWidth='xl' sx={{ mt: 4 }}>
      <Typography variant='h3' align='center' sx={{mb:3}}>
				Skincare Routine
			</Typography>
      <Stack direction='row' spacing={3} justifyContent='center'>
        <Typography variant='h6'>
         NIGHT
         <Container maxWidth='sm' sx={{ mt: 2 }}>
         <Stack direction='column' spacing={3}>
         <TextField id="outlined-basic" label="Face Wash" variant="outlined" />
         <TextField id="outlined-basic" label="Cleanser" variant="outlined" />
         <TextField id="outlined-basic" label="Toner" variant="outlined" />
         <TextField id="outlined-basic" label="Face mist" variant="outlined" />
         <TextField id="outlined-basic" label="Gel" variant="outlined" />
         <TextField id="outlined-basic" label="Serum" variant="outlined" />
         <TextField id="outlined-basic" label="spot treatment" variant="outlined" />
         <TextField id="outlined-basic" label="Night Cream" variant="outlined" />
         </Stack>
         </Container>
        </Typography>
        <Divider orientation="vertical" flexItem />
        <Typography variant='h6'>
         DAY
         <Container maxWidth='sm' sx={{ mt: 2 }}>
         <Stack direction='column' spacing={3}>
         <TextField id="outlined-basic" label="Face Wash" variant="outlined" />
         <TextField id="outlined-basic" label="Cleanser" variant="outlined" />
         <TextField id="outlined-basic" label="Toner" variant="outlined" />
         <TextField id="outlined-basic" label="Face mist" variant="outlined" />
         <TextField id="outlined-basic" label="Gel" variant="outlined" />
         <TextField id="outlined-basic" label="Serum" variant="outlined" />
         <TextField id="outlined-basic" label="spot treatment" variant="outlined" />
         <TextField id="outlined-basic" label="Day Cream" variant="outlined" />
         </Stack>
         </Container>
        </Typography>
      </Stack>
      </Container>
    </>
  )
}
