import React from "react";
import AboutImg from "../assets/about-img.jpg";
import Title from "../components/Title";

const About = () => {
  return (
    <section id="about" className="pt-32">
      <div className="container">
        <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
          <div className="mb-8 md:mb-0">
            <img
              className="object-cover rounded-2xl"
              src={AboutImg}
              alt="About Image"
            />
          </div>
          <div>
            <Title
              title={"About"}
              highlight={"Me"}
              subtitle={"Get To Know Me Better"}
              isCenter={false}
            />
            <p className="leading-7">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A non
              facere adipisci maiores accusamus ipsum consequuntur aliquam
              incidunt, vero vitae?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
