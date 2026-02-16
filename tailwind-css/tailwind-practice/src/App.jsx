import { Icon } from "lucide-react";

function App() {
  // return (
  //   <div className="h-full w-full bg-slate-500  text-4xl grid place-content-center ">
  //     <div className="">
  //       <div className="flex flex-col items-center gap-10 border-4 border-blue-500 bg-slate-400">
  //         <div>
  //           <img
  //             className="h-50"
  //             src="https://i.pinimg.com/originals/c5/31/f5/c531f51b94dcadf29c819068f7d6d25b.png"
  //             alt="car img"
  //           />
  //         </div>
  //         <div>
  //           <div className="text-xl text-white font-medium border-t-2 p-5">
  //             Tailwind css
  //             <p className="text-cyan-300">By rachit saini</p>
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  //     <button className="bg-sky-300 text-white mt-4 text-base p-2 rounded-xl hover:bg-white hover:text-black dark:bg-red-600">
  //       Buy now
  //     </button>

  //     <div className="text-center my-4">
  //       <p className="text-white md:text-green-300  sm:text-red-500 lg:text-purple-400">
  //         Lorem, ipsum dolor.
  //       </p>
  //     </div>

  //     <div className="mt-3">
  //       <div className="max-w-xl mx-auto bg-white rounded-xl text-xl md:max-sm-2xl overflow-hidden md:max-w-2xl">
  //         <div className="md:flex">
  //           <div>
  //             <img className="h-48 w-full object-cover md:h-full md:w-48" src="https://i.pinimg.com/736x/98/2c/67/982c67e16a7e2023f6478275405eb54d.jpg" alt="car img" />
  //           </div>
  //           <div className="p-8 ">
  //             <div className="uppercase tracking-wide text-sm text-indigo-500 font-medium">
  //               An awesome card
  //             </div>
  //             <a className="block mt-1 text-lg font-medium text-black hover:text-blue-400" href="#">Tailwind CSS</a>
  //             <p className="mt-2 text-slate-500">Lorem <span className="bg-yellow-500 p-[2px] px-[14px]">power</span> ipsum dolor sit amet consectetur adipisicing elit.</p>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div>
      {/* navbaar goes here */}
      <nav className="w-full h-14 bg-indigo-200 flex justify-between px-4 md:px-4 items-center">
        <div className="text-2xl font-bold text-indigo-500">PW Skills</div>
        <ul className="md:flex hidden font-semibold">
          <li className="mx-[10px] cursor-pointer">About Us</li>
          <li className="mx-[10px] cursor-pointer">Contact Us</li>
          <li className="mx-[10px] cursor-pointer">Home</li>
        </ul>

        <div className="hidden md:block px-2 py-2 bg-indigo-500 text-white rounded font-bold cursor-pointer">
          Login/Signup
        </div>

        <div className="md:hidden">
          <a className="text-4xl" href="#">
            &#8801;
          </a>
        </div>
      </nav>
      {/* navbar ends here */}

      {/* img section starts here */}
      <header className="w-full h-auto">
        <img
          className="w-full hidden md:block"
          src="https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/web.jpg"
          alt=""
        />
        <img
          className="w-full md:hidden"
          src="https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/mobile.jpg"
          alt=""
        />
      </header>
      {/* img section ends here */}

      {/* our student section */}
      <section-1>
        <div className="h-30 w-auto flex flex-wrap flex-col items-center text-center p-10">
          <div className="w-full h-auto flex  flex-wrap flex-col items-center">
            <p className="text-indigo-800 font-bold text-3xl md:text-4xl text-center">
              "Pure Hardwork, No Shorcuts!"
            </p>
            <div className="w-36 h-1 border-b-4 border-yellow-300 mt-2 rounded-2xl md:mt-4 mb-12"></div>
          </div>
        </div>
        <div className="w-full flex flex-wrap justify-evenly">
          <div className="w-56 flex flex-col items-center mb-12">
            <img
              className="w-24 h-24 rounded-[50%]"
              src="https://i.pinimg.com/736x/41/56/73/415673248894212bf7d60e79892b840b.jpg"
              alt="card img"
            />
            <p className="text-2xl font-bold text-white">600+</p>
            <p className="text-1xl font-bold text-gray-500">
              Different Courses
            </p>
          </div>

          <div className="w-56 flex flex-col items-center mb-12">
            <img
              className="w-24 h-24 rounded-[50%]"
              src="https://i.pinimg.com/736x/f6/61/8c/f6618c11cc734c952d542e3ce189cdf4.jpg"
              alt="card img"
            />
            <p className="text-2xl font-bold text-white">700,000+</p>
            <p className="text-1xl font-bold text-gray-500">
              Students Enrolled
            </p>
          </div>

          <div className="w-56 flex flex-col items-center mb-12">
            <img
              className="w-24 h-24 rounded-[50%]"
              src="https://i.pinimg.com/736x/aa/60/7b/aa607b54600593f01d509ce35b55ab2b.jpg"
              alt="card img"
            />
            <p className="text-2xl font-bold text-white">10,000+</p>
            <p className="text-1xl font-bold text-gray-500">
              Successful Transition
            </p>
          </div>
        </div>
      </section-1>
      {/* {student section ends here} */}

      {/* product section starts here */}
      <section-2 className="ml-10">
        <div className="h-30 w-auto flex flex-wrap flex-col items-center text-center p-10">
          <div className="w-full h-auto flex  flex-wrap flex-col items-center">
            <p className="text-indigo-800 font-bold text-3xl md:text-4xl text-center">
              Our Products
            </p>
            <div className="w-36 h-1 border-b-4 border-yellow-300 mt-2 rounded-2xl md:mt-4 mb-12"></div>
          </div>
        </div>
        <div className="w-[90%] h-auto flex flex-wrap justify-around text-center ml-15">
          <div className="w-44 flex flex-col items-center mb-12 border-white border-2 rounded-xl p-2">
            <img
              className="w-24 h-24 rounded-[50%]"
              src="https://i.pinimg.com/1200x/a2/13/86/a21386dc1818d3d93f2e089c00189916.jpg"
              alt="card img"
            />
            <p className="text-xl font-bold text-white">Pw Skills Lab</p>
            <p className="text-sm font-bold text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
              delectus.
            </p>
          </div>

          <div className="w-44 flex flex-col items-center mb-12 p-2">
            <img
              className="w-15 h-15 rounded-[50%]"
              src="https://i.pinimg.com/736x/64/91/38/649138c62a70bea11ac83769888ec8aa.jpg"
              alt="card img"
            />
            <p className="text-xl font-bold text-white">Job Portal</p>
            <p className="text-sm font-bold text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore,
              tempore!
            </p>
          </div>

          <div className="w-44 flex flex-col items-center mb-12 p-2">
            <img
              className="w-15 h-15 rounded-[50%]"
              src="https://i.pinimg.com/736x/44/89/6a/44896afbeed5e8d3e0c88e7836fecf48.jpg"
              alt="card img"
            />
            <p className="text-xl font-bold text-white">Experience Portal</p>
            <p className="text-sm font-bold text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore,
              tempore!
            </p>
          </div>

          <div className="w-44 flex flex-col items-center mb-12 p-2">
            <img
              className="w-15 h-15 rounded-[50%]"
              src="https://i.pinimg.com/736x/e8/25/0e/e8250e334e07c75ddceab38cda956f2c.jpg"
              alt="card img"
            />
            <p className="text-xl font-bold text-white">Affliate</p>
            <p className="text-sm font-bold text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore,
              tempore!
            </p>
          </div>

          <div className="w-44 flex flex-col items-center mb-12 border-white border-2 rounded-xl p-2">
            <img
              className="w-24 h-24 rounded-[50%]"
              src="https://i.pinimg.com/736x/2a/5e/67/2a5e672cb04733a47c0bfb1dc2b390df.jpg"
              alt="card img"
            />
            <p className="text-xl font-bold text-white">Half of fame</p>
            <p className="text-sm font-bold text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
              delectus.
            </p>
          </div>
        </div>
      </section-2>
      {/* product section ends here */}

      {/*our footer section starts here*/}
      <footer className="w-full bg-gray-900 px-4 text-white pt-8 flex flex-col md:flex-row flex-wrap justify-between md:px-12">
        <div>
          <div className="text-3xl font-bold text-white">PW Skills</div>
          <p className="my-4">Email us: support@pwskills.com</p>
          <img
            className="h-20"
            src="https://i.pinimg.com/736x/db/62/31/db623111d4272626d03e07068c595953.jpg"
            alt=""
          />
        </div>

        <div>
          <h2 className="font-bold text-xl mt-4">PW Skills</h2>
          <div className="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2"></div>
          <div className="text-gray-500">
            <p>About us</p>
            <p>FAQs</p>
            <p>Privacy Policy</p>
          </div>
        </div>

        <div>
          <h2 className="font-bold text-xl mt-4">Products</h2>
          <div className="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2"></div>
          <div className="text-gray-500">
            <p>PW Skills Lab</p>
            <p>Job Portal</p>
            <p>Experience Portal</p>
            <p>Become an affiliate</p>
            <p>Hall of fame</p>
          </div>
        </div>

        <div>
          <h2 className="font-bold text-xl mt-4">Links</h2>
          <div className="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2"></div>
          <div className="text-gray-500">
            <p>Discord channel</p>
            <p>PW Youtube</p>
            <p>Careers</p>
          </div>
        </div>
      </footer>
      {/* our footer ends here */}
    </div>
  );
}

export default App;
