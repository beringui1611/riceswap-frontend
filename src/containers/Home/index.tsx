import Header from "../../components/header"

function Home() {

    return(
        <div>
            <Header/>
            <main  className='bg-blue-950 -400 flex justify-center items-top h-screen'>
                <section>
                    <div className="mx-5">
                        <h1 className="font-bold text-3xl mt-32 text-white  "> Lorem ipsum dolor sit amet <span className="text-blue-500">consectetur</span>!</h1>
                        
                        <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea incidunt odit cumque error illo dignissimos tenetur beatae nobis quam? Pariatur magnam eligendi..</p>
                    </div>
                    <section className="px-2 py-1 sm:py-11 flex justify-center bg-slate-500 mt-20 mx-6  gap-12 rounded-xl">
                        <article className="flex flex-col gap-3">
                            <h2 className=" font-bold text-base text-white">$1,00</h2>
                            <p className="text-white">Price</p>
                        </article>
                        <article className="flex flex-col gap-4">
                            <h2 className=" font-bold text-base text-white">1,360,450,000</h2>
                            <p className="text-white">Total Liquidity</p>
                        </article>
                        <article className="flex flex-col gap-4">
                            <h2 className=" font-bold text-base text-white">$1 BI</h2>
                            <p className="text-white">Total Volume</p>
                        </article>
          
                    </section>
                </section>
            </main>
        </div>
    )
}

export default Home