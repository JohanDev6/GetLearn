import styled from 'styled-components'
import { animated } from 'react-spring'

export const Container = styled(animated.div)`
	width: 70vw;
	height: 100vh;

	overflow-y: auto;
	overflow-x: hidden;

	background: ${props => props.theme.background};
	padding: 10px 5px;

	position: fixed;
	left: 0;
	top: 0;
	z-index: 10001;

	box-shadow: 4px 0px 12px 1px rgb(0, 0, 0, 0.4);

	.input-side{
		width: 100%;
		height: 55px;
		margin: 0;

		display: flex !important;
	}

	.buttons-side{
		display: flex !important;
		height: auto;
		justify-content: space-around;
		align-items: center;

		margin: 5px 0px;

		button{
			width: 90%;
		}
	}

	.nav-item[data-main="true"]{
		width: 80%;
	}

	.nav-item{
		margin: 0;
	}
`