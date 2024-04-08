'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { Theme } from '../Datatypes/types'
import { IThemeContext, IThemeProviderProps } from '../Datatypes/interfaces'

const ThemeContext = createContext<IThemeContext | null>(null)

export const ThemeProvider: React.FC<IThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme | null>(null)

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