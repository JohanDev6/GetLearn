import React from 'react'

import { Container, MenuItem } from './styles.js'
import { BiAtom, BiAbacus, BiShapePolygon, BiMoney, BiChalkboard, BiServer, BiBookOpen } from "react-icons/bi";

const DropDownItem = ({children, icon}) => {
	return(
		<MenuItem className='display-flex' href="">
			<span>{icon}</span>
			{children}
		</MenuItem>
	)
}

export default function DropDownMenu({style}) {

	return (
		<Container style={{...style}} className='menu-categories display-flex'>
			<DropDownItem icon={<BiAtom/>}>Desenvolvimento web</DropDownItem>
			<DropDownItem icon={<BiShapePolygon/>}>Design</DropDownItem>
			<DropDownItem icon={<BiAbacus/>}>Prototype</DropDownItem>
			<DropDownItem icon={<BiMoney/>}>Freelancer</DropDownItem>
			<DropDownItem icon={<BiChalkboard/>}>Machine Learning</DropDownItem>
			<DropDownItem icon={<BiServer/>}>Deep Learning</DropDownItem>
			<DropDownItem icon={<BiBookOpen/>}>English for Devs</DropDownItem>
		</Container>
	)
}