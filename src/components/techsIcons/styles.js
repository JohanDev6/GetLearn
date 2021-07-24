import styled from 'styled-components';

export const Container = styled.div`
	font-size: ${props => props.size}px;

	display: flex;
	justify-content: center;
	align-items: center;

	* {
		color: ${props => props.color};
	}
`