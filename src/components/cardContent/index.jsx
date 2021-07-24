import React, { useState } from 'react'

import { Container } from './styles.js'
import { Link } from 'react-router-dom'

import { RiStarLine, RiStarSFill } from "react-icons/ri";

export default function CardContent({img, title, desc, link, isRecommended, className, price, note}) {

	const [favIcon, setFavIcon] = useState(false)

	return (
			<Container recommended={isRecommended? true : false} className={className + ' display-flex'}>
				<img src={img} alt="content-img" />
				<Link to={{pathname: link}} target={'_blank'}>
					<div className='card-content display-flex'>
						<h1>{title}</h1>
						<p>{desc}</p>
					</div>
				</Link>
				<div className='sub-content display-flex'>
					<span>{price}</span>
					<div className='price-content display-flex'>
						<p>{note}</p>
						<i onClick={() => {setFavIcon(!favIcon)}}>
							{favIcon? <RiStarSFill/> : <RiStarLine/>}
						</i>
					</div>
				</div>
			</Container>
	)
}