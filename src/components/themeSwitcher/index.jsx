import React, {useContext} from 'react'

import { lightTheme, darkTheme } from '../../themes'
import { ThemeContext } from '../../providers/themeProvider'

import { BiSun, BiMoon } from 'react-icons/bi'

export default function ThemeSwitcher() {

	const {theme, setTheme} = useContext(ThemeContext);

	return (
		<span className='button-theme display-flex' style={{fontSize: '1.5rem'}} onClick={() => setTheme((currentTheme) => currentTheme === lightTheme? darkTheme : lightTheme)}>
		 { theme === lightTheme? <BiSun/> : <BiMoon/> }
		</span>
	)
}