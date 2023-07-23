import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';



const Testimonials = () => {

  const data = [
    {
      avatar: AVTR1,
      name: 'Tina Snow',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eos nihil qui sequi quis est autem voluptatum error, enim officia modi necessitatibus. Iusto impedit incidunt officiis earum! Eveniet nemo, illo, dolores temporibus cum fuga, odit repellendus minus maiores mollitia quaerat eum error est ut sunt. Doloremque corrupti vero magni consequatur.',
    },
    {
      avatar: AVTR2,
      name: 'Shatta Wale',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, aperiam. Quam, nulla laudantium tenetur architecto consequuntur cumque minus ut unde, sed officia eligendi dolorem natus est consectetur iusto ad magnam.',
    },
    {
      avatar: AVTR3,
      name: 'Kwame Despite',
      review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, corrupti ducimus earum accusamus cumque eius quasi, assumenda iste quae laborum perferendis numquam enim beatae harum dolor aliquid consequuntur sapiente obcaecati facere mollitia nemo! Sunt earum ratione porro qui? Similique, temporibus?',
    },
    {
      avatar: AVTR4,
      name: 'Nana Ama McBrown',
      review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio iusto et eum quam provident omnis aut architecto magnam ad voluptas!',
    }
  ]

  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>

  )
}

export default Testimonials