import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import "@fontsource/inter";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Foundation", path: "/foundation" },
  { label: "Departments", path: "/departments" },
  { label: "Specialists", path: "/specialists" },
  { label: "Facilities", path: "/facilities" },
  { label: "Careers", path: "/careers" },
  { label: "Disease", path: "/disease" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const location = useLocation(); // track route changes

  useEffect(() => {
    // Scroll effect on scroll
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false); // close mobile menu when navigating
  }, [location]);

  return (
    <header className="w-full fixed top-0 z-50">
      {/* Top appointment bar */}
      <div className="bg-[#132a4a]">
        <div className="max-w-[1300px] mx-auto px-6 py-2 flex justify-end items-center gap-2 text-white text-sm font-medium">
          <Phone size={14} />
          <span>Appointment: +91-8888888888</span>
        </div>
      </div>

      {/* Main navbar */}
      <div
        className={`transition-all duration-300
        ${scrolled ? "bg-[#132a4a] shadow-md" : "bg-white"}
        `}
      >
        <div className="max-w-[1300px] mx-auto px-2">
          <div className="flex items-center justify-between h-[88px]">
            {/* Logo */}
            <div
              className={`font-inter text-[36px] transition-colors
              ${scrolled ? "text-white" : "text-[#132a4a]"}
              `}
            >
              Care<span className="font-semibold">Way</span>
            </div>

            {/* Desktop Navigation */}
            <nav
              className={`hidden lg:flex items-center gap-10 text-[15px] font-semibold transition-colors
              ${scrolled ? "text-white" : "text-[#1f2937]"}
              `}
            >
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="hover:text-[#0f4fa8] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <button onClick={() => navigate("/admin/login")}>
                Admin
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden transition-colors
              ${scrolled ? "text-white" : "text-[#132a4a]"}
              `}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <nav className="flex flex-col px-6 py-4 gap-4 text-[15px] font-semibold text-[#1f2937]">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="hover:text-[#0f4fa8]"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
