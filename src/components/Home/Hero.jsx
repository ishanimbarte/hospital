import heroImg from "../../assets/hospital-hero.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* Animations CSS */}
      <style>{`
        section {
          animation: heroFade 1s ease-out forwards;
        }
        section > img {
          animation: heroZoom 20s ease-in-out forwards;
        }
        section > div.absolute {
          animation: overlayFade 1.2s ease-out forwards;
        }
        section .relative.z-10 > div {
          animation: textSlideUp 1.1s ease-out forwards;
        }
        section button {
          animation: buttonPop 0.9s ease-out forwards;
        }
        @keyframes heroFade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes heroZoom { from { transform: scale(1); } to { transform: scale(1.1); } }
        @keyframes overlayFade { from { opacity: 0; } to { opacity: 0.7; } }
        @keyframes textSlideUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes buttonPop { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
      `}</style>

      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <img
          src={heroImg}
          alt="Hospital background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#0b1f3a]/70"></div>

        {/* Content */}
        <div className="relative z-10 max-w-[1300px] mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl text-white text-center mt-40 sm:text-left">
            <p className="text-sm font-semibold tracking-widest text-blue-200 mb-3">
              CARING FOR LIFE
            </p>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Leading the Way in <br />
              Medical Excellence
            </h1>

            <p className="text-base sm:text-lg text-gray-200 mb-4">
              World-class healthcare services with advanced technology,
              compassionate doctors, and trusted care.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate("/appointment")}
                className="bg-[#0f4fa8] hover:bg-[#0c3f8a] active:scale-95 px-5 py-2 rounded-md font-medium transition"
              >
                Book Appointment
              </button>

              <div
                className="border border-white/80 hover:bg-white hover:text-[#0b1f3a] px-5 py-2 rounded-md font-medium transition cursor-pointer"
                onClick={() => navigate("/services")}
              >
                Our Services
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
