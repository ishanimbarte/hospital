import { useEffect, useRef, useState } from "react";
import hospitalImg from "../../assets/hospital-building.png";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(false); // reset
          setTimeout(() => setAnimate(true), 50);
        } else {
          setAnimate(false); // remove when out of view
        }
      },
      {
        threshold: 0.3, // 30% visible = trigger
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`bg-white py-20 opacity-0 ${
        animate ? "animate-fade-up" : ""
      }`}
    >
      <div className="max-w-[1300px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <p className="text-sm font-semibold tracking-widest text-blue-600 mb-4">
              WELCOME TO
            </p>

            <h2 className="text-3xl lg:text-3xl font-bold text-[#0b1f3a] mb-6">
              CareWay Multispeciality Hospital
            </h2>

            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              We function in the healthcare delivery system with a sworn mission
              to provide the highest quality services incorporated with the
              latest technology at an affordable cost to all seeking the best
              in healthcare.
            </p>

            <button className="inline-flex items-center gap-2 text-blue-600 font-medium mb-6 lg:hidden">
              Read More <span className="text-xl">→</span>
            </button>

            <p className="hidden lg:block text-sm text-gray-600 leading-relaxed mb-8">
              Dr. Shrikant Mukewar, widely hailed as the epitome of compassionate
              care, has an acclaimed legacy of more than 40 years of relentless
              pursuit of excellence in the field of Gastroenterology and allied
              specialities.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative max-w-md mx-auto lg:ml-auto">
            <div className="absolute -inset-4 bg-blue-100 rounded-xl -z-10"></div>

            <img
              src={hospitalImg}
              alt="Hospital Building"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
