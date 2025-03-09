import { createTheme } from '@mui/material/styles'
import type { Theme as MuiTheme } from '@mui/material/styles'
import type { Theme as EmotionTheme } from '@emotion/react'

export type UniTheme = {
  emotionTheme: EmotionTheme
  muiTheme: MuiTheme
}

export const uniTheme = {
  emotionTheme: {
    namespace: 'Mui',
    breakPoint: {
      xxs: 320,
      xs: 480,
      s: 640,
      sm: 768,
      m: 992,
      l: 1024,
      lg: 1200,
      xl: 1440,
      xxl: 1600,
      xxxl: 1920
    },
    colors: {
      white: '#ffffff',
      black: '#000000',
      primary: '#036F7B'
    }
  },
  muiTheme: createTheme({
    palette: {
      primary: {
        main: '#556cd6'
      },
      secondary: {
        main: '#19857b'
      }
    }
  })
}
