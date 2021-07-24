import styled from 'styled-components'

export const Container = styled.div`
	background: ${props => props.theme.background}; 
	min-width: 250px;

	border-radius: 7px;
	z-index: 1;
	flex-direction: column;
	align-items: flex-start;
	pointer-events: all;

	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	transition: 0.5s ease-in-out;
	margin: 0px 5px;

	border-bottom: 1px solid ${props => props.recommended? 'goldenrod' : 'transparent'};

	:hover{

		border-width: 4px;
		transform: translateY(-20px);
		box-shadow: rgb(0, 0, 0, 0.35) 0px 8px 13px 0px;

		img{
			border-bottom-left-radius: 8px;
			border-bottom-right-radius: 8px;
			zoom: 1.1;
		}
	}

	img{
		width: 100%;
		object-fit: cover;
		border-radius: 4px;
		border-bottom-left-radius: 16px;
		border-bottom-right-radius: 16px;
		transition: 0.5s ease;
	}

	.card-content{

		flex-direction: column;
		align-items: flex-start;
		padding: 0px 10px;
		margin: 10px 0px;

		p{
			font-size: 0.8rem;
			color: ${props => props.theme.text};
			opacity: 0.8;
			line-height: 0.8rem;
		}

		h1{	
			margin: 11px 0px;
			font-size: 1.5rem;
			line-height: 1.4rem;
			font-weight: 700;
			color: ${props => props.theme.text};
		}
	}

	.sub-content{
		padding: 0px 10px;
		width: 100%;
		justify-content: space-between;

		margin-bottom: 10px;

		p{
			font-size: 0.8rem;
			color: goldenrod
		}

		svg{
			font-size: 0.8rem;
			color: goldenrod
		}

		span{
			font-size: 1rem;
			color: ${props => props.theme.text};
			font-weight: 400;
		}
	}
`