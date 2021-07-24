import React from 'react'
import { BiExtension } from "react-icons/bi";

import { Container } from './styles'

export default function DropDownButton() {
	return (
		<Container className='display-flex'>
			<BiExtension/>
			Extension
		</Container>
	)
}