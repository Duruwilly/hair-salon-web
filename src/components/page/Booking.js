import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import Toast from "../Toast";

const inputClass =
  "my-2 mx-0 w-full p-3 border border-white block bg-transparent text-white focus:outline-none focus:bg-white focus:text-black placeholder-white";

const Booking = () => {
  const form = useRef();
  const serviceId = process.env.REACT_APP_YOUR_SERVICE_ID;
  const templateId = process.env.REACT_APP_YOUR_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_YOUR_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
        toast.success("message sent succesfully");
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <>
      <Toast />
      <section className="flex justify-center text-whit py-8 px-4">
        <div className=" w-full max-w-screen-lg">
          <h3 className="m-0 font-bold text-4xl text-center text-white capitalize">
            bookings
          </h3>
          <p className="text-center opacity-95 mt-3 text-white">
            Book an appointment with us for any kind of services provided by our
            salon.
          </p>
          <form ref={form} onSubmit={sendEmail} className="mt-8">
            <input
              type="text"
              required
              placeholder="FullName"
              name="name"
              className={inputClass}
            />
            <input
              type="text"
              required
              placeholder="Email"
              name="email"
              className={inputClass}
            />
            <input
              type="tel"
              required
              name="phone"
              placeholder="Phone Numer"
              className={inputClass}
            />
            <select name="services" className={inputClass} required>
              <option value="">Select Service</option>
              <option value="male haircut">male haircut</option>
              <option value="female haircut">female haircut</option>
              <option value="manicure and pedicure">
                manicure and pedicure
              </option>
              <option value="manicure">manicure</option>
              <option value="pedicure">pedicure</option>
              <option value="spa">spa</option>
              <option value="massage">massage</option>
              <option value="hair treatment">hair treatment</option>
            </select>
            <select name="location" className={inputClass} required>
              <option value="in-service">in-service</option>
              <option value="home service">home service</option>
            </select>
            <input
              type="datetime-local"
              required
              name="date_time"
              className={inputClass}
            />
            <textarea
              name="message"
              required
              placeholder="Message"
              className="h-36 my-2 mx-0 w-full p-3 border border-white block bg-transparent text-white focus:outline-none focus:bg-white focus:text-black placeholder-white"
            ></textarea>
            <button
              type="submit"
              className="w-full p-3 bg-mobile-nav-bg uppercase font-bold hover:bg-transparent hover:text-white hover:border"
            >
              submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Booking;
