import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { useRef } from "react";
import { heroImages } from "../../assets/heroImages";

const Hero = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
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
            slidesPerView: 3, // tablets
          },
          1024: {
            slidesPerView: 4, // desktops
          },
        }}
      >
        {heroImages.map((item, index) => (
          <SwiperSlide key={item.id}>
            <Link to="#">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full max-h-[60vh] object-contain rounded-sm md:rounded-none"
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
  );
};

export default Hero;
