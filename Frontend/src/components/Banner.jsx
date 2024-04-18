import React from "react";
import { MdEmail } from "react-icons/md";
import banner from '../../public/banner.jpg'


function Banner() {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-3xl font-bold">
             
Discover the joy of reading at our bookstore, where every page holds a new adventure and every book is  {" "}
              <span className="text-blue-500">a gateway to imagination.</span>
            </h1>
            <p className="text-sm md:text-xl">
            Dive into Diverse Worlds: Explore our wide range of genres, from classics to contemporary, ensuring there's a story for every reader's taste.
            </p>
            <label className="input input-bordered flex items-center gap-2">
             
              <MdEmail />
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <button className="btn mt-6  bg-blue-500">Get Started</button>
        </div>
        <div className=" order-1 w-full mt-20 md:w-1/2 ">
          <img
            src={banner}
            className="md:w-[550px] md:h-[460px] md:ml-12 rounded-2xl"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
