import { createContext, FC, ReactNode, useCallback, useMemo, useState } from "react";
import { ThemeProvider } from "@mui/material";
import { LightTheme, DarkTheme } from "../themes"
import { Box } from "@mui/system";
import { useContext } from "react";


interface IThemeContextData {
  themeName: 'light' | 'dark';
  toogleTheme: () => void;
}

interface IAppThemeProviderProps {
  children: ReactNode
}

const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
}

export const AppThemeProvider: FC<IAppThemeProviderProps> = ({ children }) => {

  const [themeName, setThemeName] = useState<'light' | 'dark'>('light')

  const toogleTheme = useCallback(() => {
    setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light')
  }, [])

  const theme = useMemo(() => {
    if (themeName === 'light') return LightTheme;

    return DarkTheme;
  }, [themeName])

  return (
    <ThemeContext.Provider value={{ themeName, toogleTheme }}>
      <ThemeProvider theme={theme}>
        <Box width={"100vw"} height={"100vh"} bgcolor={theme.palette.background.default}>
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  )

}