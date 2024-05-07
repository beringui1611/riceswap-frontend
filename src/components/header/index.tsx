import RiceLogo from'../../assets/img/logo.svg'
function Header() {

    return(
        <header className="w-full bg-blue-950 h-20 px-2">
        <div
          className="h-20 w-full flex items-center justify-between max-w-7xl mx-auto"
        >
          <div className="flex items-center">
            <img
              src={RiceLogo}
              alt="logo-da-rice-swap"
              className="w-20 mr-7"
            />
  
            <nav className="">
            <a href="#" className="font-medium shadow-md shadow-black text-white  bg-gray-700 px-3 py-1 rounded-md mr-3 " //futuramente adicionar animações de HOVER,ETC.
              >Explore</a>
             
              
            </nav>
          </div>
  
          <div className="flex items-center">
            <a href="#" className="font-medium shadow-md shadow-black text-white  bg-gray-700 px-3 py-1 rounded-md mr-3  " //futuramente adicionar animações de HOVER,ETC.
              >Enter <span className=' max-md:hidden'>App</span></a
            >
          </div>
        </div>
      </header>
    )
}

export default Header 