import React from "react";

export default function FoundationHero() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: Logo */}
        <div className="flex justify-center md:justify-start mb-8 md:mb-0">
  <div className="text-center md:text-center w-full md:w-auto">
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight
                   px-4 md:pl-40 md:px-0">
      <span className="font-inter text-blue-900">
        Care<span className="font-semibold">Way</span>
      </span>
      <span className="block text-gray-500 text-xl sm:text-2xl md:text-3xl mt-2">
        FOUNDATION
      </span>
    </h1>
  </div>
</div>


        {/* Right: Content */}
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-semibold text-gray-800">
            CareWay <span className="text-blue-600">Medical</span> Foundation
          </h2>

          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            Being a true healthcare provider, at Midas, we feel it is our responsibility to provide healthcare education to be able to build a healthy and aware future.
          </p>

          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            As an unconditional service to the healthcare providers and also to the general population, Midas Foundation has been conducting Continuous Medical Education programs at local as well as national level. Moreover, it has been a constant endeavor by Midas Foundation for conducting health check-up camps for specific disease segments, and activities such as fire drills among general population.
          </p>

          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            If you are a healthcare provider or are interested in volunteering services to needy patients, you can certainly join hands with us to contribute to this noble cause.
          </p>
        </div>
      </div>

      {/* Decorative right graphic */}
      <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-blue-100/60 to-transparent hidden lg:block" />
    </section>
  );
}
