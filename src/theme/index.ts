import { createTheme } from '@mui/material'
import { green, red } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: '#4381c1',
      light: '#79b0f4',
      dark: '#005590',
    },
    error: {
      main: red[400],
      light: red[100],
      dark: red[700],
    },
    success: {
      main: green[500],
      light: green[300],
      dark: green[800],
    },
  },
})

export default theme
