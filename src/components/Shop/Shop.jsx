import { React, useState } from "react";
import Navbar from "../Navbar/Navbar";
import cheryImg from "../../assets/chery.png";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

const Shop = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <main className="bg-primaryDark md:py-6 md:px-12">
      <section className="relative min-h-[650px] bg-gradient-to-r from-primary to-secondary w-full md:rounded-xl shadow-md">
        <div className="container">
          <Navbar sidebar={sidebar} setSidebar={setSidebar} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-[650px] place-items-center">
            {/* Front text Container */}
            <div className="text-white space-y-4 p-4 mt-[100px] md:mt-0">
              <h1 className="text-3xl pl-6 md:pl-14">01____________</h1>
              <h1 className="text-5xl font-bold uppercase text-shadow">
                A Healthy Fruit
              </h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus odit exercitationem illum adipisci neque quasi omnis,
                tenetur ea perferendis, sit, commodi minus maxime magni quisquam
                minima maiores voluptatum quibusdam animi est quos ipsam
                temporibus consequatur! Vel, non repudiandae vero laboriosam
                atque nam quam vitae nulla hic velit accusamus perspiciatis
                optio?
              </p>
              <button className="border border-white px-4 py-2 rounded-lg">
                Shop Now!
              </button>
            </div>

            {/* Front Image Container */}
            <div>
              <img
                src={cheryImg}
                alt="Image Not Found"
                className="w-[400px] img-shadow relative z-[1]"
              />
            </div>

            {/* Blank Container */}
            <div className="md:hidden"></div>
          </div>
        </div>
        <h1 className="text-center text-[80px] text-white uppercase font-bold sm:text-[120px] md:text-[150px] xl:text-[180px] absolute bottom-0 w-full z-0 text-shadow">
          Berries
        </h1>
        {sidebar && (
          <div className="absolute top-0 right-0 w-[120px] h-full bg-gradient-to-b from-primary to-secondary z-10">
            <div className="w-full h-full flex flex-col justify-center items-center gap-6">
              <div className="w-[1px] h-[70px] bg-white"></div>
              <div className="text-white inline-block p-2 rounded-full cursor-pointer border border-white">
                <FaFacebookF className="text-2xl" />
              </div>
              <div className="text-white inline-block p-2 rounded-full cursor-pointer border border-white">
                <FaInstagram className="text-2xl" />
              </div>
              <div className="text-white inline-block p-2 rounded-full cursor-pointer border border-white">
                <FaLinkedin className="text-2xl" />
              </div>
              <div className="w-[1px] h-[70px] bg-white"></div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Shop;
