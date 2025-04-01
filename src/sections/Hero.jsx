import React from "react";
import HeroImg from "../assets/hero-image.png";

const Hero = () => {
  return (
    <section id="home">
      <div className="z-40">
        <div className="container h-screen flex items-center justify-center text-center">
          <div className="max-w-[800px] mx-auto">
            {/* Image */}
            <div className="mb-6">
              <img
                className="size-[100px] rounded-full mx-auto bg-gradient-to-r from-blue-600 to-purple-600 object-contain"
                src={HeroImg}
                alt="hero Image"
              />
            </div>

            {/* Content */}
            <div>
              <h1 className="mb-2 text-3xl font-extrabold capitalize leading-[1.2] md:text-5xl">
                Walid Ashraf{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Portfolio
                </span>
              </h1>
              <p className="mb-4 md:text-lg">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae labore consectetur, aut, ratione aliquid autem
                inventore iusto est assumenda vel quisquam dolorum error nemo
                eligendi fugit ut culpa ipsam fugiat ab odit placeat neque dolor
                esse! Laborum placeat rem quo autem porro quae labore aut optio
                quia? Odit, quae error.
              </p>
              <a
                className="px-6 py-3 inline-block capitalize font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md"
                href="#projects"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
