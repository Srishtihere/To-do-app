import { Typography, Container } from '@mui/material'
import React from 'react'

export const About = () => {
  return (
    <>
    <Container sx={{mt:6}}>
    <Typography variant='h3' component='h3' sx={{mt:4}}>
      ABOUT
    </Typography>
    <Typography sx={{mt:3}} align='start'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Typography>
    <Typography variant='h5' sx={{mt:4}} align='start'>
      History
    </Typography>
    <Typography sx={{mt:3}} align='start'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Typography>
    </Container>
    </>
  )
}
