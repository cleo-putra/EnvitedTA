import React, { useContext, useRef, useState } from "react";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false)

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="mx-auto bg-[#F6F2FF] rounded-xl overflow-hidden md:p-24 md:pl-44">
      <div className="md:flex">
      <div className="p-5">
        <span className="font-bold text-[#240D57] text-sm md:text-lg">Edit Event</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="p-5">
        <form ref={form}>
          <label>
            Select Date and Time
          </label>
          <input type="text" name="user_name" className="user"  placeholder="date"/>
          <input type="email" name="user_email" className="user" placeholder="street"/>
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;