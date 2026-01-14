
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const images = [
  '/src/assets/carousel_1.jpg',
  '/src/assets/carousel_2.jpg',
  '/src/assets/carousel_3.jpg',
  '/src/assets/carousel_4.jpg',
];


const Hero = () => {
  return (
    <section className="relative w-full">
      <Swiper
        slidesPerView={3}
         
        loop={true}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <Link to="#">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full max-h-100 object-cover"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Hero