import { Pagination } from "swiper/modules";
import Image from "next/image";
import { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from 'swiper/react'; 

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { BsBagCheck } from 'react-icons/bs';  
import Modal from "@/components/modal";

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/hansel/o1.jpg',
        },
        {
          title: 'title',
          path: '/hansel/o2.jpg',
        },
        {
          title: 'title',
          path: '/hansel/o3.jpg',
        },
        {
          title: 'title',
          path: '/hansel/o4.jpg',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/hansel/p1.jpg',
        },
        {
          title: 'title',
          path: '/hansel/p2.jpg',
        },
        {
          title: 'title',
          path: '/hansel/p3.jpg',
        },
        {
          title: 'title',
          path: '/hansel/p4.jpg',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/hansel/o5.jpg',
        },
        {
          title: 'title',
          path: '/hansel/o6.jpg',
        },
        {
          title: 'title',
          path: '/hansel/o7.jpg',
        },
        {
          title: 'title',
          path: '/hansel/o8.jpg',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/hansel/p5.jpg',
        },
        {
          title: 'title',
          path: '/hansel/p6.jpg',
        },
        {
          title: 'title',
          path: '/hansel/p7.jpg',
        },
        {
          title: 'title',
          path: '/hansel/p8.jpg',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/hansel/o9.jpg',
        },
        {
          title: 'title',
          path: '/hansel/o10.jpg',
        },
        {
          title: 'title',
          path: '/hansel/o11.jpg',
        },
        {
          title: 'title',
          path: '/hansel/o12.jpg',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/hansel/m1.jpg',
        },
        {
          title: 'title',
          path: '/hansel/m2.jpg',
        },
        {
          title: 'title',
          path: '/hansel/m3.jpg',
        },
        {
          title: 'title',
          path: '/hansel/m4.jpg',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/hansel/m5.jpg',
        },
        {
          title: 'title',
          path: '/hansel/m6.jpg',
        },
        {
          title: 'title',
          path: '/hansel/m7.jpg',
        },
        {
          title: 'title',
          path: '/hansel/m8.jpg',
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  const [clickedImg, setClickedImg] = useState(null);
  const [title, setTitle] = useState(null);
  useEffect(() => {
    clickedImg != null ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';
  });
  const handleClick = (image) => {
    setClickedImg(image.path);
    setTitle(image.title);
  };
  return(
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[20rem] sm:h-[35rem]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
        <SwiperSlide key={index}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
            {slide.images.map((image, index) => {
              return (
              <div key={index} className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                <div onClick={()=> {handleClick(image)}} className="flex items-center h-[8rem] sm:h-[16rem] justify-center relative overflow-hidden group">
                  <Image 
                    src={image.path} 
                    width={500}
                    height={500}
                    alt=""
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                  <div className="absolute bottom-0 translate-y-full group-hover:transition-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                    <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                      <div className="delay-100">
                        click
                      </div>
                      <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        to view
                      </div>
                    
                      <div className="transition-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                          painting
                          {/* <BsBagCheck /> */}
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>)
            })}
          </div>
        </SwiperSlide>
        );
      })}
      <div>
        {clickedImg && (
          <Modal
            clickedImg={clickedImg}
            setClickedImg={setClickedImg}
            title={title}
            setTitle={setTitle}
          />
        )}
            </div>
    </Swiper>
  );
};

export default WorkSlider;
