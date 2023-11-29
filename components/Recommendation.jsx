"use client";

// Swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper modules
import { Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";

// Components
import { Button } from "./ui/button";
import Image from "next/image";

const recommendationData = [
  {
    name: "The Lotus Hotel",
    image: "/recommendation/hotel-1.png",
    location: "Shanghai, China",
    description:
      "Nestled amidst the dazzling skyline of Shanghai, the Lotus Hotel invites guests to indulge in an enchanting blend of modern luxury and traditional elegance, where every stay is a journey through the vibrant heart of the city.",
    price: 40,
    testimonial: {
      message:
        "Shanghai Hotel is the best hotel I've ever stayed at! The staff is so friendly and helpful. I will definitely be back!",
      personName: "Jennifer Aniston",
    },
  },
  {
    name: "Neon Sakura",
    image: "/recommendation/hotel-2.png",
    location: "Tokyo, Japan",
    description:
      "Embrace the futuristic charm of Tokyo at Neon Sakura Hotel, where sleek design meets traditional tranquility, creating a haven in the midst of the bustling metropolis.",
    price: 50,
    testimonial: {
      message:
        "Staying at Neon Sakura felt like a journey to the future with a touch of tradition. The view of Tokyo from my room was breathtaking, and the fusion of modernity and elegance was simply mesmerizing!",
      personName: "Tom Cruise",
    },
  },
  {
    name: "The Big Apple Oasis",
    image: "/recommendation/hotel-3.png",
    location: "New York, USA",
    description:
      "In the city that never sleeps, The Big Apple Oasis Hotel welcomes you to an iconic blend of urban chic and timeless sophistication, ensuring your stay is as vibrant as the streets below.",
    price: 60,
    testimonial: {
      message:
        "The Big Apple Oasis is the epitome of New York cool. From the stylish rooms to the rooftop views, this hotel captures the essence of the city. I felt like a true New Yorker during my stay!",
      personName: "Judy Dench",
    },
  },
];

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Recommendation = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="pb-12 xl:pt-[157px] xl:pb-[112px] bg-soft_green-secondary relative "
    >
      {/* slider */}
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
          }}
          loop
          speed={2000}
        >
          {recommendationData.map((hotel, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="flex flex-col xl:flex-row xl:pl-[135px] gap-y-12 xl:gap-y-0">
                  {/* text */}
                  <div className="max-w-[345px] xl:pt-8 order-2 xl:order-1 text-center mx-auto xl:text-left xl:mx-0">
                    <h2 className="h2 mb-4">{hotel.name}</h2>
                    <p className="text-soft_green text-sm mb-6">
                      {hotel.location}
                    </p>
                    <p className="mb-[60px]">{hotel.description}</p>
                    <div className="flex items-center gap-x-[50px]">
                      <Button variant="accent" className="px-[44px]">
                        Book Now
                      </Button>
                      <div className="text-black">
                        <span className="font-bold text-2xl">
                          {hotel.price}
                        </span>
                        <span className="text-sm">/night</span>
                      </div>
                    </div>
                  </div>
                  {/* image and testimonial */}
                  <div className="order-1 xl:order-2 flex-1 flex justify-center xl:justify-end relative h-[634px]">
                    <div>
                      <Image
                        src={hotel.image}
                        width={905}
                        height={528}
                        quality={100}
                        className="xl:rounded-tl-[20px] xl:rounded-bl-[20px]"
                      />
                      <div className="bg-soft_green p-4 text-white text-center xl:text-left xl:max-w-[468px] xl:min-h-[212px] xl:absolute xl:bottom-0 xl:translate-x-1/2 xl:rounded-xl xl:px-10">
                        <p className="mb-3 max-w-md mx-auto xl:max-w-none xl:mx-0 xl:mb-6">
                          {hotel.testimonial.message}
                        </p>
                        <p className="text-xl font-bold">
                          {hotel.testimonial.personName}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
      {/* pattern */}
      <Image
        src={"/recommendation/pattern.svg"}
        width={240}
        height={240}
        alt="pattern"
        className="hidden xl:flex absolute left-[135px] -bottom-[120px]"
      />
    </motion.section>
  );
};

export default Recommendation;
