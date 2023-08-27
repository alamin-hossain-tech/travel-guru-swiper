"use client";
import { useState } from "react";
import { Box, Button, Heading } from "@chakra-ui/react";
// Import Swiper React components
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import "./styles.css";

// import required modules
import { Navigation, Thumbs } from "swiper/modules";

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
        spaceBetween={10}
        // navigation={true}

        modules={[Navigation, Thumbs]}
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
                p={8}
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
          //   watchSlidesProgress={true}
          modules={[Navigation, Thumbs]}
          className="mySwiper"
        >
          {slidesData.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundSize: "cover",
                  position: "relative",
                }}
                className="slideThubsBg"
              >
                <div className="overlay"></div>
                <div className="z-10 relative p-4 flex justify-end h-full flex-col">
                  <h2 className="text-2xl h-auto text-white font-bold pb-5">
                    {item.Title}
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="relative w-full"></div>
        <div className="navigation-swiper absolute bottom-40  right-[49%] z-10 flex gap-5">
          <button className="btn-prev bg-white h-10 w-10 rounded-full flex justify-center items-center">
            {/* <FaChevronLeft /> */}
            <BsChevronLeft className="text-xl" />
            {/* <IoChevronBackCircleSharp className="text-3xl" /> */}
          </button>
          <button className="btn-next  bg-white h-10 w-10 rounded-full flex justify-center items-center">
            {/* <FaChevronRight /> */}
            <BsChevronRight className="text-xl" />
          </button>
        </div>
      </div>
    </>
  );
}
