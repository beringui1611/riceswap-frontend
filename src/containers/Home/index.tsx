import Header from "../../components/header"

import PageTwo from "../../components/pageTwo"

import PageThree from "../../components/pageThree"

import PageFour from "../../components/pageFour"
function Home() {

    return(
        <div className="bg-blue-950 h-screen "> 
            <Header/>
            <main  className=' bg-blue-950 flex justify-center items-top  max-w-full'>


                <section>
                    <div className="mx-14">
                        <h1 className=" font-bold text-2xl  mt-6   text-white md:text-4xl sm:text-4xl md:my-10 xl:my-10  xl:text-4xl  xl:mt-36 "> Lorem ipsum dolor sit amet <span className="text-blue-500">consectetur</span>!</h1>
                        
                        <p className="text-white font-medium mt-6 md:text-3xl md:mt-20 sm:text-2xl sm:mt-5 lg:text-2xl xl:text-3xl xl:mt-36 xl:pr-32 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea incidunt odit cumque error illo dignissimos tenetur beatae Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat impedit, eligendi doloribus officiis reprehenderit aperiam porro nam obcaecati. Ipsum eos tempore excepturi aliquam iure aliquid. Ut veritatis mollitia rem repudiandae?   ..</p>
                    </div>
                   <section className=" bg-opacity-30 px-2 py-3 flex justify-center items-center bg-slate-500  mx-10   gap-11 rounded-xl shadow-2xl max-sm:gap-0 max-sm:mt-10 max-md:gap-40 max-md:mt-40 max-md:p-5 md:gap-20 mb-44 mt-36 md:mt-40 xl:gap-20 xl:w-1/2 xl:mx-auto lg:mt-30 xl:mt-52">
                     
                        <article className="flex flex-col  items-center gap-2 mx-2 max-md:text-xs px-3 md:text-3xl">
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
            <PageTwo/>
            <PageThree/>
            <PageFour/>
        </div>
    )
}

export default Home