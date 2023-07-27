import React, { useEffect } from "react";
import { Input, Button } from "@material-tailwind/react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.scss";

import card1 from "../../assets/images/card1.png";
import card2 from "../../assets/images/card2.png";
import card3 from "../../assets/images/card3.png";
import landing from "../../assets/images/landing.png";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Set the animation duration (in milliseconds)
      once: false, // Apply animations every time the element is scrolled into view
    });
  }, []);

  return (
    <div>
      <main className="pt-4 ">
        <section className="services">
          <div className="container">
            <div className="services_wrapper">
              <div
                data-aos="zoom-in-down"
                className="hero flex flex-col lg:flex-row items-center gap-x-10 mb-10"
              >
                <div className="mb-5 lg:mb-0">
                  <img className="w-full lg:w-[500px]" src={landing} alt="" />
                </div>

                <div className="welcome_content">
                  <h1 className="font-semibold mb-5 text-center lg:text-left">
                    Welcome to iPro!!
                  </h1>
                  <p className="opacity-60 text-xs w-full lg:w-[450px] text-center lg:text-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente quam modi perferendis? Odit magni illo eaque
                    molestias iusto nihil numquam suscipit id ipsa voluptatem
                    odio, obcaecati ullam harum sit omnis?
                  </p>
                </div>
              </div>

              <h2 className="text-center mb-10 lg:text-left text-lg font-semibold">
                Our Services
              </h2>
              <ul className="service_types text-gray-700 flex flex-col gap-y-10">
                <li
                  data-aos="fade-right"
                  className="flex flex-col gap-y-3 items-center lg:flex-row lg:gap-x-20 rounded-lg"
                >
                  <div className="">
                    <img className="w-full lg:w-[500px]" src={card1} alt="" />
                  </div>

                  <div className="content">
                    <h3 className="mb-2 font-semibold text-center lg:text-left">
                      Creative web sites
                    </h3>
                    <p className="text-xs text-center lg:text-left">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Totam tempora nam repudiandae a. Non explicabo tempore ex
                      qui sapiente repellat.
                    </p>

                    <button className="btn mt-2 w-full">More...</button>
                  </div>
                </li>

                <li
                  data-aos="fade-down-left"
                  className="flex flex-col gap-y-3 items-center lg:flex-row-reverse lg:gap-x-20 rounded-lg"
                >
                  <div className="content">
                    <h3 className="mb-2 font-semibold text-center lg:text-left">
                      Creative Designs
                    </h3>
                    <p className="text-xs text-center lg:text-left">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Totam tempora nam repudiandae a. Non explicabo tempore ex
                      qui sapiente repellat.
                    </p>

                    <button className="btn mt-2 w-full">More...</button>
                  </div>
                  <div className="">
                    <img className="w-full lg:w-[500px]" src={card2} alt="" />
                  </div>
                </li>

                <li
                  data-aos="fade-down-right"
                  className="flex flex-col gap-y-3 items-center lg:flex-row lg:gap-x-20 rounded-lg"
                >
                  <div className="">
                    <img className="w-full lg:w-[500px]" src={card3} alt="" />
                  </div>

                  <div className="content">
                    <h3 className="mb-2 font-semibold text-center lg:text-left">
                      Moution Designs
                    </h3>
                    <p className="text-xs text-center lg:text-left">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Totam tempora nam repudiandae a. Non explicabo tempore ex
                      qui sapiente repellat.
                    </p>
                    <button className="btn mt-2 w-full">More...</button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section
          className="contact mt-10 pt-5 mb-10"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div className="container">
            <div className="contact_wrapper bg-white p-5 rounded-lg">
              <h2 className="text-center mb-5">Contact with us</h2>
              <div className="contact_content flex flex-col gap-y-3">
                <Input
                  className=""
                  size="sm"
                  variant="outlined"
                  label="Email"
                />

                <Input
                  className=""
                  size="sm"
                  variant="outlined"
                  label="Username"
                />

                <Button color="blue" fullWidth>
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
