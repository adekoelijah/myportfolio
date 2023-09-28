import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {FaFacebookMessenger} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>adekoelijah@gmail.com</h5>
            <a href="mailto:adekoelijah@gmail.com" target='_blank' rel='noreferrer noopener'>Send a Message</a>
          </article>
          <article className='contact__option'>
            <FaFacebookMessenger className='contact__option-icon'/>
            <h4>Messager</h4>
            <h5>Adeks Developer</h5>
            <a href="https://m.me/james.oladekan" target='_blank' rel='noreferrer noopener'>Send a Message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+2347088294012</h5>
            <a href="https://api.whatsapp.com/send?phone+2347088294012" target='_blank' rel='noreferrer noopener'>Whatsapp Me</a>
          </article>
        </div>

       {/*  end of contact options */}
       <form action="">
        <input type="text" name='name' placeholder='Your Full Name' required/>
        <input type="email" name='email' placeholder='Your Email' required />
        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
       </form>
      </div>
    </section>
  )
}

export default Contact