import styled from 'styled-components'
import { animated } from 'react-spring' 

export const Container = styled(animated.header)`
	height: 100vh;
	width: 100%;

	background: ${props => props.theme.background};
	padding: 0px 15px;

	figure{
		width: 54%;
		height: 80vh;

		img{
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	> .header-content{

		width: 46%;
		flex-direction: column;
		padding: 0px 10px;

		h1{
			color: ${props => props.theme.text};
			font-size: 3.5rem;
			font-weight: 900;
			line-height: 3.2rem;
			text-align: center;
		}

		p{
			color: ${props => props.theme.text};
			margin: 10px 0px;
			text-align: center;
			font-size: 1.1rem;
			font-weight: 300;
		}

		button{
			color: ${props => props.theme.background};
			background: ${props => props.theme.textMain};

			padding: 10px 19px;
			width: 80%;
		}
	}

	@media screen and (max-width: 890px){
		flex-direction: column-reverse;

		figure{
			width: 95%;
		}

		.header-content{
			width: 95%;
		}
	}
`