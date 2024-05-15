import nextLogo from '../../assets/img/nextLogo.svg' 
import welcome from '../../assets/img/BANNER_NEXT.png'
import WhitePaperTwo from '../../components/WhitePaperTwo'
function Home() {

    return(
        <div className="bg-black h-screen w-full"> 
          <nav className="bg-white flex  w-90 ">
            <div className='flex items-center m-2'>
            <img className='w-20' src={nextLogo} alt='LOGO'/>
            <div>
                <h1 className='font-bold'>NEXT CHAIN SOLUTIONS TECHNOLOGY</h1>
            </div>
            </div>
          </nav>
      
          <section className='text-white'>
                <div className='font-bold text-xl mt-10 mx-3'>
                    <h1>Open source decentralized solutions</h1>
                </div>
                
               
                <div className='mt-24 bg-black h-full'>
                <img className='' src={welcome} alt='LOGO'/>
                </div>
                <div className='text-white  bg-black h-full p-6 '>
                    <h2>
                        How large and small companies can enter a decentralized and legitimate ecosystem 
                    </h2>
                </div>
            </section>
            <WhitePaperTwo/>

        </div>
    )
}

export default Home