import styled from 'styled-components'

export const Container = styled.button`
	padding: 0px 18px;
	color: ${props => props.theme.text};
	background: transparent;

	*{
		color: ${props => props.theme.text}
	}

	svg{
		font-size: 1.1rem;
	}

	.menu-categories{
		position: absolute;
		top: 0;
		z-index: -1
	}
`