import React from 'react'

const Supplies = () => {
    const projects = [
        {
          title: "CHUNG CƯ VINHOME PARK CITY",
          image: "/images/panner3.jpg",
        },
        {
          title: "CHUNG CƯ AN LAND LAKE VIEW",
          image: "/images/panner2.jpg",
        },
        {
            title: "CHUNG CƯ AN LAND LAKE VIEW",
            image: "/images/panner2.jpg",
          },
          {
            title: "CHUNG CƯ AN LAND LAKE VIEW",
            image: "/images/panner2.jpg",
          },
      ];
  return (
    <div className=" bg-white">
        <section className="py-10">
          <div className="container mx-auto px-9">
            {/* Tiêu đề */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold uppercase text-black">
              MỘT SỐ VẬT TƯ NỔI BẬT
              </h2>
             
            </div>

            {/* Danh sách dự án */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {projects.map((project, index) => (
                <div key={index} className="group">
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-xl text-black font-semibold uppercase">
                      {project.title}
                    </h3>
                    <div className="mt-2">
                      <a
                        href={project.link || "#"}
                        className="inline-flex items-center text-black hover:text-orange-500 transition-colors"
                      >
                        <span className="mr-1">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
  )
}

export default Supplies
