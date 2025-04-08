import { useState } from 'react';
import Logo from "./picture/website logo (3) 1.svg"
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className=" min-h-32 bg-[rgba(255,250,243,1)] overflow-x-hidden  ">
      <header className="container mx-auto px-4 py-4 max-w-[340px] flex justify-between items-center lg:top-4 relative border-2 border-gray-200 rounded-[100px] shadow-sm lg:max-w-6xl ipad-air:max-w-4xl ipad-mini:max-w-4xl bg-white top-4">
        <div className="flex items-center">
        <img 
            src={Logo} 
            alt="Website Logo" 
            className="h-8 w-auto" // Adjust size as needed
          />
         
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 font-space">
          {["How It Works", "Our Work", "Pricing", "About Us"].map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="hover:text-gray-600"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <button className="bg-black text-white px-5 py-1.5 rounded-full text-sm font-medium hidden md:block font-space">
          Sign In
        </button>
      </header>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 md:hidden">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1"
              >
                <path d="M12 3L4 10V20H20V10L12 3Z" stroke="black" strokeWidth="2" />
              </svg>
              <span className="font-bold text-xl">simply.</span>
            </div>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 focus:outline-none"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="container mx-auto px-4 py-8">
            <nav className="flex flex-col space-y-6">
              {["How It Works", "Our Work", "Pricing", "About Us"].map((item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-gray-800 text-2xl font-medium hover:text-gray-600"
                >
                  {item}
                </a>
              ))}

              <button className="bg-black text-white px-5 py-3 rounded-full text-lg font-medium w-full mt-8">
                Sign In
              </button>
            </nav>
          </div>
        </div>
      )}
      

    </div>
  );
};

export default Navbar;