import './services.css'
import {BsFillCheckCircleFill} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <container className="services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>
{/* begining of web development */}
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Email marketing</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>
       {/*  end of ui/ux */}
      </container>
    </section>
  )
}

export default Services