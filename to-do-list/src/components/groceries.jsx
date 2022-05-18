import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Container, Stack, Typography } from '@mui/material';
import { TextField } from '@mui/material';
// import TextareaAutosize from '@mui/base/TextareaAutosize';

export const Groceries = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Container maxWidth='xl' sx={{ mt: 5 }}>
      <Typography variant='h3' align='center' sx={{mb:3}}>
				Groceries list
			</Typography>
        <Stack direction='row' spacing={3}>
          <Typography variant='h6'>
            Specify the type of grocery
            <Container maxWidth='sm' sx={{ mt: 2 }}>
              <Stack direction='column' spacing={3}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl sx={{ m: 1, minWidth: 80 }}>
                    <InputLabel id="demo-simple-select-label">Type</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Age"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Vegetables</MenuItem>
                      <MenuItem value={20}>Diary</MenuItem>
                      <MenuItem value={30}>Poultry</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl sx={{ m: 1, minWidth: 80 }}>
                    <InputLabel id="demo-simple-select-label">Type</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Age"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Vegetables</MenuItem>
                      <MenuItem value={20}>Diary</MenuItem>
                      <MenuItem value={30}>Poultry</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl sx={{ m: 1, minWidth: 80 }}>
                    <InputLabel id="demo-simple-select-label">Type</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Age"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Vegetables</MenuItem>
                      <MenuItem value={20}>Diary</MenuItem>
                      <MenuItem value={30}>Poultry</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Stack>
            </Container>
          </Typography>
          <Typography variant='h6'>
            Specify the list and the details of the items you wish to buy
            <Container maxWidth='sm' sx={{ mt: 3 }}>
            <Stack direction='column' spacing={2}>
            <TextField fullWidth label="Items" id="fullWidth" helperText="Mention items with ','"/>
            <TextField fullWidth label="Items" id="fullWidth" helperText="Mention items with ','"/>
            <TextField fullWidth label="Items" id="fullWidth" helperText="Mention items with ','"/>
            </Stack>
            </Container>
          </Typography>
        </Stack>
      </Container>
    </>
  )
}
