import { useEffect, useRef, useState } from "react";
import Img1 from "../../assets/Cards/heart-rate.png";
import Img2 from "../../assets/Cards/medical-book.png";
import Img3 from "../../assets/Cards/syrup.png";
import Img4 from "../../assets/Cards/health.png";

const features = [
  {
    title: "Care with Humility",
    description:
      "At Midas Hospital every patient gets the best clinical treatment with utmost humility.",
    image: Img1,
  },
  {
    title: "Experience & Expertise",
    description:
      "At Midas Hospital we have consultants who are highly experienced with sterling expertise in their areas of specialization.",
    image: Img2,
  },
  {
    title: "High Standards of Clinical Care",
    description:
      "Provision of Clinical Care matching International Standards at an affordable cost is our mission.",
    image: Img3,
  },
  {
    title: "Patient First Policy",
    description:
      'At Midas Hospital anything and everything we do is solely focused on the philosophy of "Patient’s interest are paramount & must come first"',
    image: Img4,
  },
];

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(false);
          setTimeout(() => setVisible(true), 50);
        } else {
          setVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-20 sm:py-12">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-2xl font-semibold text-gray-800">
            Why Choose Us?
          </h2>
          <div className="w-16 h-1 bg-[#132a4a] mx-auto mt-3 rounded"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              style={{
                animationDelay: `${index * 1}s`,
              }}
              className={`border border-[#132a4a] rounded-md p-4 sm:p-6 text-center hover:shadow-lg transition
                opacity-0 ${visible ? "animate-fade-up" : ""}`}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-blue-200 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />
              </div>

              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
