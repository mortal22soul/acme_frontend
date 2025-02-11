// firewatch themed navbar

export default function Nav() {
  return (
    <div className="flex items-center justify-center mt-14">
      <nav className="bg-[#210002] rounded-md  w-[90%]">
        <ul className="flex justify-between text-[#ffaf1b]">
          <li className="hidden md:inline hover:bg-[#ffaf1b] hover:text-[#210002] hover:cursor-pointer rounded-[2px]  p-2 m-2 ">
            <a href="#">Home</a>
          </li>
          <li className="hidden md:inline hover:bg-[#ffaf1b] hover:text-[#210002] hover:cursor-pointer rounded-[2px]  p-2 m-2 ">
            <a href="">About</a>
          </li>
          <li className="hidden md:inline hover:bg-[#ffaf1b] hover:text-[#210002] hover:cursor-pointer rounded-[2px]  p-2 m-2 ">
            <a href="">Services</a>
          </li>
          <li className="hidden md:inline hover:bg-[#ffaf1b] hover:text-[#210002] hover:cursor-pointer rounded-[2px]  p-2 m-2 ">
            <a href="">Pricing</a>
          </li>
          <li className="hidden md:inline hover:bg-[#ffaf1b] hover:text-[#210002] hover:cursor-pointer rounded-[2px]  p-2 m-2 ">
            <a href="#">Contact</a>
          </li>
          <li className="flex items-center justify-center max-w-screen-xl cursor-pointer">
            <div className="flex md:order-2">
              <div className="relative hidden md:block">
                <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
                  <svg
                    className="w-4 h-4 text-[#ffaf1b]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span className="sr-only">Search icon</span>
                </div>
                <input
                  type="text"
                  id="search-navbar"
                  className="block placeholder:text-[#fee475] w-full p-2 ps-10 text-sm text-[#ffaf1b] border border-[#ffaf1b] rounded-lg bg-[#210002] focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search..."
                />
              </div>
            </div>
          </li>
          <li className="flex items-center justify-center">
            <li className="hidden md:inline hover:text-[#fee475] hover:cursor-pointer rounded-md  p-2 m-2 ">
              <a href="#">Login</a>
            </li>
            <li className="hidden md:inline bg-[#ffaf1b] text-[#210002] hover:bg-[#fee475] hover:cursor-pointer rounded-[2px]  p-2 m-2 ">
              <a href="#">Sign&nbsp;Up</a>
            </li>
          </li>
        </ul>

        <ul className="md:hidden">
          <button
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            className="md:hidden text-gray-500  hover:bg-gray-100  focus:outline-none focus:ring-4 focus:ring-gray-200  rounded-lg text-sm p-2.5 me-1">
            <svg
              className="w-5 h-5 text-green-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>

          <button
            data-collapse-toggle="navbar-search"
            type="button"
            className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-search"
            aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5 text-green-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </ul>
      </nav>
    </div>
  );
}
