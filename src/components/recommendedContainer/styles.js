import styled from 'styled-components'

export const Container = styled.div`
	height: 100%;
	width: 100%;
	background: ${props => props.theme.background};
	padding: 0px 25px;
	padding-top: 65px;
	flex-direction: column;

	> h1{
		font-weight: 800;
		line-height: 3.8rem;
		text-align: center;
		font-size: 4rem;
		position: relative;
		color: ${props => props.theme.text}
		
	}

	#subtitle {
		color: ${props => props.theme.text}
	}

	> .recommended-container {
		height: inherit;
		position: relative;
		pointer-events: all;
		justify-content: flex-start !important;
		width: 100%;
		overflow: hidden;
		padding: 10px 10px;
		scroll-behavior: smooth;


		#next, #prev{
			background: ${props => props.theme.text};
			opacity: 0.8;
			height: 30px;
			width: 30px;
			border-radius: 50%;
			transition: 0.5s ease;
			position: fixed;
			cursor: pointer;
			z-index: 999999;

			* {
				color: ${props => props.theme.background};
			}
		}

		#next{
			right: 15px;
		}

		#prev{
			left: 15px;
		}
	}

	@media screen and (max-width: 590px){
		> h1{
			font-size: 3.7rem;
		}

		> .recommended-container{
			margin-top: 13px;
		}

		.grid-card{
			min-width: 100%;
			margin-top: 20px;
			margin-bottom: 20px;
		}
	}
`