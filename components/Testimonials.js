import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import SwiperCore, { Autoplay } from 'swiper';




const Testimonials = () => {

  SwiperCore.use([Autoplay]);


  return (
    <div className='testimonial-slide-container'>
      <Swiper
       modules={[Navigation, Pagination, A11y]}
       spaceBetween={30}
       slidesPerView={1}
       breakpoints = {{
        1200: {
          slidesPerView: 3,
          spaceBetweenSlides: 150
      },
        1024: {
            slidesPerView: 2,
            spaceBetweenSlides: 150
        },
        600: {
            slidesPerView: 1,
            spaceBetweenSlides: 50
        }
    }}
       loop={{ loop: true }}
       autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      speed={1400}
       navigation
       pagination={{ clickable: true }}
      //  scrollbar={{ draggable: true }}
      //  onSwiper={(swiper) => console.log(swiper)}
      //  onSlideChange={() => console.log('slide change')}
    >
      
      <SwiperSlide className='testimonial-slider'>
        <div className='testimonial-card'>
          <div className='testimonial-img-container'>
          <img src='/profile.png' className='testimonial-img' alt='Fairfield County Graphic'></img>
          </div>
          <hr className='testimonial-hr'></hr>
          <div className='testimonial-content-container'>
          <q>Chris Luffman was highly recommended to us and he did not disappoint! From our first phone call, Chris made a stressful home buying experience manageable. We have used different home inspection services in the past and Chris hands down provides a top quality inspection and at reasonable prices. Chris is meticulous and methodical in his inspection. He checks EVERYTHING! And explains it all to you along the way. He really makes you part of the process and not just a bystander. At the end of the process we really felt like we knew the ends and outs of our new home and how to maintain it going forward. Chris provides a top notch service!</q>
          </div>
          <div className='testimonial-profile-container'>Garrett &amp; Summer K</div>
          <div className='testimonial-location-container'>Trumbull, CT</div>
          <div className='testimonial-date-container'>
            11-12-2014
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='testimonial-slider'>
          <div className='testimonial-card'>
          <div className='testimonial-img-container'>
          <img src='/profile.png' className='testimonial-img' alt='Fairfield County Graphic'></img>
          </div>
          <hr className='testimonial-hr'></hr>
          <div className='testimonial-content-container'>
          <q>My wife and I chose Chris to perform our home inspection on a property we ended buying in Newtown. Chris has the rare ability to explain technical aspects of the house in a matter that&apos;s relatable, understandable and thorough. We could not have been happier with his observations and recommendations.  There was a major issue with a poor venting of the master bathroom vent, which created mold in the attack.  Chris took the time to explain what had happened and the options for removal and repair.  His past experience as a contractor really shows.  His report had details descriptions and photos, and came promptly after the inspection. Highly recommend!</q>
          </div>
          <div className='testimonial-profile-container'>David &amp; Emily, J.</div>
          <div className='testimonial-location-container'>Newtown, CT</div>
          <div className='testimonial-date-container'>
            11-12-2014
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='testimonial-slider'>
          <div className='testimonial-card'>
          <div className='testimonial-img-container'>
          <img src='/profile.png' className='testimonial-img' alt='Fairfield County Graphic'></img>
          </div>
          <hr className='testimonial-hr'></hr>
          <div className='testimonial-content-container'>
          <q>My wife and I have used Gold Shield Home Inspection Services several times. Each time, the inspections were professional, thorough, insightful, and really gave us an informed view of our prospective property. They go above an beyond to make sure that you have a good  understanding of all aspects of the structure, while keeping an emphasis on safety. When purchasing our next house, we will make sure that Gold Shield performs the inspection before we buy. We cant recommend them enough!</q>
          </div>
          <div className='testimonial-profile-container'>Eric A.</div>
          <div className='testimonial-location-container'>Ridgefield, CT</div>
          <div className='testimonial-date-container'>
            11-12-2014
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='testimonial-slider'>
          <div className='testimonial-card'>
          <div className='testimonial-img-container'>
          <img src='/profile.png' className='testimonial-img' alt='Fairfield County Graphic'></img>
          </div>
          <hr className='testimonial-hr'></hr>
          <div className='testimonial-content-container'>
          <q>We came into the inspection as first-time home buyers with no prior knowledge of the industry. Chris came highly recommended by our real estate agent and made every step as easy as possible, helping us understand the process and his findings along the way. He was friendly, incredibly patient with our many questions, helped us understand key features of  the home and what the proper maintenance & repairs would include, and he delivered a high-value report that was essential for a full understanding of the home. Do yourself a favor and hire Chris!</q>
          </div>
          <div className='testimonial-profile-container'>Lexi &amp; Kelly Flanagan</div>
          <div className='testimonial-location-container'>Darien, CT</div>
          <div className='testimonial-date-container'>
            11-12-2014
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='testimonial-slider'>
          <div className='testimonial-card'>
            <div className='testimonial-img-container'>
              <img src='/profile.png' className='testimonial-img' alt='Fairfield County Graphic'></img>
              </div>
              <hr className='testimonial-hr'></hr>
            <div className='testimonial-content-container'>
              <q>Chris has provided home inspection services to us on multiple occasions and there is a reason we always call on him: his knowledge and professionalism. As first time home buyers, Chris took his time to not only inspect all aspects of the houses but also to then explain to us the proper process for caring for it, knowing that we were new to the whole thing. Perhaps even more important, Chris doesnt sugar coat his findings and this is vital in his line of work. Too many home inspectors are afraid to identify potential issues with the home no matter how small, as they feel like their client will be upset or think the house is bad, but in reality this is what youre paying them to do. I highly recommend using Chris to inspect any home/building youre considering buying and I know you will come away feeling great about the decision.</q>
            </div>
            <div className='testimonial-profile-container'>Patrick P.</div>
              <div className='testimonial-location-container'>Stamford, CT</div>
            <div className='testimonial-date-container'>
            11-12-2014
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='testimonial-slider'>
          <div className='testimonial-card'>
            <div className='testimonial-img-container'>
              <img src='/profile.png' className='testimonial-img' alt='Fairfield County Graphic'></img>
            </div>
            <hr className='testimonial-hr'></hr>
            <div className='testimonial-content-container'>
            <q>My wife and I hired Chris to perform a home inspection and radon test during our home buying process. Chris went above and beyond his duties as an inspector he acted as a trusted partner, educator, and adviser.  As first-time buyers, we felt very comfortable knowing that Chris was 100% on our side of the table and always kept our best interest in mind.</q>
            </div>
            <div className='testimonial-profile-container'>Joseph B.</div>
            <div className='testimonial-location-container'>Stamford, CT</div>
            <div className='testimonial-date-container'>
              11-12-2014
            </div>
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
  )
}

export default Testimonials