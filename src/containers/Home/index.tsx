import Header from "../../components/header"

function Home() {

    return(
        <div>
            <Header/>
            <main  className='bg-blue-950 -400 flex justify-center items-top h-screen max-w-full'>
                <section>
                    <div className="mx-5">
                        <h1 className="font-bold text-3xl mt-32 text-white max-md:text-2xl p-3 mx-5 max-md:mt-12 md: md:text-5xl"> Lorem ipsum dolor sit amet <span className="text-blue-500">consectetur</span>!</h1>
                        
                        <p className="text-gray-600  max-sm:p-3 mx-5 mb-20 md:text-3xl md:mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea incidunt odit cumque error illo dignissimos tenetur beatae nobis quam? Pariatur magnam eligendi..</p>
                    </div>
                   <section className=" bg-opacity-30 px-2 py-3 flex justify-center items-center bg-slate-500  mx-3 mt-2  gap-11 rounded-xl shadow-2xl max-sm:gap-1 max-sm:mt-10 max-md:gap-40 max-md:mt-40 max-md:p-5 ">
                     
                        <article className="flex flex-col  items-center gap-2 mx-2 max-md:text-xs px-3 md: text-3xl">
                            <h2 className=" font-bold text-base text-white md:text-2xl">$1,00</h2>
                            <p className="text-white md:text-xl">Price</p>
                        </article>
                        <article className="flex flex-col items-center  gap-2 mx-2 max-md:text-xs md: text-3xl">
                            <h2 className=" font-bold text-base text-white md:text-2xl">1,360,450,000</h2>
                            <p className="text-white md:text-xl">Total Liquidity</p>
                        </article>
                        <article className="flex flex-col items-center gap-2 mx-2 max-md:text-xs md: text-3xl">
                            <h2 className=" font-bold text-base text-white md:text-2xl">$1 BI</h2>
                            <p className="text-white md:text-xl">Volume</p>
                        </article>
          
                    </section>
                </section>
            </main>
        </div>
    )
}

export default Home