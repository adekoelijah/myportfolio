import './about.css'
import me1 from '../../image/me2.png'
import {FaAward} from 'react-icons/fa'
import {BiUserCircle} from 'react-icons/bi'
import {BiLibrary} from 'react-icons/bi'
import {AiFillCodeSandboxCircle} from 'react-icons/ai'


const About = () => {
  return (
    <section id='about'>
      <h5>Get to know </h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <img src={me1} alt="me2 about" />
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3years + working experience</small>
            </article>
            <article className='about__card'>
              <BiUserCircle className='about__icon'/>
              <h5>Clients</h5>
              <small>300+ world wide</small>
            </article>

            <article className='about__card'>
              <BiLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>80+ completed projects</small>
            </article>

            <article className='about__card'>
              <AiFillCodeSandboxCircle className='about__icon'/>
              <h5>Major Tools</h5>
              <small>HTML, CSS, JS, ReactJs, NextJs, Django</small>
            </article>
            
          </div>
          
          <p>
          I'm a passionate full-stack developer with a strong foundation in both 
          front-end and back-end technologies. 
          I create efficient, scalable, and user-focused digital solutions, 
          combining technical skills with a creative edge to build seamless experiences for end users.
           Whether it’s developing an intuitive front-end 
          interface or architecting the back end for smooth performance,
           my goal is to deliver high-quality software that meets both user needs and industry standards.
          </p>

          <a href="#contact" className='btn btn-primary'> Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About