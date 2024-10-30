import './experience.css'
import {BiSolidBadgeCheck} from 'react-icons/bi'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BiSolidBadgeCheck  className='experience__details-icon'/>
              <div>
                 <h4>HTML</h4>
                 <small className='text-light'>Experienced</small>
              </div>
              
            </article>

            <article className='experience__details'>
              <BiSolidBadgeCheck className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BiSolidBadgeCheck className='experience__details-icon'/>
                 <div><h4>JAVASCRIPT</h4>
                 <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BiSolidBadgeCheck  className='experience__details-icon'/>
              <div>
                 <h4>REACT JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BiSolidBadgeCheck  className='experience__details-icon'/>
              <div>
                 <h4>NEXT JS</h4>
                 <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BiSolidBadgeCheck  className='experience__details-icon'/>
              <div>
                 <h4>BOOTSTRAP</h4>
                  <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BiSolidBadgeCheck  className='experience__details-icon'/>
              <div>
                 <h4>TAILWIND CSS</h4>
                 <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BiSolidBadgeCheck className='experience__details-icon'/>
              <div>
                 <h4>DIGITAL MARKETING</h4>
                 <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BiSolidBadgeCheck  className='experience__details-icon'/>
              <div>
                 <h4>PYTHON</h4>
                 <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BiSolidBadgeCheck  className='experience__details-icon'/>
              <div>
                 <h4>NODE JS</h4>
                 <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BiSolidBadgeCheck  className='experience__details-icon'/>
              <div>
                 <h4>PHP</h4>
                 <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BiSolidBadgeCheck  className='experience__details-icon'/>
              <div>
                  <h4>MONGO DB</h4>
                  <small className='text-light'>BASIC</small>
              </div>
            </article>

            <article className='experience__details'>
              <BiSolidBadgeCheck  className='experience__details-icon'/>
              <div>
                 <h4>MYSQL</h4>
                 <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BiSolidBadgeCheck  className='experience__details-icon'/>
              <div>
                 <h4>Django</h4>
                 <small className='text-light'>Intermediate</small>
              </div>
            </article>


          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience