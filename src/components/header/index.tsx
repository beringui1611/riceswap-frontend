function Header() {

    return(
        <header className="w-full bg-blue-950 h-20 px-2">
        <div
          className="h-20 w-full flex items-center justify-between max-w-7xl mx-auto"
        >
          <div className="flex items-center">
            <img
              src="./assets/img/logo.png"
              alt="logo-da-rice-swap"
              className="w-20 mr-7"
            />
  
            <nav className="">
              <a
                href="#"
                className="text-white hover:bg-zinc-900 px-2 py-2 rounded-lg duration-500"
                >Explore</a
              >
             
              
            </nav>
          </div>
  
          <div className="flex items-center">
            <a href="#" className="font-medium bg-white px-3 py-1 rounded-xl mr-3"
              >Enter App</a
            >
          </div>
        </div>
      </header>
    )
}

export default Header 