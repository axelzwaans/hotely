"use client";

// Swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper modules
import { Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const testimonialData = [
  {
    img: "/testimonials/img-1.png",
    message:
      "Shanghai Hotel is the best hotel I've ever stayed at! The staff is so friendly and helpful. I will definitely be back! I highly recommend this hotel to anyone who wants to have a great time in Shanghai! Thank you so much for making my stay so enjoyable! I'll see you soon!",
    personName: "Robbie Williams",
    location: "Shanghai, China",
  },
  {
    img: "/testimonials/img-2.png",
    message:
      "Staying at Neon Sakura felt like a journey to the future with a touch of tradition. The view of Tokyo from my room was breathtaking, and the fusion of modernity and elegance was simply mesmerizing! I will definitely be back! I highly recommend this hotel to anyone who wants to have a great time in Tokyo! Thank you so much for making my stay so enjoyable! I'll see you soon!",
    personName: "Tom Cruise",
    location: "Tokyo, Japan",
  },
];

const Testimonials = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="bg-soft_green xl:h-[880px]"
    >
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="container mx-auto"
      >
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="xl:h-[680px] overflow-hidden"
        >
          {testimonialData.map((slide, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-1 xl:grid-cols-2 py-12 xl:py-24">
                  <Image
                    src={slide.img}
                    width={470}
                    height={470}
                    alt=""
                    className="hidden xl:flex"
                  />
                  <div className="flex-1 bg-white/20 text-white p-12">
                    <p className="text-lg leading-9 mb-8">{slide.message}</p>
                    <p className="text-xl font-bold">{slide.personName}</p>
                    <p>{slide.location}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
    </motion.section>
  );
};

export default Testimonials;
