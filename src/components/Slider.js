"use client";
import { useState } from "react";
import { Box, Button, Heading, VStack } from "@chakra-ui/react";
// Import Swiper React components
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";
import "swiper/css/effect-flip";
import "swiper/css/effect-creative";
import "swiper/css/effect-cube";

// import "./styles.css";

// import required modules
import {
  Autoplay,
  EffectCreative,
  EffectCube,
  EffectFade,
  EffectFlip,
  Navigation,
  Thumbs,
} from "swiper/modules";

export default function Slider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const slidesData = [
    {
      id: 1,
      Title: "Cox's Bazar",
      image:
        "https://i.ibb.co/26dWRZp/sean-oulashin-KMn4-VEe-EPR8-unsplash.jpg",
    },
    {
      id: 2,
      Title: "Bandarban",
      image:
        "https://i.ibb.co/8681zZw/iraj-ishtiak-Ct-Nw-NWAp4-BQ-unsplash.jpg",
    },
    {
      id: 3,
      Title: "Sylhet",
      image: "https://i.ibb.co/JcSjm9y/simanta-saha-QMOWBMNN92g-unsplash.jpg",
    },
    {
      id: 4,
      Title: "Shajek Valley",
      image:
        "https://i.ibb.co/p4s1FjJ/rahat-khandaker-GBOq-Xldivt-I-unsplash.jpg",
    },
    {
      id: 5,
      Title: "Rangamati",
      image:
        "https://i.ibb.co/p4s1FjJ/rahat-khandaker-GBOq-Xldivt-I-unsplash.jpg",
    },
    {
      id: 6,
      Title: "Kuakata",
      image:
        "https://i.ibb.co/p4s1FjJ/rahat-khandaker-GBOq-Xldivt-I-unsplash.jpg",
    },
  ];

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        allowTouchMove={false}
        spaceBetween={10}
        effect="fade"
        // navigation={true}
        modules={[
          Navigation,
          Thumbs,
          EffectFade,
          EffectCreative,
          EffectFlip,
          EffectCube,
        ]}
        className="mySwiper2"
        onSwiper={setThumbsSwiper}
      >
        {slidesData.map((item, i) => {
          return (
            <SwiperSlide key={item.id}>
              <Box
                h={"100vh"}
                bgSize={"cover"}
                backgroundImage={item.image}
                position={"relative"}
                p={12}
                // className={`h-screen  bg-cover relative p-12`}
              >
                <div className="overlay-2"></div>
                <Box
                  zIndex={10}
                  color={"white"}
                  position={"relative"}
                  w={"xl"}
                  my={"auto"}
                  h={"full"}
                  display={"flex"}
                  flexDir={"column"}
                  justifyContent={"center"}
                  gap={5}
                >
                  <Heading
                    fontSize={"6xl"}
                    fontWeight={500}
                    className=" text-7xl font-bold "
                  >
                    {item.Title}
                  </Heading>
                  <p>
                    here are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing{" "}
                  </p>
                  <Button
                    rightIcon={<FaArrowRightLong />}
                    maxW={"max-content"}
                    bgColor={"blue.500"}
                    color={"white"}
                    className="bg-orange-600 w-max px-5 py-2 rounded  font-bold text-md flex gap-5 items-center"
                  >
                    Book Now
                  </Button>
                </Box>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div>
        <Swiper
          // onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={30}
          slidesPerView={"auto"}
          thumbs={{ swiper: thumbsSwiper }}
          navigation={{
            nextEl: ".btn-next",
            prevEl: ".btn-prev",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            // pauseOnMouseEnter: true,
          }}
          speed={1000}
          watchSlidesProgress={true}
          modules={[Navigation, Thumbs, Autoplay]}
          className="mySwiper"
        >
          {slidesData.map((item) => (
            <SwiperSlide key={item.id}>
              <Box
                cursor={"pointer"}
                bgImage={item.image}
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundSize: "cover",
                  position: "relative",
                }}
                className="slideThubsBg"
              >
                <div className="overlay"></div>
                <VStack
                  justifyContent={"end"}
                  h={"full"}
                  p={6}
                  zIndex={2}
                  position={"relative"}
                  alignItems={"start"}
                >
                  <Heading fontSize={"2xl"} fontWeight={500}>
                    {item.Title}
                  </Heading>
                </VStack>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="relative w-full"></div>
        <Box
          position={"absolute"}
          zIndex={2}
          display={"flex"}
          gap={5}
          bottom={24}
          right={"45%"}
          className="navigation-swiper absolute bottom-40  right-[49%] z-10 flex gap-5"
        >
          <Box
            h={12}
            w={12}
            bg={"white"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"full"}
            cursor={"pointer"}
            className="btn-prev "
          >
            {/* <FaChevronLeft /> */}
            <BsChevronLeft className="text-xl" color="black" />
            {/* <IoChevronBackCircleSharp className="text-3xl" /> */}
          </Box>
          <Box
            h={12}
            w={12}
            bg={"white"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"full"}
            cursor={"pointer"}
            className="btn-next"
          >
            {/* <FaChevronRight /> */}
            <BsChevronRight className="text-xl" color="black" />
          </Box>
        </Box>
      </div>
    </>
  );
}
