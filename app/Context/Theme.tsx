'use client'
import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

interface IThemeContext {
  theme: Theme | undefined,
  toggleTheme: () => void
}

const ThemeContext = createContext<IThemeContext | undefined>(undefined)

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme  | undefined>(undefined)
  
  useEffect(() => {
    let localTheme: Theme;
    if (localStorage.getItem('theme')) {
      localTheme = localStorage.getItem('theme') as Theme
      setTheme(localTheme)
    }
    else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      localTheme = 'dark'
      setTheme(localTheme)
    }
    else {
      localTheme = 'light'
      setTheme(localTheme)
    }
    const htmlElement = document.querySelector('html') as HTMLHtmlElement
    htmlElement.setAttribute('data-theme', localTheme)
  }, [])

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', newTheme)
      const htmlElement = document.querySelector('html') as HTMLHtmlElement
      htmlElement.setAttribute('data-theme', newTheme)
      return newTheme
    })
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  return context;
}