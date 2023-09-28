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
          <h5 className='client__name'>Ernest Acadern</h5>
            <small className='client__review'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Officia dolore iusto et harum, cumque delectus quos temporibus vel nam saepe voluptatem veritatis,
             deserunt explicabo exercitationem tempora aperiam illum ad praesentium?
             
             </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="clients__avatar">
            <img src={Av2} alt="avatar" />
          </div>
          <h5 className='client__name'>Ernest Acadern</h5>
            <small className='client__review'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Officia dolore iusto et harum, cumque delectus quos temporibus vel nam saepe voluptatem veritatis,
             deserunt explicabo exercitationem tempora aperiam illum ad praesentium?
             
             </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="clients__avatar">
            <img src={Av3} alt="avatar" />
          </div>
          <h5 className='client__name'>Ernest Acadern</h5>
            <small className='client__review'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Officia dolore iusto et harum, cumque delectus quos temporibus vel nam saepe voluptatem veritatis,
             deserunt explicabo exercitationem tempora aperiam illum ad praesentium?
             
             </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="clients__avatar">
            <img src={Av4} alt="avatar" />
          </div>
          <h5 className='client__name'>Ernest Acadern</h5>
            <small className='client__review'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Officia dolore iusto et harum, cumque delectus quos temporibus vel nam saepe voluptatem veritatis,
             deserunt explicabo exercitationem tempora aperiam illum ad praesentium?
             
             </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonial