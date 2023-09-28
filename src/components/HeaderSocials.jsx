import React from 'react'
import {FaLinkedinIn} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'
import {BiLogoFacebook} from 'react-icons/bi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https:linkedin.com" target='_blank' rel='noreferrer noopener'><FaLinkedinIn/></a>
        <a href="https:github.com" target='_blank' rel='noreferrer noopener'><AiFillGithub/></a>
        <a href="https: facebook.com" target='_blank' rel='noreferrer noopener'><BiLogoFacebook/></a>
    </div>
  )
}

export default HeaderSocials