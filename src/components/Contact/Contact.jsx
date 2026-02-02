import React from "react";

const Contact = () => {
  return (
    <section className="w-full px-6 pt-40 pb-20">
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-6">
        
        {/* LEFT GRADIENT CARD */}
        <div className="flex-1 rounded-[28px] bg-gradient-to-r from-[#132a4a] via-[#35578b] to-[#adb8c8] flex items-center h-14 px-10 py-16">
  
        {/* Stack content vertically */}
        <div className="flex flex-col gap-3">
            <h2 className="text-white text-lg md:text-2xl font-bold tracking-wide">
            CareWay Hospital
            </h2>

            <div className="flex items-center gap-2 text-sm">
            <span className="text-blue-300 font-medium">Home</span>
            <span className="text-white/70">›</span>
            <span className="text-white font-semibold">Contact Us</span>
            </div>
        </div>

        </div>



      </div>
    </section>
  );
};

export default Contact;
