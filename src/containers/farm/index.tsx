import HeaderApp from "../../components/Header-app"

function Farm() {

    return(
    
        <div className="bg-blue-950 h-screen "> 
            <HeaderApp/>
            
            <section className=' bg-blue-950   max-w-full'>
                
            <main className="flex justify-center items-top">
                <div className="flex items-center justify-center text-white font-medium gap-4 bg-black bg-opacity-70 p-2 px-6 mt-10 rounded-xl md:gap-20 md:px-10 md:font-bold md:text-xm lg:gap-sm lg:mt-20 lg:text-xm">
                    <button>Farm</button>
                    <button>Remove</button>
                    <button>PayHolders</button>
                </div>
                
            </main>
            <main className="bg-farmColor m-4 rounded-xl md:m-28 md:mt-20 lg:mx-96 2xl:mx-[700px]">
                
            <section className="bg-farmColor h-full mx-2  rounded-xl pt-[1px]  ">
                <div className=" bg-inputFarmColor flex items-center justify-center  h-10  p-10 px-6  text-textColor m-2  mx-auto rounded-xl md:justify-around  ">
                    <div>
                    <h2>You Pay</h2>
                    <input type="number" placeholder="0" className="bg-inputFarmColor text-textColor"/>
                    </div>

                    <div className="">
                        <button>ETH</button>
                    </div>
                    
                    
                </div>
            </section>

            <section className="bg-farmColor  h-full mx-2 mt-1 rounded-xl justify-items-center  ">
                <div className=" bg-inputFarmColor flex items-center justify-center  h-10  p-10 px-6  text-textColor m-2  mx-auto rounded-xl md:justify-around  ">
                    <div className="">
                    <h2>You Recibe</h2>
                    <input type="number" placeholder="0" className="bg-inputFarmColor text-textColor"/>
                    </div>

                    <div className="">
                        <button>BTC</button>
                    </div>
                    
                    
                </div>
                <div className="">
            <button className=" w-full bg-buttonFarm font-bold text-xl text-white rounded-md mb-2  ">Ligar carteira</button>
            </div>
            </section>
            
            </main>
        </section>
        </div>

    )
}

export default Farm