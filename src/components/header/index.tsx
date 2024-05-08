import RiceLogo from'../../assets/img/logo.svg'
function Header() {

    return(
        <header className="w-full bg-blue-950 h-20 px-2 xl:gap-10">
        <div
          className="h-20 w-full flex justify-center items-center  gap-10 max-w-7xl mx-auto "
        >
          <div className="flex items-center md:gap-5 ">
            <img
              src={RiceLogo}
              alt="logo-da-rice-swap"
              className="w-20 mr-7 "
            />
            <nav className="">
            <a href="#" className="font-medium shadow-md shadow-black text-white  bg-gray-700 px-3 py-1 rounded-md mr-3 xl:hidden" //futuramente adicionar animações de HOVER,ETC.
              >Explore</a>
            </nav>
      
             <div className=''>
            <a href="#" className="hover:underline font-bold shadow-md text-xl text-white   px-3 py-1 rounded-md mr-3 max-sm:hidden px-0 ">Farm</a>
            <a href="#" className="hover:underline font-bold shadow-md text-xl text-white   px-3 py-1 rounded-md mr-3 max-sm:hidden px-0 xl:gap-24">Pools</a>
            <a href="#" className="hover:underline font-bold shadow-md text-xl text-white   px-3 py-1 rounded-md mr-3 max-sm:hidden px-0">Buy Crypto</a>
            <a href="#" className="hover:underline font-bold shadow-md text-xl text-white   px-3 py-1 rounded-md mr-3  max-sm:hidden md:hidden px-0 sm:hidden">Blog</a>
            <a href="#" className="hover:underline font-bold shadow-md text-xl text-white   px-3 py-1 rounded-md mr-3 max-sm:hidden max-xl:hidden px-0">Developers</a>

            <a href="#" className="hover:underline font-bold shadow-md text-xl text-white   px-3 py-1 rounded-md mr-3 max-sm:hidden max-xl:hidden px-0">Academy</a>
            <a href="#" className="hover:underline font-bold shadow-md text-xl text-white   px-3 py-1 rounded-md mr-3 max-sm:hidden max-xl:hidden px-0">Governance</a>
            <a href="#" className="hover:underline font-bold shadow-md text-xl text-white   px-3 py-1 rounded-md mr-3 max-sm:hidden max-xl:hidden px-0">Learn</a>
            <a href="#" className="hover:underline font-bold shadow-md text-xl text-white   px-3 py-1 rounded-md mr-3  max-sm:hidden max-xl:hidden xl:px-0">Validator</a>
            
          </div>

          </div>
  
          <div className="">
            <a href="#" className="font-medium shadow-md shadow-black text-white  bg-gray-700 px-3 py-1 rounded-md mr-auto  " //futuramente adicionar animações de HOVER,ETC.
              >Enter <span className=' max-md:hidden'>App</span></a
            >
          </div>
        </div>
      </header>
    )
}

export default Header 