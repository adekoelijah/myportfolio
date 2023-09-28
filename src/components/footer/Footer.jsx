import './footer.css'
import {BiLogoFacebook} from 'react-icons/bi'
import {BiLogoInstagram} from 'react-icons/bi'
import {BsTwitter} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="" className='footer__logo'>ADEKS</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonial">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><BiLogoFacebook/></a>
        <a href="https://instagram.com"><BiLogoInstagram/></a>
        <a href="https://twitter.com"><BsTwitter/></a>
        <a href="https://github.com"><BsGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Adeks Developer , all right reserved</small>
      </div>
    </footer>
  )
}

export default Footer