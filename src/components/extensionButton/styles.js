import styled from 'styled-components'

export const Container = styled.button`
	padding: 11px 23px;
	background: ${props => props.theme.text};
	color: ${props => props.theme.background};
	border-radius: 4px;

	*{
		color: ${props => props.theme.background};
	}

	svg{
		margin-right: 9px;
		font-size: 1.3rem;
	}
`