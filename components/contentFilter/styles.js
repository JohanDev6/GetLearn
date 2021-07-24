import styled from 'styled-components'

export const Accordion = styled.div`
	width: 300.5px;
	flex-direction: column;
	margin-bottom: 10px;
	min-width: 300.5px;
	background: transparent;
	color: ${props => props.theme.text};
	align-items: flex-start;
	padding-left: 10px;
	font-weight: 500;

	border: 1px solid ${props => props.theme.borderInput};

	height: 54px;
	transition: 0.4s ease;

	ul {
		width: 100%;
		align-items: flex-start;
		transition: 0.6s ease;
		height: 0%;
		pointer-events: all;
	}

	ul li{
		opacity: 0;
		font-weight: 300;
		pointer-events: none;
		transition: 0.1s ease;
	}

	&.open{
		height: ${props => props.ulHeight}px;
	}

	&.open ul{
		height: auto;
		display: block;
	}

	&.open ul > li{
		opacity: 1;
	}
`

export const Container = styled.section`
	width: 30%;
	height: 100%;

	background: transparent;
	color: ${props => props.theme.text};
	margin-right: 10px;

	@media screen and (max-width: 1030px){
		width: 100%;
		height: auto;
		margin-bottom: 20px;

		display: flex;
		justify-content: space-around;
		align-items: center;

		${Accordion}{
			min-width: 250.5px;
			width: 250.5px;
		}
	}

	@media screen and (max-width: 820px){
		flex-direction: column;

		${Accordion}{
			min-width: 100%;
			width: 100%;
		}
	}
`
