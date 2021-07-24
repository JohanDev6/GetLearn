import styled from 'styled-components'

export const Container = styled.footer`
	width: 100%;
	background: transparent;
	height: 70%;
	flex-direction: column;

	a{
		width: 20%;
		height: 100%;

		strong{
			font-size: 11rem;
			color: white;

			border-bottom: 2px solid ${props => props.theme.textMain};
		}
	}

	.list-links{
		width: 100%;
		height: 100%;

		ul{
			margin: 0px 10px;
			flex-direction: column;
			li{
				padding: 3px 0px;
				color: white;
			}
		}
	}

	@media screen and (max-width: 930px){
		a > strong{
			font-size: 7.3rem;
		}
	}

	@media screen and (max-width: 540px){
		a > strong{
			font-size: 4rem;
		}
		.list-links{
			flex-direction: column;
		}
	}
`