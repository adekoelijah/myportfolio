import './portfolio.css'
import Img1 from '../../image/portfolio1.jpg'
import Img2 from '../../image/portfolio2.jpg'
import Img3 from '../../image/portfolio3.jpg'
import Img4 from '../../image/portfolio4.jpg'
import Img5 from '../../image/portfolio5.png'
import Img6 from '../../image/portfolio6.jpg'

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
          <h3>Crypto currency & Financial visualization</h3>
          <div className="portfolio__item-cta">
             <a href="https://github.com" className='btn' target='_blank' rel='noreferrer noopener'>Github</a>
             <a href="https://github.com" className='btn btn-primary' target='_blank' rel='noreferrer noopener'>Live demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Img2} alt="" />
          </div>
          <h3>Chart template and infographics to figma</h3>
          <div className="portfolio__item-cta">
             <a href="https://github.com" className='btn' target='_blank' rel='noreferrer noopener'>Github</a>
             <a href="https://github.com" className='btn btn-primary' target='_blank' rel='noreferrer noopener'>Live demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Img3} alt="" />
          </div>
          <h3>Figma dashboard UI kit for data design web app</h3>
          <div className="portfolio__item-cta">
             <a href="https://github.com" className='btn' target='_blank' rel='noreferrer noopener'>Github</a>
             <a href="https://github.com" className='btn btn-primary' target='_blank' rel='noreferrer noopener'>Live demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Img4} alt="" />
          </div>
          <h3>maintaining tasks and tracking progress</h3>
          <div className="portfolio__item-cta">
             <a href="https://github.com" className='btn' target='_blank' rel='noreferrer noopener'>Github</a>
             <a href="https://github.com" className='btn btn-primary' target='_blank' rel='noreferrer noopener'>Live demo</a>
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
        
      </div>
    </section>
  )
}

export default Portfolio