import React from 'react'

import { Container } from './styles'
import ContentFilter from '../contentFilter/index'
import CardContent from '../cardContent/index'

const mockCard = {
	title: 'Curso Desenvolvimento Web 2021',
	desc:	`Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
			Aperiam nulla, voluptatum eaque odit`,
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOnBSQ8Tj3_fwvq1NNeusAb0suS3qQBAdobA&usqp=CAU',
	link: 'https://www.google.com/search?q=curso+web+moderno',
	price: 'Gratuito',
	note: '89.9'
}

export default function ContentContainer() {
	return (
		<Container className='display-flex'>
			<div className='content-title display-flex'>
				<h2> Pesquisando por "Mais Relevantes" </h2>
				<p>10.000 Results</p>
			</div>
			<div className='container display-flex'>
				<ContentFilter/>
				<div className='grid-layout'>
				 {Array.from({length: 10}).map((_ , index) => {
				 	return <CardContent 
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
			</div>
		</Container>
	
	)
}