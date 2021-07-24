import React, { useContext } from 'react'
import styled from 'styled-components'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import NavigationBar from './components/navigationBar/index'
import Header from './components/header/index'
import RecommendedContainer from './components/recommendedContainer/index'
import ContentContainer from './components/contentContainer/index'
import Footer from './components/footer/index'

import { ThemeContext } from './providers/themeProvider'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from './styles/globalStyles'

const FooterParallax = styled.div`
  width: 100%;
  height: 100%;
  background: ${props => props.theme.main};
`

function App() {

  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <NavigationBar/>
        <Parallax pages={4} style={{ top: '0', left: '0' }}>
          <ParallaxLayer
            offset={0}
            speed={1.4}
          >
            <Header/>
          </ParallaxLayer>
          <ParallaxLayer
            offset={1}
            speed={0.2}
          >
            <RecommendedContainer/>
          </ParallaxLayer>
          <ParallaxLayer
            offset={2}
            speed={0.1}
          >
            <ContentContainer/>
          </ParallaxLayer>
           <ParallaxLayer
            offset={3}
            speed={2.1}
          >
            <FooterParallax/>
          </ParallaxLayer>
          <ParallaxLayer
            offset={3}
            speed={2.1}
            style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end'}}
          >
            <Footer/>
          </ParallaxLayer>
        </Parallax>
    </ThemeProvider>
  )
}

export default App;