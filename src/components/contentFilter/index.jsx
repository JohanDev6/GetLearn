import React, {useRef, useEffect, useState} from 'react'

import { Container, Accordion } from './styles'

const AccordionItem = ({title, ulRef, options}) => {

	const handleOpenAccord = () => {
		if(ulRef.current){
			ulRef.current.classList.toggle('open')
		}
	}

	const [ulHeight, setUlHeight] = useState(54)

	useEffect(() => {
		setUlHeight(ulRef.current.children[0].clientHeight + 40)
	}, [ulHeight, ulRef])

	return(
		<Accordion ref={ulRef} ulHeight={ulHeight} className='open display-flex' onClick={handleOpenAccord}>
			{title}
			<ul className='display-flex'>
				{options.map((value) => <li style={{pointerEvents: 'none'}}>{value}</li>)}
			</ul>
		</Accordion>
	)
}

export default function ContentFilter() {

	const pricesRef = useRef(null)
	const techsRef = useRef(null)
	const typeRef = useRef(null)

	return (
		<Container>
			<AccordionItem title='Preço' ulRef={pricesRef} options={['Gratuito', 'Pago']} />
			<AccordionItem title='Categorias' ulRef={techsRef} options={['Javascript', 'Vue', 'Phyton', 'Php', 'Haskell', 'Html', 'Sass', 'React']} />
			<AccordionItem title='Tipo' ulRef={typeRef} options={['Videos', 'Pdfs', 'Docs', 'Cursos', 'Maratonas']}/>
		</Container>
	)
}