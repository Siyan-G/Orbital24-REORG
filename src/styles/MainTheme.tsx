import { createTheme } from '@mui/material'
import React from 'react'

const theme = createTheme({
    palette: {
        primary: {
            main: '#e8e4fd'
        },
        secondary: {
            main: '#3878de'
        }
    },
    typography: {
        fontFamily: [
            'Poppins',
            'sans-serif'
        ].join(',')
    }
})

export default theme

// import { createTheme } from '@mui/material/styles';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#FF5733',
//       // light: will be calculated from palette.primary.main,
//       // dark: will be calculated from palette.primary.main,
//       // contrastText: will be calculated to contrast with palette.primary.main
//     },
//     secondary: {
//       main: '#E0C2FF',
//       light: '#F5EBFF',
//       // dark: will be calculated from palette.secondary.main,
//       contrastText: '#47008F',
//     },
//   },
// });
