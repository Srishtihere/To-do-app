import React from 'react'
import { Stack, Typography, Container } from '@mui/material'
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

export const School = () => {
      const [value, setValue] = React.useState(null);
      return (
            <>
                  <Container maxWidth='xl' sx={{ mt: 5 }}>
                  <Typography variant='h3' align='center' sx={{mb:3}}>
				School/College/University Routine
			</Typography>
                        <Stack direction='row' spacing={3} >
                              <Typography variant='h6'>
                                    Day/Time
                                    <Container maxWidth='sm' sx={{ mt: 3 }}>
                                          <Stack direction='column' spacing={3} >
                                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                      <TimePicker
                                                            label="period 1"
                                                            value={value}
                                                            onChange={(newValue) => {
                                                                  setValue(newValue);
                                                            }}
                                                            renderInput={(params) => <TextField {...params} />}
                                                      />
                                                </LocalizationProvider>
                                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                      <TimePicker
                                                            label="period 2"
                                                            value={value}
                                                            onChange={(newValue) => {
                                                                  setValue(newValue);
                                                            }}
                                                            renderInput={(params) => <TextField {...params} />}
                                                      />
                                                </LocalizationProvider>
                                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                      <TimePicker
                                                            label="period 3"
                                                            value={value}
                                                            onChange={(newValue) => {
                                                                  setValue(newValue);
                                                            }}
                                                            renderInput={(params) => <TextField {...params} />}
                                                      />
                                                </LocalizationProvider>
                                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                      <TimePicker
                                                            label="period 4"
                                                            value={value}
                                                            onChange={(newValue) => {
                                                                  setValue(newValue);
                                                            }}
                                                            renderInput={(params) => <TextField {...params} />}
                                                      />
                                                </LocalizationProvider>
                                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                      <TimePicker
                                                            label="period 5"
                                                            value={value}
                                                            onChange={(newValue) => {
                                                                  setValue(newValue);
                                                            }}
                                                            renderInput={(params) => <TextField {...params} />}
                                                      />
                                                </LocalizationProvider>
                                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                      <TimePicker
                                                            label="period 6"
                                                            value={value}
                                                            onChange={(newValue) => {
                                                                  setValue(newValue);
                                                            }}
                                                            renderInput={(params) => <TextField {...params} />}
                                                      />
                                                </LocalizationProvider>
                                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                      <TimePicker
                                                            label="period 7"
                                                            value={value}
                                                            onChange={(newValue) => {
                                                                  setValue(newValue);
                                                            }}
                                                            renderInput={(params) => <TextField {...params} />}
                                                      />
                                                </LocalizationProvider>
                                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                      <TimePicker
                                                            label="period 8"
                                                            value={value}
                                                            onChange={(newValue) => {
                                                                  setValue(newValue);
                                                            }}
                                                            renderInput={(params) => <TextField {...params} />}
                                                      />
                                                </LocalizationProvider>
                                          </Stack>
                                    </Container>
                              </Typography>
                              <Typography variant='h6'>
                                    Monday
                                    <Container maxWidth='sm' sx={{ mt: 3 }}>
                                          <Stack direction='column' spacing={3}>
                                          <TextField id="outlined-basic" label="Subject 1" variant="outlined" />
                                          <TextField id="outlined-basic" label="Subject 2" variant="outlined" />
                                          <TextField id="outlined-basic" label="Subject 3" variant="outlined" />
                                          <TextField id="outlined-basic" label="Subject 4" variant="outlined" />
                                          <TextField id="outlined-basic" label="Subject 5" variant="outlined" />
                                          <TextField id="outlined-basic" label="Subject 6" variant="outlined" />
                                          <TextField id="outlined-basic" label="Subject 7" variant="outlined" />
                                          <TextField id="outlined-basic" label="Subject 8" variant="outlined" />
                                          </Stack>
                                    </Container>
                              </Typography>
                              <Typography variant='h6'>
                                    Tuesday
                                    <Container maxWidth='sm' sx={{ mt: 3 }}>
                                          <Stack direction='column' spacing={3}>
                                          <TextField id="outlined-basic" label="Subject 1" variant="outlined" />
                                          <TextField id="outlined-basic" label="Subject 2" variant="outlined" />
                                          <TextField id="outlined-basic" label="Subject 3" variant="outlined" />
                                          <TextField id="outlined-basic" label="Subject 4" variant="outlined" />
                                          <TextField id="outlined-basic" label="Subject 5" variant="outlined" />
                                          <TextField id="outlined-basic" label="Subject 6" variant="outlined" />
                                          <TextField id="outlined-basic" label="Subject 7" variant="outlined" />
                                          <TextField id="outlined-basic" label="Subject 8" variant="outlined" />
                                          </Stack>
                                    </Container>
                              </Typography>
                              <Typography variant='h6'>
                                    Wednesday
                                    <Container maxWidth='sm' sx={{ mt: 3 }}>
                                          <Stack direction='column' spacing={3}>
                                          <TextField id="outlined-basic" label="Subject 1" variant="outlined" />
                                          <TextField id="outlined-basic" label="Subject 2" variant="outlined" />
                                          <TextField id="outlined-basic" label="Subject 3" variant="outlined" />
                                          <TextField id="outlined-basic" label="Subject 4" variant="outlined" />
                                          <TextField id="outlined-basic" label="Subject 5" variant="outlined" />
                                          <TextField id="outlined-basic" label="Subject 6" variant="outlined" />
                                          <TextField id="outlined-basic" label="Subject 7" variant="outlined" />
                                          <TextField id="outlined-basic" label="Subject 8" variant="outlined" />
                                          </Stack>
                                    </Container>
                              </Typography>
                              <Typography variant='h6'>
                                    Thursday
                                    <Container maxWidth='sm' sx={{ mt: 3 }}>
                                          <Stack direction='column' spacing={3}>
                                          <TextField id="outlined-basic" label="Subject 1" variant="outlined" />
                                          <TextField id="outlined-basic" label="Subject 2" variant="outlined" />
                                          <TextField id="outlined-basic" label="Subject 3" variant="outlined" />
                                          <TextField id="outlined-basic" label="Subject 4" variant="outlined" />
                                          <TextField id="outlined-basic" label="Subject 5" variant="outlined" />
                                          <TextField id="outlined-basic" label="Subject 6" variant="outlined" />
                                          <TextField id="outlined-basic" label="Subject 7" variant="outlined" />
                                          <TextField id="outlined-basic" label="Subject 8" variant="outlined" />
                                          </Stack>
                                    </Container>
                              </Typography>
                              <Typography variant='h6'>
                                    Friday
                                    <Container maxWidth='sm' sx={{ mt: 3 }}>
                                          <Stack direction='column' spacing={3}>
                                          <TextField id="outlined-basic" label="Subject 1" variant="outlined" />
                                          <TextField id="outlined-basic" label="Subject 2" variant="outlined" />
                                          <TextField id="outlined-basic" label="Subject 3" variant="outlined" />
                                          <TextField id="outlined-basic" label="Subject 4" variant="outlined" />
                                          <TextField id="outlined-basic" label="Subject 5" variant="outlined" />
                                          <TextField id="outlined-basic" label="Subject 6" variant="outlined" />
                                          <TextField id="outlined-basic" label="Subject 7" variant="outlined" />
                                          <TextField id="outlined-basic" label="Subject 8" variant="outlined" />
                                          </Stack>
                                    </Container>
                              </Typography>
                        </Stack>
                  </Container>

            </>
      )
}
