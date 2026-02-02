import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-[#16284c] text-gray-300">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div>
          <div className="font-inter text-[36px] text-[#eff0f1] mb-2">
              Care<span className="font-semibold">Way</span>
            </div>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Enhancing Patient Care Through Operational Efficiency
          </p>
          <button className="border border-cyan-400 text-cyan-400 px-6 py-2 rounded-full hover:bg-cyan-400 hover:text-[#16284c] transition">
            <Link to="/contact">Contact Us</Link>
          </button>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white text-md font-semibold mb-2">Company</h3>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/foundation" className="hover:text-white">Foundation</Link></li>
            <li><Link to="/departments" className="hover:text-white">Departments</Link></li>
            <li><Link to="/specialists" className="hover:text-white">Specialists</Link></li>
            <li><Link to="/facilities" className="hover:text-white">Facilities</Link></li>
            <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
            <li><Link to="/disease" className="hover:text-white">Diseases</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white text-md font-semibold mb-2">Services</h3>
          <ul className="space-y-2">
            <li><Link to="/services" className="hover:text-white">General Medicine</Link></li>
            <li><Link to="/services" className="hover:text-white">Cardiology</Link></li>
            <li><Link to="/services" className="hover:text-white">Neurology</Link></li>
            <li><Link to="/services" className="hover:text-white">Orthopedics</Link></li>
            <li><Link to="/services" className="hover:text-white">Pediatrics</Link></li>
            <li><Link to="/services" className="hover:text-white">Ophthalmology</Link></li>
            <li><Link to="/services" className="hover:text-white">Vaccination</Link></li>
            <li><Link to="/services" className="hover:text-white">24/7 Emergency</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-2">Connect</h3>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-white text-xl cursor-pointer">in
              <i className="bi bi-linkedin"></i>
            </span>
            <span className="text-white text-xl cursor-pointer">▶</span>
          </div>

          <p className="text-white font-medium mb-3">
            Get our newsletter
          </p>

          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="px-2 py-1 rounded-md w-40 h-10 text-gray-800 outline-none"
            />
            <button className="bg-[#3f5fa3] text-white px-2 py-2 rounded-full w-50 h-10 hover:bg-[#4c6ecb] transition">
              Sign up!
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-blue-400/40"></div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>CareWay</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span className="hover:text-white cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer">Terms & conditions</span>
          <span className="hover:text-white cursor-pointer">Contact</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
