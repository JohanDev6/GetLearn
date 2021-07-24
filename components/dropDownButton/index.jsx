import React, {useState, useEffect} from 'react'
import DropDownMenu from '../dropDownMenu/index'
import { RiArrowDropDownLine } from "react-icons/ri";
import { useTransition } from 'react-spring'

import { Container } from './styles'

export default function DropwDownButton() {

	const [open, setOpen] = useState(false);

	const transition = useTransition(open, {
		from: { y: -110},
		enter: { y: 64},
		leave: { y: -110},
	})

	useEffect(() => {
	  window.addEventListener("scroll", () => {
	  	setOpen(false)
	  });

	  return () => {
	      window.removeEventListener("scroll", () => {
	  		setOpen(false)
	      });
	  };
	}, []);

	return (
		<Container onClick={() => setOpen(!open)} className='display-flex'>
			Categorias
			<RiArrowDropDownLine/>

			{transition((style, item) => item ? <DropDownMenu style={style}/> : '')}
		</Container>
	)
}