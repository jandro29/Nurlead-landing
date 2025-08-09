export default function Component() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-[#e79ffc] to-[#9435ae] overflow-hidden">
        <div className="container mx-auto px-4 py-20 relative">
          {/* Floating Badges */}
          <div className="absolute lg:top-20 lg:left-20">
            <div className="bg-white rounded-full px-6 py-3 shadow-lg origin-bottom rotate-12">
              <span className="text-[#9435ae] font-bold">BBDO</span>
            </div>
          </div>

          <div className="absolute lg:top-16 lg:right-32 right-10">
            <div className="bg-white rounded-full px-6 py-3 shadow-lg origin-bottom rotate-12">
              <span className="text-[#9435ae] font-bold ">McCANN</span>
            </div>
          </div>

          <div className="absolute top-80 left-32 lg:block hidden">
            <div className="bg-white rounded-full px-6 py-3 shadow-lg origin-bottom rotate-12">
              <span className="text-[#9435ae] font-bold">VML & R</span>
            </div>
          </div>

          <div className="absolute top-72 right-20 lg:block hidden">
            <div className="bg-white rounded-full px-6 py-3 shadow-lg origin-bottom rotate-12">
              <span className="text-[#9435ae] font-bold">Fahrenheit DDB</span>
            </div>
          </div>

          <div className="absolute  left-1/2 transform -translate-x-1/2 lg:block hidden">
            <div className="bg-white rounded-full px-6 py-3 shadow-lg origin-bottom rotate-12">
              <span className="text-[#9435ae] font-bold">Havas</span>
            </div>
          </div>

          {/* componente responsive */}
          <div className="absolute mt-[10.5rem] left-1/2 transform -translate-x-1/2 block lg:hidden">
            <div className="bg-white rounded-full px-6 py-3 shadow-lg origin-bottom rotate-12">
              <span className="text-[#9435ae] font-bold">Havas</span>
            </div>
          </div>

          <div className="absolute top-80 left-10 block lg:hidden mt-[2rem]">
            <div className="bg-white rounded-full px-6 py-3 shadow-lg origin-bottom rotate-12">
              <span className="text-[#9435ae] font-bold">VML & R</span>
            </div>
          </div>

          <div className="absolute top-72 right-8 block lg:hidden mt-[5rem]">
            <div className="bg-white rounded-full px-6 py-3 shadow-lg origin-bottom rotate-12">
              <span className="text-[#9435ae] font-bold">Fahrenheit DDB</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center pt-32 ">
            <h1 className="text-6xl md:text-8xl font-bold text-[#9435ae] mb-8 relative z-[999999999999]">
              Heading in here
            </h1>

            <div className="mt-[95px]">
              <p className="text-[#9435ae] text-xl mb-8 relative z-[999999999999]">
                Text support
              </p>
            </div>

            <div className="w-[100%] flex justify-center cursor-pointer">
              <a className="bg-[#9435ae] rounded-full px-6 py-3 shadow-lg w-[209px] text-white font-bold">
                Quiero unirme
              </a>
            </div>

            {/* Logo and Stats */}
            <div className="flex items-center justify-center gap-4 mt-[20px]">
              <div className="flex gap-2">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              </div>
              <span className="text-[#9435ae] font-medium">
                +1,000 creativos inscritos
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#9435ae] py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
            LA COMUNIDAD CON MÁS
            <br />
            TALENTO...
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                +1000
              </div>
              <p className="text-white text-lg">
                Creativos en
                <br />
                Latam
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                +800
              </div>
              <p className="text-white text-lg">
                Asistentes en
                <br />
                Workshops
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                +30%
              </div>
              <p className="text-white text-lg">
                Visibilidad para
                <br />
                marcas personales
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                +15%
              </div>
              <p className="text-white text-lg">
                Empleos remotos
                <br />
                generados
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sub Heading Section */}
      <section className="bg-[#2a1240] py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                SUB HEADING
              </h2>
              <p className="text-white text-lg">Text support</p>
            </div>
            <div className="relative">
              <div className="bg-[#e79ffc] rounded-2xl aspect-video relative overflow-hidden">
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 400 300"
                >
                  <line
                    x1="0"
                    y1="0"
                    x2="400"
                    y2="300"
                    stroke="white"
                    strokeWidth="2"
                    opacity="0.5"
                  />
                  <line
                    x1="400"
                    y1="0"
                    x2="0"
                    y2="300"
                    stroke="white"
                    strokeWidth="2"
                    opacity="0.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="bg-[#fbdcff] py-20">
        <div className="container mx-auto px-4">
          <div className=" justify-center items-center mb-12 grid lg:grid-cols-6 gap-4">
            <div className="col-start-2 col-end-3">
              <div className="bg-[#9435ae] rounded-2xl p-8 w-48 h-64 relative origin-bottom -rotate-12 ">
                <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="text-white">
                  <div className="font-bold text-lg mb-2">Title</div>
                  <div className="text-sm">Text</div>
                </div>
              </div>
            </div>

            <div className="col-span-2 col-end-7">
              <div className="bg-[#9435ae] rounded-2xl p-8 w-48 h-64 relative origin-bottom rotate-12">
                <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="text-white">
                  <div className="font-bold text-lg mb-2">Title</div>
                  <div className="text-sm">Text</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-[70px] font-bold text-[#9435ae] mb-[7rem] mt-[7rem]">
              Sub Heading
            </h3>
          </div>

          <div className=" justify-center items-center mb-[2rem] grid grid-cols-10 gap-4">
            <div className="col-start-2 col-end-2">
              <div className="bg-[#9435ae] rounded-2xl p-8 w-48 h-64 relative origin-bottom -rotate-12 ">
                <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="text-white">
                  <div className="font-bold text-lg mb-2">Title</div>
                  <div className="text-sm">Text</div>
                </div>
              </div>
            </div>

            <div className="col-span-2 col-end-7">
              <div className="bg-[#9435ae] rounded-2xl p-8 w-48 h-64 relative ">
                <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="text-white">
                  <div className="font-bold text-lg mb-2">Title</div>
                  <div className="text-sm">Text</div>
                </div>
              </div>
            </div>

            <div className="col-span-2 col-end-10">
              <div className="bg-[#9435ae] rounded-2xl p-8 w-48 h-64 relative origin-bottom rotate-12">
                <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="text-white">
                  <div className="font-bold text-lg mb-2">Title</div>
                  <div className="text-sm">Text</div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative circles */}
          <div className="absolute bottom-10 left-10 w-8 h-8 bg-gray-300 rounded-full opacity-50"></div>
          <div className="absolute bottom-10 right-10 w-8 h-8 bg-gray-300 rounded-full opacity-50"></div>
        </div>
      </section>

      {/* Presentation Section */}

      <section className="bg-[#CB6CB6] py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-6 gap-4 text-white">
            <div className="col-start-1 col-end-3 text-[70px]">
              <h4>Sub Heading</h4>
            </div>

            <div className="col-span-2 col-end-8 text-[30px] flex items-center">
              <p>Text support</p>
            </div>
          </div>

          <div className="flex w-[100%] items-center justify-center mt-[100px]">
            <div className="w-[90%] grid grid-rows-1 gap-4">
              <div className="flex row-span-1 row-end-2 justify-center">
                <div className="bg-[#e79ffc] rounded-2xl aspect-video relative overflow-hidden  h-[465px] w-[380px]"></div>
              </div>

              <div className="flex row-span-2 row-end-3 justify-center">
                <div className="bg-[#e79ffc] rounded-2xl aspect-video relative overflow-hidden h-[200px] w-[353px]"></div>
              </div>

              <div className="flex row-start-1 row-end-4 justify-center">
                <div className="bg-[#e79ffc] rounded-2xl aspect-video relative overflow-hidden h-[340px] w-[420px]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Section items*/}

      <section className="bg-[#DB7BF6] py-20">
        <div className="container mx-auto px-4">
          <div className="w-[100%] flex justify-center">
            <h4 className="text-[70px] font-semibold text-white">
              Sub Heading
            </h4>
          </div>

          <div className="w-[100%] flex justify-center">
            <p className="30px text-white">Text support</p>
          </div>
        </div>

        <div className="flex w-[100%] justify-center mt-[70px]">
          <div className="flex flex-col w-[60%]">
            <div className="bg-[#e79ffc] rounded-2xl aspect-video relative overflow-hidden row-start-1 row-end-4 h-[110px]">
              <div className="grid grid-cols-2 h-[100%] bg-[#9C3A7F]">
                <div className="flex items-center bg-[#6D2E59] rounded-r-2xl">
                  <div className="ml-8 text-white text-[35px] semibold">
                    Item 01
                  </div>
                </div>
                <div className="flex items-center justify-center bg-[#9C3A7F]">
                  <div className="text-white text-[25px]">Text...</div>
                </div>
              </div>
            </div>

            <div className="bg-[#e79ffc] rounded-2xl aspect-video relative overflow-hidden row-start-1 row-end-4 h-[110px]">
              <div className="grid grid-cols-2 h-[100%] bg-[#9C3A7F]">
                <div className="flex items-center bg-[#6D2E59] rounded-r-2xl">
                  <div className="ml-8 text-white text-[35px] semibold">
                    Item 02
                  </div>
                </div>
                <div className="flex items-center justify-center bg-[#9C3A7F]">
                  <div className="text-white text-[25px]">Text...</div>
                </div>
              </div>
            </div>

            <div className="bg-[#e79ffc] rounded-2xl aspect-video relative overflow-hidden row-start-1 row-end-4 h-[110px]">
              <div className="grid grid-cols-2 h-[100%] bg-[#9C3A7F]">
                <div className="flex items-center bg-[#6D2E59] rounded-r-2xl">
                  <div className="ml-8 text-white text-[35px] semibold">
                    Item 03
                  </div>
                </div>
                <div className="flex items-center justify-center bg-[#9C3A7F]">
                  <div className="text-white text-[25px]">Text...</div>
                </div>
              </div>
            </div>

            <div className="bg-[#e79ffc] rounded-2xl aspect-video relative overflow-hidden row-start-1 row-end-4 h-[110px]">
              <div className="grid grid-cols-2 h-[100%] bg-[#9C3A7F]">
                <div className="flex items-center bg-[#6D2E59] rounded-r-2xl">
                  <div className="ml-8 text-white text-[35px] semibold">
                    Item 04
                  </div>
                </div>
                <div className="flex items-center justify-center bg-[#9C3A7F]">
                  <div className="text-white text-[25px]">Text...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Section comentarios*/}

      <section className="bg-[#FBDCFF] py-20">
        <div className="container mx-auto px-4">
          <div className="w-[100%] flex justify-center">
            <h4 className="text-[70px] font-semibold text-[#9435AE]">
              Sub Heading
            </h4>
          </div>

          <div className="flex justify-center mt-[140px]">
            <div className="grid grid-cols-4 gap-4">
              <div className="w-[259px] h-[205px] bg-[#DCC1FF] rounded-lg">
                <div className="w-[100%] h-[140px] border rounded-lg border-black">
                  <div className="m-4">
                    <p>“Comments in here”</p>
                  </div>
                </div>
                <div className="flex items-center justify-start mt-[15px]">
                  <i className="w-[30px] h-[30px] bg-white rounded-[100%] mr-[15px] ml-[15px]">
                    <img src="" alt="" />
                  </i>
                  <p>Tag in here</p>
                </div>
              </div>

              <div className="w-[259px] h-[205px] bg-[#DCC1FF] rounded-lg">
                <div className="w-[100%] h-[140px] border rounded-lg border-black">
                  <div className="m-4">
                    <p>“Comments in here”</p>
                  </div>
                </div>
                <div className="flex items-center justify-start mt-[15px]">
                  <i className="w-[30px] h-[30px] bg-white rounded-[100%] mr-[15px] ml-[15px]">
                    <img src="" alt="" />
                  </i>
                  <p>Tag in here</p>
                </div>
              </div>

              <div className="w-[259px] h-[205px] bg-[#DCC1FF] rounded-lg">
                <div className="w-[100%] h-[140px] border rounded-lg border-black">
                  <div className="m-4">
                    <p>“Comments in here”</p>
                  </div>
                </div>
                <div className="flex items-center justify-start mt-[15px]">
                  <i className="w-[30px] h-[30px] bg-white rounded-[100%] mr-[15px] ml-[15px]">
                    <img src="" alt="" />
                  </i>
                  <p>Tag in here</p>
                </div>
              </div>

              <div className="w-[259px] h-[205px] bg-[#DCC1FF] rounded-lg">
                <div className="w-[100%] h-[140px] border rounded-lg border-black">
                  <div className="m-4">
                    <p>“Comments in here”</p>
                  </div>
                </div>
                <div className="flex items-center justify-start mt-[15px]">
                  <i className="w-[30px] h-[30px] bg-white rounded-[100%] mr-[15px] ml-[15px]">
                    <img src="" alt="" />
                  </i>
                  <p>Tag in here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Last section*/}

      <section className="bg-[#E79FFC] py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 m-8">
            <div className="flex flex-col">
              <h4
                className="text-[#9435AE] text-[70px] font-bold
"
              >
                Sé parte de la comunidad de creativos
              </h4>
              <p className="text-[#9435AE] text-[35px]">
                Conoce a +1000 creativos en todo latam y participa de los
                eventos de Nurlead.
              </p>

              <div className=" grid grid-cols-2 gap-4 mt-[43px]">
                <input
                  className="bg-white rounded-full w-[100%] h-[50px]"
                  type="text"
                />

                <input
                  className="bg-white rounded-full w-[100%] h-[50px]"
                  type="text"
                />
              </div>

              <div className="mt-[43px]">
                <input
                  className="bg-white rounded-full w-[100%] h-[50px]"
                  type="text"
                  name=""
                  id=""
                />
              </div>

              <div className="mt-[58px]">
                <button className="bg-[#9435AE] w-[370px] h-[60px] rounded-full">
                  <a href="" className="text-[22px] text-[#F3DBF5]">
                    Comienza tu camino
                  </a>
                </button>
              </div>
            </div>

            <div className="flex justify-center items-center ">
              <div className="w-[451px] h-[475px] bg-[#DCC1FF] rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
