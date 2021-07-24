import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
	
	.display-flex{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	*{
		box-sizing: border-box;
		list-style: none;

		border: 0;
		padding: 0;
		margin: 0;
		outline: none;

		font-family: 'Poppins', sans-serif;

		text-decoration: none;
	}

	body, html{
		background: ${props => props.theme.background}
	}

	::-webkit-scrollbar{
		width: 5px;
		height: 4px;
	}

	::-webkit-scrollbar-thumb{
		background: ${props => props.theme.main};
		border-radius: 2px;
	}

	::-webkit-scrollbar-track{
		background: ${props => props.theme.text};
	}

	.button-theme{
		*{
			color: ${props => props.theme.text};
		}
	}
`