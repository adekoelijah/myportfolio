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
              <p>User-Centered Design.</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Intuitive Navigation.</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Responsiveness.</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Minimalist Aesthetics.</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Feedback and Clarity.</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Accessibility.</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Consistency.</p>
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
              <p>Mobile-First Approach.</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Fast Load Times:.</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Clean and Semantic Code.</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>SEO Best Practices.</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Cross-Browser Compatibility.</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Scalability.</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Protect user data and site functionality by following best practices in web security, 
                such as HTTPS, secure authentication, and data validation..</p>
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
              <p>Clear Call-to-Action (CTA).</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Personalization.</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Segmentation.</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Compelling Subject Lines.</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Mobile Optimization.</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Consistent Branding.</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Performance Tracking.</p>
            </li>
          </ul>
        </article>
       {/*  end of ui/ux */}
      </container>
    </section>
  )
}

export default Services