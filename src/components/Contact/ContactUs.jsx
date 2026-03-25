import React from "react";
import Img from "../../assets/contactBg.jpeg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ContactUs() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [message,setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message
      })
    });

    const data = await res.json();

    if (res.ok) {

      alert("Message sent successfully ✅");

      // clear form
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");

      // redirect to home page
      navigate("/");

    } else {

      alert(data.message || "Something went wrong");

    }

  } catch (error) {

    console.log(error);
    alert("Server error");

  }
};

// contact
  return (
  <section
    className="relative min-h-[70vh] bg-cover bg-center flex items-center"
    style={{ backgroundImage: `url(${Img})` }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-slate-900/70"></div>

    <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-6 
                    grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-40 text-white">
      
      {/* Left Info */}
      <div className="space-y-6 md:space-y-6 
                      bg-slate-900/50 md:bg-transparent 
                      rounded-2xl p-6 md:p-0 backdrop-blur-sm">
        
        <h1 className="text-2xl md:text-3xl font-semibold text-center md:text-left">
          Contact Us
        </h1>

        <div className="text-center md:text-left">
          <p className="font-semibold mb-1">Call us</p>
          <ul className="space-y-1 text-sm">
            <li>+91 8888888888</li>
            <li>+91 8888888888</li>
            <li>+91 8888888888</li>
          </ul>
        </div>

        <hr className="border-white/30 w-32 md:w-64 mx-auto md:mx-0" />

        <div className="text-center md:text-left">
          <p className="font-semibold mb-1">Email us</p>
          <ul className="space-y-1 text-sm">
            <li>sales@inhpl.com</li>
            <li>info@inhpl.com</li>
          </ul>
        </div>

        <hr className="border-white/30 w-32 md:w-64 mx-auto md:mx-0" />

        <div className="text-sm leading-relaxed text-center md:text-left">
          <p className="font-semibold mb-1">
            INORBVICT HEALTHCARE INDIA PVT. LTD.
          </p>
          <p>
            Office No. 822, 8th Flr, Solitaire Business Hub, Balewadi Highstreet,
            Baner, Pune, MH-411045, India.
          </p>
        </div>
      </div>

      {/* Right Form */}
      <div className="flex justify-center md:justify-start">
        <form 
        onSubmit={handleSubmit}
        className="bg-white text-black w-full max-w-md rounded-2xl 
                         p-6 space-y-4 shadow-xl md:bg-transparent md:p-0 md:shadow-none">
          
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="w-full rounded-full px-5 py-3 border focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full rounded-full px-5 py-3 border focus:outline-none"
          />
          <input
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            className="w-full rounded-full px-5 py-3 border focus:outline-none"
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            rows="4"
            className="w-full rounded-xl px-5 py-3 border focus:outline-none"
          ></textarea>

          <button
            type="submit"
            className="w-full md:w-auto bg-gradient-to-r 
                       from-[#132a4a] via-[#35578b] to-[#adb8c8] 
                       text-white px-8 py-2 rounded-full 
                       border border-white md:border-white/60"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </section>
);

}
