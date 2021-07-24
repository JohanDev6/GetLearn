import styled from 'styled-components'

export const Container = styled.section`
	width: 100%;
	height: 100%;
	padding: 0px 10px;
	flex-direction: column;

	background: ${props => props.theme.background};

	.container{
		width: 100%;
		align-items: flex-start;
		height: 100%;
		padding: 10px 0px;
	}

	.content-title{
		margin-bottom: 20px;
		justify-content: flex-start;
		width: 100%;
		height: 44px;
		border: 1px solid ${props => props.theme.borderInput};
		padding: 40px 0px;

		p{
			margin: 0px 10px;
			color: ${props => props.theme.text}
		}

		h2{
			font-size: 1.9rem;
			color: ${props => props.theme.text}
		}
	}

	.grid-layout{
		width: 100%;
		height: 100%;
		overflow-y: auto;
		padding-bottom: 20px;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: repeat(10, 140px);

		background: transparent;
		grid-gap: 10px;

		::-webkit-scrollbar-track{
			background: ${props => props.theme.background};
			width: 4px;
		}

		::-webkit-scrollbar-thumb{
			width: 4px;
		}

		.grid-card{
			flex-direction: row;
			justify-content: space-between;
			border-width: 0;
			box-shadow: none;
			border: 1px solid ${props => props.theme.borderInput};

			&:hover{
				transform: node
			}

			img{
				height: 100%;
				max-width: 20%;
				border-radius: 0;
			}

			a{
				width: 100%;
				height: 100%;

				display: flex;
				flex-direction: column;
				align-items: flex-start;
				justify-content center;
			}

			.sub-content{
				flex-direction: column;
				width: 20%;
			}
		}
	}

	@media screen and (max-width: 1030px){
		.container{
			flex-direction: column;
		}
	}

	@media screen and (max-width: 820px){
		.content-title{
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
	}
`