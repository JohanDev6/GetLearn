import React, {createContext, useState} from 'react'

import { lightTheme } from '../themes'

export const ThemeContext = createContext({});

export const ThemeContextProvider = (props) => {

	const [theme, setTheme] = useState(lightTheme)

	return (
		<ThemeContext.Provider value={{theme, setTheme}}>
			{props.children}
		</ThemeContext.Provider>)
}