import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import './carousel.css';
import Image from 'next/image';
import { Project } from '../Project/Projects-data';

interface CarouselProps {
  project: Project;
}

const Carousel = ({ project }: CarouselProps) => {
  return (
    <div className="w-[80vw] xl:w-[70vw] mx-auto">
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 9000
      }}
        effect="fade"
        loop={true}
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        className="h-full w-full"
      >
        {project.images.map((image) => (
          <SwiperSlide key={image.id}>
            <Image
              src={image.path}
              alt={project.title}
              height={2000}
              width={2000}
              className="object-cover rounded-2xl" 
            ></Image>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
