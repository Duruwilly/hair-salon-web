import React from "react";
import { Link } from "react-router-dom";
import servicesImg from "../assets/services.jpg";
import { useGlobalContext } from "../context/ContextWrapper";

const Services = () => {
  const { services } = useGlobalContext();
  return (
    <section
      className="bg-main-secondary-bg flex justify-center px-4 pt-12 pb-6 relative"
      ref={services}
    >
      <div className="w-full max-w-screen-lg">
        <h2 className="after:bg-main-dark-bg after:w-[11%] after:left-[46.3%]">
          our services
        </h2>
        <div className="grid md:grid-cols-2 gap-2 md:gap-0 mt-6 md:mt-10">
          <h1 className="text-3xl md:text-4xl font-bold capitalize">
            what we provide to our customer
          </h1>
          <p>
            We offer the best services ranging from haircut, spa, manicure,
            pedicure, massage, home service, skin care products, hair care
            product etc.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-16 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-max">
            <div className="flex flex-col gap-4 row-end-3 md:row-end-auto">
              <div className="bg-main-bg py-10 px-5 text-center flex flex-col items-center drop-shadow-xl">
                <img
                  src={servicesImg}
                  alt="services"
                  className="w-full object-cover h-52"
                />
                <h3 className="font-bold text-lg mt-5">haircut styles</h3>
                <p>
                  Get the best haitcut ranging from dread, afro etc. from our
                  salon.
                </p>
              </div>

              <div className="bg-main-bg py-10 px-5 text-center flex flex-col items-center drop-shadow-xl">
                <img
                  src={servicesImg}
                  alt="services"
                  className="w-full object-cover h-52"
                />
                <h3 className="font-bold text-lg mt-5">haircut straight</h3>
                <p>
                  for every kind and style of female hair, we offer that
                  service.
                </p>
              </div>
              <Link to="/services" className="mt-2 md:mt-12 text-white">
                <span className="bg-main-dark-bg pl-2 py-3 capitalize">
                  view more s
                </span>
                <span>ervices</span>
              </Link>
            </div>

            <div className="flex flex-col gap-4 mt-0 md:mt-24 drop-shadow-xl">
              <div className="bg-main-bg py-10 px-5 text-center flex flex-col items-center drop-shadow-xl">
                <img
                  src={servicesImg}
                  alt="services"
                  className="w-full object-cover h-52"
                />
                <h3 className="font-bold text-lg mt-5">haircut styles</h3>
                <p>
                  Get the best haitcut ranging from dread, afro etc. from our
                  salon.
                </p>
              </div>

              <div className="bg-main-bg py-10 px-5 text-center flex flex-col items-center drop-shadow-xl">
                <img
                  src={servicesImg}
                  alt="services"
                  className="w-full object-cover h-52"
                />
                <h3 className="font-bold text-lg mt-5">haircut styles</h3>
                <p>
                  Get the best haitcut ranging from dread, afro etc. from our
                  salon.
                </p>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src={servicesImg}
              alt="services"
              className="w-full object-cover h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
