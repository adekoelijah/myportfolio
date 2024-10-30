import './testimonial.css'
import Av1 from '../../image/avatar1.jpg'
import Av2 from '../../image/avatar2.jpg'
import Av3 from '../../image/avatar3.jpg'
import Av4 from '../../image/avatar4.jpg'


// import Swiper core and required modules
import {Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonial__container"
       // install Swiper modules
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}>
        <SwiperSlide className="testimonial">
          <div className="clients__avatar">
            <img src={Av1} alt="avatar" />
          </div>
          <h5 className='client__name'>Emily R. – Marketing Director</h5>
            <small className='client__review'>
            "The email marketing campaign was a huge success! 
            The personalized content and targeted approach were exactly what we needed. 
            Our open and click-through rates improved dramatically, 
            and we saw a noticeable boost in conversions. Great work!"
             </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="clients__avatar">
            <img src={Av2} alt="avatar" />
          </div>
          <h5 className='client__name'>Sophia M StyleNest</h5>
            <small className='client__review'>
            "I couldn't be happier with the UI/UX design for our app. The interface is intuitive and beautiful, 
            and customers are loving how easy it is to use. 
            Thank you for putting our users first and making a seamless experience for them."
             
             </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="clients__avatar">
            <img src={Av3} alt="avatar" />
          </div>
          <h5 className='client__name'>David K</h5>
            <small className='client__review'>
            "Our website redesign was flawless, and the development process was smooth and professional. 
            You paid close attention to SEO and load times, which made a real difference in our site traffic and performance. Highly recommend!"
             </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="clients__avatar">
            <img src={Av4} alt="avatar" />
          </div>
          <h5 className='client__name'>Lisa H. – Owner, FreshStart Media</h5>
            <small className='client__review'>
            "You really took our email marketing to the next level! The segmentation and A/B testing strategies were spot on,
             and the campaigns have been converting better than ever.
             It's refreshing to see such data-driven results!"
             
             </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="clients__avatar">
            <img src={Av4} alt="avatar" />
          </div>
          <h5 className='client__name'>Megan C. – VP of Digital Marketing</h5>
            <small className='client__review'>
            "From start to finish, our web development project was handled with care and expertise.
             The site is fast, secure, and beautifully designed, plus the cross-browser compatibility is perfect.
             It was a pleasure working together!"
             
             </small>
        </SwiperSlide>


        <SwiperSlide className="testimonial">
          <div className="clients__avatar">
            <img src={Av4} alt="avatar" />
          </div>
          <h5 className='client__name'>Lisa H. – Owner, FreshStart Media</h5>
            <small className='client__review'>
            "The UI/UX design for our platform exceeded expectations. It’s visually engaging, yet so easy to navigate, which is exactly what we wanted for our users. 
            The feedback has been fantastic, and it’s clear your expertise made a difference."
             
             </small>
        </SwiperSlide>


      </Swiper>
    </section>
  )
}

export default Testimonial