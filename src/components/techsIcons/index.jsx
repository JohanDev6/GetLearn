import React from 'react'
import * as DevIcon from "react-icons/di";

import { Container } from './styles.js'

export default function IconTech({ iconName, size, color, ...iconProps }) {

  const icon = React.createElement(DevIcon[iconName]);

  return <Container {...iconProps} size={size} color={color}>{icon}</Container>
}