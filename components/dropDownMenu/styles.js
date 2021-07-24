import styled from 'styled-components'
import { animated } from 'react-spring'

export const Container  = styled(animated.div)`
	padding: 15px 50px;
	padding-top: 4px;
	background: ${props => props.theme.background};

	flex-direction: column;
`

export const MenuItem  = styled.a`

	padding: 9px 0px; 
	color: ${props => props.theme.text};

	span{
		margin-right: 20px;
	}
`