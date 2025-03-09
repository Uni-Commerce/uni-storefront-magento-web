import { FC, ReactNode } from 'react'
import type { Options } from '@emotion/cache'
import createCache from '@emotion/cache'
import type { Theme as EmotionTheme } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import type { Theme } from '@mui/material/styles'
import { ThemeProvider } from '@mui/material/styles'
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter'

import EmotionThemeProvider from './theme'

export interface EmotionRegistryProps {
  children: ReactNode
  cacheOptions?: Partial<Options> & {
    key: string
  }
  muiTheme?: Partial<Theme>
  emotionTheme?: Partial<EmotionTheme>
}

const EmotionRegistry: FC<EmotionRegistryProps> = ({
  children,
  cacheOptions = { key: 'mui' },
  muiTheme = {},
  emotionTheme = {}
}) => {
  const emotionCache = createCache(cacheOptions)

  return (
    <AppCacheProvider emotionCache={emotionCache}>
      <ThemeProvider theme={muiTheme}>
        <EmotionThemeProvider theme={emotionTheme}>
          <CssBaseline />
          {children}
        </EmotionThemeProvider>
      </ThemeProvider>
    </AppCacheProvider>
  )
}

export default EmotionRegistry
