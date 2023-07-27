import React, { useEffect } from "react";
import card1 from "../../assets/images/card1.png";
import card2 from "../../assets/images/card2.png";
import card3 from "../../assets/images/card3.png";
import "./Price.scss"; 
import AOS from "aos"; 
import "aos/dist/aos.css"; 

const Price = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  const plans = [
    {
      title: "Programming",
      image: card1,
      price: "$99/month",
      description:
        "Get access to our wide range of programming tutorials and courses. resources",
    },
    {
      title: "Graphic Design",
      image: card2,
      price: "$89/month",
      description:
        "Unlock your creative potential with our graphic design resources.",
    },
    {
      title: "Motion Graphics",
      image: card3,
      price: "$109/month",
      description:
        "Learn how to create stunning motion graphics and animations.",
    },
  ];

  return (
    <div className="container mx-auto mt-5">
      <h1
        className="text-3xl text-gray-700 font-semibold mb-6"
        data-aos="fade-up" // Example AOS animation on heading
      >
        Choose Your Plan
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {plans.map((plan) => (
          <div
            key={plan.title}
            className="card-container bg-white shadow-lg p-1 rounded-lg"
            data-aos="fade-up" 
          >
            <img
              src={plan.image}
              alt={plan.title}
              className="w-full h-40 object-cover rounded-lg mb-2 card-image"
            />
            <div className="p-4">
              <h2 className="text-mg mb-3 text-center font-semibold">
                {plan.title}
              </h2>
              <p className="text-gray-500 text-sm text-center">
                {plan.description}
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-2xl font-semibold">{plan.price}</span>
              </div>
              <button className="px-4 w-full py-2 bg-blue-500 text-white rounded">
                Subscribe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Price;
