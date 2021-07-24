import React, {useState} from 'react'
import { Container, Input, InputWrapper, ButtonsWrapper, MenuButton } from './styles'

import ThemeSwitcher from '../themeSwitcher/index'
import SideMenu from '../sideMenu/index'
import DropDownButton from '../dropDownButton/index'
import ExtensionButton from '../extensionButton/index' 

import { useTransition } from 'react-spring'
import { BiSearch } from "react-icons/bi";

export default function NavigationBar() {

	const [openMenu, setOpenMenu] = useState(false)

	const transition = useTransition(openMenu, {
		from: { x: '-80vw'},
		enter: { x: '0vw'},
		leave: { x: '-80vw'},
	})

	return (
		<Container className='display-flex'>
		
			<a href="/">
				<strong>GetLearn</strong>
			</a>

			<InputWrapper className='display-flex'>
				<BiSearch/>
				<Input placeholder='Oque você quer aprender?' type="text" />
			</InputWrapper>

			<ButtonsWrapper className='display-flex'>
				<ThemeSwitcher/>
				<DropDownButton/>
				<ExtensionButton/>
			</ButtonsWrapper>

			<MenuButton onClick={() => {setOpenMenu(!openMenu)}} className={`${openMenu? 'open': ''} display-flex`}>
				<div></div>
			</MenuButton>

			{transition((style, item) => item ? <SideMenu style={style}/> : '')}

		</Container>  
	)
}