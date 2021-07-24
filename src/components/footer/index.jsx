import React from 'react'

import { Container } from './styles'

export default function Footer() {
	return (
		<Container className='display-flex'>
			<a href="/" className='display-flex'>
				<strong>GetLearn</strong>
			</a>
			<div className='list-links display-flex'>
				<ul className='display-flex'>
					<li>Recomendados</li>
					<li>Pesquisar</li>
					<li>Extensão</li>
					<li>Home</li>
				</ul>
				<ul className='display-flex'>
					<li>Termos de uso</li>
					<li>Termos de serviço</li>
					<li>Politica de privacidade</li>
					<li>Ajude a indexar</li>
				</ul>
			</div>
		</Container>
	)
}