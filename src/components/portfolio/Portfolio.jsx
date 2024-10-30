import './portfolio.css'
import Img1 from '../../image/port9.png'
import Img2 from '../../image/port10.png'
import Img3 from '../../image/port11.png'
import Img4 from '../../image/port12.png'
import Img5 from '../../image/portfolio5.png'
import Img6 from '../../image/portfolio6.jpg'
import Img7 from '../../image/avt6.png'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent Work</h5>
      <h2>My Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Img1} alt="" />
          </div>
          <h3>React Training website</h3>
          <div className="portfolio__item-cta">
             <a href="https://github.com/adekoelijah/react-trainings" className='btn' target='_blank' rel='noreferrer noopener'>Github</a>
             <a href="https://adekoelijah.github.io/" className='btn btn-primary' target='_blank' rel='noreferrer noopener'>Live demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Img2} alt="" />
          </div>
          <h3>Text to voice converter website</h3>
          <div className="portfolio__item-cta">
             <a href="https://github.com/adekoelijah/speech-app" className='btn' target='_blank' rel='noreferrer noopener'>Github</a>
             <a href="https://adekoelijah.github.io/speech-app/" className='btn btn-primary' target='_blank' rel='noreferrer noopener'>Live demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Img3} alt="" />
          </div>
          <h3>Portfolio website with React</h3>
          <div className="portfolio__item-cta">
             <a href="https://github.com/adekoelijah/myportfolio" className='btn' target='_blank' rel='noreferrer noopener'>Github</a>
             <a href="https://adekoelijah.github.io/myportfolio/" className='btn btn-primary' target='_blank' rel='noreferrer noopener'>Live demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Img4} alt="" />
          </div>
          <h3>Aminated portfolio website design with Reactjs and some other tools</h3>
          <div className="portfolio__item-cta">
             <a href="https://github.com/adekoelijah/animated-portfolio" className='btn' target='_blank' rel='noreferrer noopener'>Github</a>
             <a href="https://animated-portfolio-pi.vercel.app/" className='btn btn-primary' target='_blank' rel='noreferrer noopener'>Live demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Img5} alt="" />
          </div>
          <h3>Infographics Chart template design</h3>
          <div className="portfolio__item-cta">
             <a href="https://github.com" className='btn ' target='_blank' rel='noreferrer noopener'>Github</a>
             <a href="https://github.com" className='btn btn-primary' target='_blank'rel='noreferrer noopener'>Live demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Img6} alt="" />
          </div>
          <h3>Figma dashboard design</h3>
          <div className="portfolio__item-cta">
             <a href="https://github.com" className='btn' target='_blank' rel='noreferrer noopener'>Github</a>
             <a href="https://github.com" className='btn btn-primary' target='_blank' rel='noreferrer noopener'>Live demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Img7} alt="" />
          </div>
          <h3>Blog App</h3>
          <div className="portfolio__item-cta">
             <a href="https://github.com/adekoelijah/school_blog" className='btn' target='_blank' rel='noreferrer noopener'>Github</a>
             <a href="https://adekoelijah.github.io/school_blog/" className='btn btn-primary' target='_blank' rel='noreferrer noopener'>Live demo</a>
          </div>
        </article>
        
      </div>
    </section>
  )
}

export default Portfolio