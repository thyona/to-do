import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'

export default function Header() {
    const {theme, toggleTheme} = useContext(ThemeContext);
  return (
    <>
        <header>
            <h1>TODO APP</h1>
            <button onClick={toggleTheme}>Toggle {theme === 'Light' ? 'Dark' : 'Light'} Mode</button>
        </header>
    </>
  )
}
