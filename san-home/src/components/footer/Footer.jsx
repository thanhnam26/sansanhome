import React from 'react'
import { Search, Facebook, Youtube, Instagram, Twitter } from "lucide-react";
const Footer = () => {
  return (
    <div className="bg-black   text-white py-10">
    <div className="container mx-auto px-7">
      <div className="flex flex-col md:flex-row justify-between mb-10">
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-medium mb-4">HOME SAN VIỆT NAM</h3>
          <div className="flex space-x-4 mb-6">
            <a href="https://www.facebook.com/NoiThatHomeSan?mibextid=wwXIfr&rdid=5MTR7kDJjWUsvryj&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1HCycDzdHY%2F%3Fmibextid%3DwwXIfr#" className="text-white hover:text-orange-500">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-white hover:text-orange-500">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" className="text-white hover:text-orange-500">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-white hover:text-orange-500">
              <Twitter className="w-5 h-5" />
            </a>
            {/* Pinterest icon using SVG instead */}
            <a href="#" className="text-white hover:text-orange-500">
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
              </svg>
            </a>
          </div>

          <div className="text-sm text-gray-400">
            <p className="font-medium text-white mb-2">
              CÔNG TY TNHH KIẾN TRÚC HOME SAN VIỆT NAM
            </p>
            <p className="mb-1">Mã số thuế: 0107453002</p>
            <p className="mb-1">
            Toà GS2 0317 Vinhomes Smart, Hanoi, Vietnam
            </p>
            <p className="mb-1">
              Chi nhánh Long Biên: LK B10 (AQH Riverside), đường Nam Dương,
              Quận Long Biên, Thành phố Hà Nội
            </p>
            <p className="mb-1">
              Nhà máy: Số 8 Thôn 3, X, Canh Nậu, H. Thạch Thất, Tp Hà Nội
            </p>
            <p className="mb-1">
              Hotline:{" "}
              <a href="tel:0917266996" className="hover:text-orange-500">
              098 138 32 93
              </a>{" "}
              | Email:{" "}
              <a
                href="noithathomesan@gmail.com"
                className="hover:text-orange-500"
              >
                noithathomesan@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <ul className="space-y-2 text-sm">
              <li>
                <p  className="hover:text-orange-500 text-white">
                  Về chúng tôi
                </p>
              </li>
              <li>
                <p className="hover:text-orange-500">
                  Tuyển dụng
                </p>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2 text-sm">
              <li>
                <p className="hover:text-orange-500">
                  Tiêu chuẩn chất lượng
                </p>
              </li>
              <li>
                <p className="hover:text-orange-500">
                  Bảo hành & bảo trì
                </p>
              </li>
              <li>
                <p className="hover:text-orange-500">
                  Cam kết từ HOME SAN Việt Nam
                </p>
              </li>
              <li>
                <p className="hover:text-orange-500">
                  Hướng dẫn thanh toán
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pt-6 border-t border-gray-800 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
        <p>Copyright © 2016 HOME SAN VIETNAM. All Rights Reserved</p>
        <div className="flex mt-4 md:mt-0">
          <p className="hover:text-orange-500 mx-2">
            Chính sách bảo mật
          </p>
          <span className="mx-2">|</span>
          <p className="hover:text-orange-500 mx-2">
            Điều khoản sử dụng
          </p>
        </div>
      </div>
    </div>

    <div className="fixed bottom-6 right-6">
      <button className="bg-orange-500 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-orange-600 transition-colors">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </button>
    </div>
  </div>
  )
}

export default Footer
