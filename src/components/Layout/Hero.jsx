
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { useRef } from 'react';

const images = [
  '/src/assets/carousel_1.jpg',
  '/src/assets/carousel_2.jpg',
  '/src/assets/carousel_3.jpg',
  '/src/assets/carousel_4.jpg',
  '/src/assets/carousel_5.jpg',
  '/src/assets/carousel_6.png',
];


const Hero = () => {

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <section className="relative w-full mt-7 sm:mt-5 rounded-sm">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        speed={3000}
        breakpoints={{
          0: {
            slidesPerView: 1, // 📱 mobile
          },
          640: {
            slidesPerView: 2, // tablets
          },
          1024: {
            slidesPerView: 3, // desktops
          },
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <Link to="#">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full max-h-100 min-h-50   object-cover rounded-sm md:rounded-none"
              />
            </Link>
          </SwiperSlide>
        ))}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </section>
  )
}

export default Hero