import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Heading from "../Headings/Heading";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import customer1 from "../../assets/customer1.jpg";
import customer2 from "../../assets/customer2.jpg";
import customer3 from "../../assets/customer3.jpg";
import customer4 from "../../assets/customer4.jpg";
import customer5 from "../../assets/customer5.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  return (
    <section>
      <div className="mx-auto max-w-[1400] px-10 py-25">
        <Heading highlight="Customer's" heading="Saying" />

        <div className="py-5 flex justify-end  gap-x-3 ">
          <button className=" custom-prev text-2xl rounded-lg w-11 h-11 items-center justify-center bg-zinc-100 flex text-center cursor-pointer font-bold hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-600  hover:text-white">
            <IoIosArrowBack />
          </button>
          <button className=" custom-next text-2xl rounded-lg w-11 h-11 items-center justify-center bg-zinc-100 flex text-center cursor-pointer font-bold hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-600 hover:text-white">
            <IoIosArrowForward />
          </button>
        </div>

        <Swiper
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            767: { slidesPerView: 2, spaceBetween: 20 },
            1040: { slidesPerView: 3, spaceBetween: 20 },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {reviews.map((item, id) => {
            return (
              <SwiperSlide className="bg-zinc-300 rounded-xl p-8" key={id}>
                <div className="flex gap-x-4 items-center">
                  <div className="w-16 h-16 rounded-full outline-2 outline-orange-500 outline-offset-3 bg-pink-300 overflow-hidden ">
                    <img
                      src={item.image}
                      alt="image"
                      className="w-full h-full "
                    />
                  </div>
                  <div>
                    <h5 className="text-xl font-bold">{item.name}</h5>
                    <p className="text-zinc-700">{item.profession}</p>
                    <span className="flex text-yellow-500 mt-2 text-xl gap-1">
                      {Array.from({ length: item.rating }, (_, index) => (
                        <FaStar key={index} />
                      ))}
                    </span>
                  </div>
                </div>
                <div className="mt-10 min-h-[15vh]">
                  <p className="text-zinc-600">{item.para}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* cart item Here.... */}

        {/* <div className="bg-zinc-300 rounded-xl p-8">
          <div className="flex gap-x-4 items-center">
            <div className="w-16 h-16 rounded-full outline-2 outline-orange-500 outline-offset-3 bg-pink-300 "></div>
            <div>
              <h5 className="text-xl font-bold">Name</h5>
              <p className="text-zinc-700">Profession</p>
              <p>Stars</p>
            </div>
           
          </div>
           <div className="mt-10">
              <p className="text-zinc-600">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam,
                unde!
              </p>
            </div>
        </div> */}
      </div>
    </section>
  );
};

export default Testimonial;

const reviews = [
  {
    id: 1,
    name: "Sonam",
    profession: "Food Blogger",
    rating: 3,
    para: "FreshBasket is my go-to store for all grocery needs. Their produce is always fresh, and the delivery is super fast. I love the user-friendly interface and variety of organic options!",
    image: customer1,
  },
  {
    id: 2,
    name: "Ruhi",
    profession: "Chef",
    rating: 4,
    image: customer5,
    para: "As a chef, quality ingredients are everything. FreshBasket consistently delivers the best vegetables, herbs, and pantry staples. Highly recommended!",
  },
  {
    id: 3,
    name: "Sanskar",
    profession: "Model",
    rating: 5,
    image: customer2,
    para: "Shopping online with FreshBasket has saved me so much time. I trust them for my family's weekly groceries—always fresh, affordable, and reliable.",
  },
  {
    id: 4,
    name: "Neha",
    profession: "Fitness Coach",
    rating: 4,
    image: customer3,
    para: "I appreciate the selection of healthy foods and clean-label products. FreshBasket has been a great partner in my wellness journey ",
  },

  {
    id: 5,
    name: "Aryan",
    profession: "Engineer",
    rating: 5,
    image: customer4,
    para: "FreshBasket offers high-quality groceries at reasonable prices. Their organic section is impressive, and their customer service is top-notch.",
  },
];
