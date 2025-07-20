// import Projects from "../components/home/Projects";
// import Supplies from "../components/home/Supplies";
// import Slide from "../components/slide/Slide";
// const Home = () => {
 

//   return (
//     <div>
//       <Slide />
//       <Projects/>
//       <Supplies/>
//     </div>
//   );
// };
import React from "react";
import {
  LayoutGrid,
  FileText,
  Calendar,
  Image as ImageIcon,
  Search,
  Bell,
  User,
  LogOut,
} from "lucide-react";



export const Home = () => {
  return (
    <div className="relative w-[1440px] h-[1024px] bg-white">
      <div className="flex flex-col w-[280px] h-[1024px] items-center gap-[13px] absolute top-0 left-0 border-r [border-right-style:solid] border-[#d9d9d9]">
        <div className="flex flex-col items-start gap-4 relative flex-1 self-stretch w-full grow">
          <div className="flex items-center justify-center gap-2 px-6 py-8 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#d9d9d9]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Instrument_Sans-Bold',Helvetica] font-bold text-black text-xl tracking-[0] leading-[normal] whitespace-nowrap">
              Operation System
            </div>
          </div>

          <div className="flex flex-col items-start justify-between relative flex-1 self-stretch w-full grow">
            <div className="flex flex-col items-start gap-0.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-center gap-[27px] pl-6 pr-8 py-6 relative self-stretch w-full flex-[0_0_auto]">
                < LayoutGrid
                  className="relative w-6 h-6"
                  alt="Lucide layout grid"
                   
                />

                <div className="relative flex-1 mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-black text-xl tracking-[0] leading-[normal]">
                  Tổng quan
                </div>
              </div>

              <div className="flex w-[272px] items-center gap-[27px] pl-6 pr-8 py-5 relative flex-[0_0_auto]">
                < LayoutGrid
                  className="relative w-6 h-6"
                  alt="Lucide file text"
                   
                />

                <div className="relative flex-1 mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-black text-xl tracking-[0] leading-[normal]">
                  Quản lý công văn
                </div>
              </div>

              <div className="flex items-center gap-[27px] pl-6 pr-8 py-6 relative self-stretch w-full flex-[0_0_auto]">
                < LayoutGrid
                  className="relative w-6 h-6"
                  alt="Lucide layout grid"
                   
                />

                <div className="relative flex-1 mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-black text-xl tracking-[0] leading-[normal]">
                  Lịch &amp; Nhiệm vụ
                </div>
              </div>

              <div className="flex items-center gap-[27px] pl-6 pr-8 py-6 relative self-stretch w-full flex-[0_0_auto]">
                < LayoutGrid
                  className="relative w-6 h-6"
                  alt="Lucide layout grid"
                   
                />

                <div className="flex-1 relative mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-black text-xl tracking-[0] leading-[normal]">
                  Tổng quan
                </div>
              </div>

              <div className="flex items-center gap-[27px] pl-6 pr-8 py-6 relative self-stretch w-full flex-[0_0_auto]">
                < LayoutGrid
                  className="relative w-6 h-6"
                  alt="Lucide layout grid"
                   
                />

                <div className="w-fit whitespace-nowrap relative mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-black text-xl tracking-[0] leading-[normal]">
                  Tổng quan
                </div>
              </div>

              <div className="flex items-center gap-[27px] pl-6 pr-8 py-6 relative self-stretch w-full flex-[0_0_auto]">
                < LayoutGrid
                  className="relative w-6 h-6"
                  alt="Lucide layout grid"
                   
                />

                <div className="w-fit whitespace-nowrap relative mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-black text-xl tracking-[0] leading-[normal]">
                  Tổng quan
                </div>
              </div>
            </div>

            <div className="flex items-center gap-[27px] pl-6 pr-8 py-6 relative self-stretch w-full flex-[0_0_auto]">
              < LayoutGrid
                className="relative w-6 h-6"
                alt="Lucide layout grid"
                 
              />

              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-black text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                Đăng xuất
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-[1160px] h-[88px] items-center gap-[400px] p-8 absolute top-0 left-[280px]">
        <div className="flex items-center gap-3 px-6 py-3 relative flex-1 grow mt-[-9.08px] mb-[-9.08px] rounded-lg border border-solid border-[#d9d9d9]">
          < LayoutGrid
            className="relative w-[20.17px] h-[20.16px] mt-[-1.00px] mb-[-1.00px] ml-[-1.00px]"
            alt="Vector"
             
          />

          <div className="flex w-[75px] items-center gap-2 relative">
            <div className="relative w-[75px] mt-[-1.00px] [font-family:'Arial-Bold',Helvetica] font-bold text-black text-sm tracking-[0] leading-[normal] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical]">
              Tìm kiếm <br />
              tên
            </div>
          </div>
        </div>

        <div className="inline-flex items-center justify-end gap-6 relative flex-[0_0_auto] mt-[-8.00px] mb-[-8.00px]">
          <div className="flex w-[62.19px] items-center justify-between relative">
            <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto]">
              < LayoutGrid
                className="w-[20.17px] ml-[-1.00px] relative h-[22.18px] mt-[-1.00px] mb-[-1.00px] mr-[-1.00px]"
                alt="Vector"
                 
              />

              <div className="flex flex-col w-4 h-4 items-center justify-center gap-2 p-1 absolute -top-2 left-[9px] rounded-[99px] border border-solid border-black [background:linear-gradient(0deg,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_100%)]">
                <div className="relative self-stretch mt-[-2.50px] mb-[-0.50px] [font-family:'Arial-Bold',Helvetica] font-bold text-white text-[10px] text-center tracking-[0] leading-[normal]">
                  3
                </div>
              </div>
            </div>

            < LayoutGrid
              className="w-[22.19px] relative h-[22.18px] mt-[-1.00px] mb-[-1.00px] mr-[-1.00px]"
              alt="Vector"
               
            />
          </div>

          <div className="inline-flex items-center gap-[22px] relative flex-[0_0_auto]">
            <LayoutGrid
              className="relative w-10 h-10 object-cover"
              alt="Ellipse"
              
            />

            <div className="relative w-fit [font-family:'Instrument_Sans-Bold',Helvetica] font-bold text-black text-xl tracking-[0] leading-[normal] whitespace-nowrap">
              Nam
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

 export default Home;
