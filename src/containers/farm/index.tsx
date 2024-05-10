import Header from "../../components/header"

function Farm() {

    return(
    
        <div className="bg-blue-950 h-screen "> 
            <Header/>
            
            <section className=' bg-blue-950   max-w-full'>
            <main className="flex justify-center items-top">
                <div className="flex items-center justify-center text-white font-medium gap-4 bg-black bg-opacity-70 p-2 px-6 mt-10 rounded-xl md:gap-20 md:px-10 md:font-bold md:text-xm lg:gap-sm lg:mt-20 lg:text-xm">
                    <button>Farm</button>
                    <button>Remove</button>
                    <button>PayHolders</button>
                </div>
                
                
            </main>
            <main className="bg-farmColor m-4 rounded-xl">
            <section className="bg-farmColor flex h-full mx-2 mt-10  rounded-xl ">
                <div className=" bg-inputFarmColor flex items-center justify-center  h-10 text-slate-600 p-10  text-textColor m-2  mx-auto rounded-xl">
                    <div className="">
                    <h2>You pay</h2>
                    <input type="number" placeholder="0" className="bg-inputFarmColor text-textColor"/>
                    </div>
                    
    
                </div>

                
            </section>

            <section className="bg-farmColor flex h-full mx-2 mt-1 rounded-xl ">
                <div className=" bg-inputFarmColor flex items-center justify-center  h-10 text-slate-600 p-10  text-textColor m-2  mx-auto rounded-xl">
                    <div className="">
                    <h2>You pay</h2>
                    <input type="number" placeholder="0" className="bg-inputFarmColor text-textColor"/>
                    </div>

                    <div className="">
                        <button>ETH</button>
                    </div>
                    
                    
                </div>
            </section>
            <div className="flex">
            <button className=" px-24 mx-2 bg-buttonFarm font-bold text-sm text-white rounded-md">Ligar carteira</button>
            </div>
            </main>
        </section>
        </div>

    )
}

export default Farm