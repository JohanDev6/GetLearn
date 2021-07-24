import React from 'react'
import { Container } from './styles'
import { Transition, config } from 'react-spring'

export default function Header() {

	return (
	<>
	<Transition items={true} config={config.molasses} native from={{opacity: 0, y: -15}} enter={{opacity: 1, y: 0}} leave={{opacity: 0, y: -15}}>
		{(props) => (
			<Container style={props} className='display-flex'>

				<div className='header-content display-flex'>
					<h1>SEU INDEXADOR DE CONTEUDO</h1>

					<p>
					 Este site é apenas um indexador dos melhores conteudos para desenvolvedores em geral "Focado em conteudo Gratuito".
					</p>

					<button >Recomendados</button>
				</div>
				
				<figure>
					<img src="https://res.cloudinary.com/dbklberci/image/upload/v1626650190/gummy-ux-slash-ui-design_qxwret.png" alt="header-img"/>
				</figure>
	
			</Container>
		)}
	</Transition>
	</>
	)
}