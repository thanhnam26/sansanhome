import React from "react";
import { Link } from "react-router";
import { Search, Facebook, Youtube, Instagram, Twitter } from "lucide-react";
const Header = () => {
  return (
    <div>
      {" "}
      <div className=" top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center">
            <div className="mr-4">
              <Link to="/">
                <img src="/images/logo.png" alt="San Home" className="h-15" />
              </Link>
            </div>
          </div>
          <nav className="hidden md:flex items-center">
            <ul className="flex space-x-8 text-gray-800 font-medium uppercase">
              <li>
                <Link
                  to="/infor"
                  className="hover:text-orange-500 transition-colors "
                >
                  {" "}
                  GIỚI THIỆU
                </Link>
              </li>
              <li className="hover:text-orange-500 transition-colors">
                THIẾT KẾ NỘI THẤT
              </li>
              <li>
              <Link
                  to="/projects"
                  className="hover:text-orange-500 transition-colors "
                >
                  {" "}
                  CÔNG TRÌNH
                </Link>
              </li>
              
              <li className="hover:text-orange-500 transition-colors">
                TIN TỨC
              </li>
              <li className="hover:text-orange-500 transition-colors">
                LIÊN HỆ
              </li>
            </ul>
          </nav>
          <div className="flex items-center">
            <button className="p-2" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
