import Footer from "../Footer";
import RedirectArrow from '../../assets/icons/redirect.svg';

function PageFive() {

    return (
        <section className="bg-blue-950 h-[200vh]  flex flex-col xl:items-center">
        <article className="flex justify-center w-full mx px-8 mb-6 ">
            <div className='bg-samurai bg-no-repeat rounded-md mt-10 font-medium  md:bg-samuraiXl md:bg-no-repeat md:h-[500px] xl:bg-samurai2Xl xl:h-[700px] xl:bg-no-repeat xl:w-[1500px]'>
                <div className='text-white px-2 text-opacity-80 mb-5'>
                    <h1 className='text-xl font-bold mb-2 mt-2 md:text-5xl md:p-6'>Lorem ipsum</h1>
                    <p className='text-sm mb-10 md:text-4xl md:p-6 md:mb-28  '>dolor sit amet consectetur adipiscing elit vivamus malesuada velklit ssit amet temps porta</p>

                    <a href="" className='bg-white text-slate-600 rounded-md text-sm mb-5 opacity-80 p-2  
                    md:px-20 md:py-4 md:ml-6 md:text-2xl md:font-bold'>
                    Documentation
                    </a>
                </div>
            </div>
            
        </article>
            <div className='bg-colorButton mx-8 rounded-md h-12 border-2 opacity-75 border-white my-14 text-center  flex items-center justify-center xl:w-1/2'>
                <a href="" className="text-2xl font-bold text-white">Github</a>
            </div>
            <div className='bg-colorButton mx-8 rounded-md h-12 border-2 opacity-75 border-white  text-center  flex items-center justify-center xl:w-1/2 mb-10'>
                <a href="" className="text-2xl font-bold text-white">NPM</a>
            </div>


            <Footer/>

        </section>
    )
}

export default PageFive;