import React from 'react'
import { FooterContainer, Text, Email, IconHeart } from './FooterElements'
import { FaHeart } from "react-icons/fa"

const Footer = () => {
  return (
    <FooterContainer>
      <Text>Desenvolvido com
        <em> </em>
        <IconHeart>
          <FaHeart />
        </IconHeart>
        <em> </em>
        por Ya<span style={{color: 'red'}}>Su</span>yuki
      </Text>
      <Email onClick={() => window.location = 'mailto:yasuyukidev@gmail.com'}>
        yasuyukidev@gmail.com
      </Email>
    </FooterContainer>
  )
}

export default Footer