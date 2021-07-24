import styled, {keyframes} from 'styled-components'

const animatedLogo = keyframes`
	0%{
		transform: rotate(0deg) translateY(-32px);
  		opacity: 0;
	}
	100%{
		transform: rotate(180deg) translateY(0px);
  		opacity: 1;
	}
`

const rotateLogo = keyframes`
	0%{
		transform: rotate(180deg) translateY(0px);
	}
	100%{
		transform: rotate(360deg) translateY(0px);
	}
`


export const Container = styled.div`
	width: 100%;
	height: 100vh;

	background: ${props => props.theme.text};

	display: flex;
	justify-content: center;
	align-items: center;

    overflow: hidden;

  	.icon-loading{
  		transform: rotate(0deg) translateY(-32px);
  		opacity: 0;

  		animation:  ${animatedLogo} .8s 2.9s cubic-bezier(.57,.21,.69,1.25) forwards,
  					${rotateLogo} 2s cubic-bezier(.57,.21,.69,1.25) infinite;
  	}
`;