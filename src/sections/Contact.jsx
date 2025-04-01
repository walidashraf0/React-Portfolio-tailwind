import React from "react";
import Title from "../components/Title";
import Form from "../components/Form";
import { Facebook, Github, Instagram, Linkedin, Mail, Phone, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="pt-32">
      <div className="container">
        <Title
          title={"Contact"}
          highlight={"US"}
          isCenter={false}
          subtitle={"Get in touch with me"}
        />
        <div className="mg:grid md:grid-cols-2 md:gap-16">
          <Form />

          <div className="mb-16 mt-8">
            <div className="mb-2 flex flex-wrap items-center justify-start gap-2">
              <Phone className="size-5" />
              <a
                className="text-lg font-semibold transition-colors duration-300 hover:text-blue-600"
                href="tel: 01011053973"
              >
                01011053973
              </a>
            </div>
            <div className="mb-2 flex flex-wrap items-center justify-start gap-2">
              <Mail className="size-5" />
              <a
                className="text-lg font-semibold transition-colors duration-300 hover:text-blue-600"
                href="mailto: walidashraf050@gmail.com"
              >
                walidashraf050@gmail.com
              </a>
            </div>

            <div className="mb-4 flex flex-wrap items-center justify-start gap-4">
              <a
                href="https://www.facebook.com/Walid3455"
                className="hover:-translate-y-2 hover:text-blue-600 transition-all duration-300 ease-in-out"
              >
                <Facebook className="size-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/walid-ashraf1/"
                className="hover:-translate-y-2 hover:text-blue-600 transition-all duration-300 ease-in-out"
              >
                <Linkedin className="size-6" />
              </a>
              <a
                href="https://github.com/walidashraf0"
                className="hover:-translate-y-2 hover:text-blue-600 transition-all duration-300 ease-in-out"
              >
                <Github className="size-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
