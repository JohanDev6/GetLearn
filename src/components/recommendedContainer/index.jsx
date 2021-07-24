import React, { useRef } from 'react'

import { Container } from './styles.js'
import CardContent from '../cardContent/index'

import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

const mockCard = {
	title: 'Curso Desenvolvimento Web 2021',
	desc:	`Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
			Aperiam nulla, voluptatum.`,
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOnBSQ8Tj3_fwvq1NNeusAb0suS3qQBAdobA&usqp=CAU',
	link: 'https://www.google.com/search?q=curso+web+moderno',
	price: 'Gratuito',
	note: '89.9'
}

export default function RecommendedContainer() {

	const listRef = useRef(null)

	const handleMoveList = async (ev, direction) => {

		if(direction === 0){
			listRef.current.scrollTo({
			    top: 0,
			    left: listRef.current.scrollLeft += 180 ,
			    behavior: 'smooth'
			});
		}else{
			listRef.current.scrollTo({
			    top: 0,
			    left: listRef.current.scrollLeft -= 180,
			    behavior: 'smooth'
			});
		}
	}

	return (
		<Container className='display-flex'>
			<h1>Os melhores conteudos para desenvolvedores</h1>
			<p id='subtitle'>Recomendados pela comunidade</p>
			<div ref={listRef} className='recommended-container display-flex' >
				<div id='next' onClick={(ev) => {handleMoveList(ev, 0)}} className='display-flex'><BiRightArrow/></div>
				<div id='prev' onClick={(ev) => {handleMoveList(ev, 1)}} className='display-flex'><BiLeftArrow/></div>
				{Array.from({length: 10}).map((_ , index) => {
				 	return <CardContent 
				 	isRecommended
				 	className='grid-card' 
				 	img={mockCard.image} 
				 	title={mockCard.title} 
				 	desc={mockCard.desc} 
				 	link={mockCard.link}
				 	price={mockCard.price}
				 	note={mockCard.note}
				 	/>
				 })}
			</div>
		</Container>
	)
}