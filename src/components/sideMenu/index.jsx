import React from 'react'
import DropDownMenu from '../dropDownMenu/index'
import ThemeSwitcher from '../themeSwitcher/index'
import ExtensionButton from '../extensionButton/index'
import { BiSearch } from "react-icons/bi";
import {InputWrapper, Input, ButtonsWrapper } from '../navigationBar/styles'

import { Container } from './styles'

export default function SideMenu({style}) {
	return (
		<Container style={{...style}}> 
			<InputWrapper className='input-side display-flex'>
				<BiSearch/>
				<Input placeholder='Oque você quer aprender?' type="text"/>
			</InputWrapper>
			<ButtonsWrapper className='buttons-side'>
				<ExtensionButton/>
				<ThemeSwitcher/>
			</ButtonsWrapper>
			<DropDownMenu/>
		</Container>
	)
}