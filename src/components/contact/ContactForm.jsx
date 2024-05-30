import React from "react";
import Button from "../button/Button";
import SectionTitle from "../title/SectionTitle";

const Input = ({ type = "text", id, name, label, className }) => {
  return (
    <div className="relative">
      <label htmlFor={id} className="leading-7 text-sm text-slate-600">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          className={`w-full bg-slate-100 bg-opacity-50 rounded border border-slate-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-slate-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out ${className}`}
        ></textarea>
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          className={`w-full bg-slate-100 bg-opacity-50 rounded border border-slate-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-slate-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${className}`}
        />
      )}
    </div>
  );
};

function ContactForm() {
  return (
    <div className="page py-20 px-4 md:px-12">
      <div className="flex flex-col text-center w-full mb-12 text-slate-900">
        <SectionTitle>Contact Us</SectionTitle>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-sm">
          Feel free to contact us? Submit your message here and we will get back
          to you as soon as possible.
        </p>
      </div>
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <div className="flex flex-wrap -m-2">
          <div className="p-2 w-1/2">
            <Input type="text" id="name" name="name" label="Name" />
          </div>
          <div className="p-2 w-1/2">
            <Input type="email" id="email" name="email" label="Email" />
          </div>
          <div className="p-2 w-1/2">
            <Input type="tel" id="tel" name="phone" label="Phone Number" />
          </div>
          <div className="p-2 w-1/2">
            <Input type="text" id="text" name="subject" label="Subject" />
          </div>
          <div className="p-2 w-full">
            <Input
              type="textarea"
              id="message"
              name="message"
              label="Message"
            />
          </div>
          <div className="p-2 w-full">
            <Button className="bg-main text-white uppercase">
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
