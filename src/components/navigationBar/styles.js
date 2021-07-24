import styled from 'styled-components';

export const Input = styled.input`
	height: 100%;
	width: 100%;

	background: transparent;

	padding-left: 10px;
	font-size: 1.1rem

	:placeholder{
		font-size: 0.9rem;
	}
`

export const InputWrapper = styled.div`
	height: 55px;

	margin: 0px 13px;
	padding: 0px 10px;

	width: 50%;
	border: 1px solid ${props => props.theme.borderInput};

	border-radius: 6px;

	* {
		color: ${props => props.theme.text};
	}

	svg{
		font-size: 1.7rem;
	}
`

export const ButtonsWrapper = styled.ul`
	min-width: 20%;

	height: 100%;
	background: ${props => props.theme.background};

	justify-content: space-around;
`

export const MenuButton = styled.button`
	width: 50px;
	height: 50px;

	display: none !important;
	background: transparent;

	> div{
		width: 35px;
		height: 2px;
		position: relative;

		margin: 0 auto;
		transition: all .5s ease;
		background:${props => props.theme.text};
	}

	> div::before, > div::after{
		content: '';
		width: 35px;
		height: 2px;
		margin: 0 auto;
		background:${props => props.theme.text};

		position: absolute;
		transition: all .5s ease;
		left: 0;
	}

	> div::after{
		transform: translateY(11px)
	}

	> div::before{
		transform: translateY(-11px)
	}

	&.open > div{
		background: transparent;
		transform: translateX(-50px);
	}

	&.open > div::before{
		transform: rotate(45deg) translate(35px, -35px);
	}

	&.open > div::after{
		transform: rotate(-45deg) translate(35px, 35px);
	}
`

export const Container = styled.nav`
	width: 100%;
	height: 65px;
	z-index: 999;

	background: ${props => props.theme.background};

	position: fixed;
	top: 0;

	transition: 0.4s ease;

	// box-shadow: ${props => !props.top? 'rgb(0,0,0, 0.19) 0px 10px 40px 6px, rgb(0,0,0, 0.23) 0px 6px 6px' : ''};

	justify-content: space-between !important;

	padding: 0px 20px;

	strong{
		font-size: 29px !important; 

		color: ${props => props.theme.text} !important;

		border-bottom: 2px solid ${props => props.theme.textMain}; 
	};

	@media screen and (max-width: 1030px){
		${ButtonsWrapper}{
			display: none;
		}
		${MenuButton}{
			display: block !important;
		}
	}

	@media screen and (max-width: 640px){
		${InputWrapper}{
			display: none;
		}
	}
`