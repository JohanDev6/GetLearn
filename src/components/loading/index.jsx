import React, { useEffect} from 'react'
import { useHistory } from 'react-router-dom'

import { Container } from './styles'

import TechIcon from '../techsIcons/index'

export default function SplashScreen() {

	let history = useHistory()

	useEffect(() => {
		setTimeout(() => {
			history.push('/app')
		}, 3200)
	}, [history])

	return (
		<Container>
			<TechIcon className='icon-loading' size={44} color='black' iconName='DiReact' />
		</Container>
	)
}