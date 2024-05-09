import samurai from '../../assets/img/samurai.svg'
function PageFive(){

    return(
        <section className='bg-blue-950 h-full'>
        <article className="bg-blue-950 flex justify-center w-full mx px-8 mb-6">
            <div className='bg-samurai no-repeat rounded-md mt-10 font-medium '>
                <div className='text-white px-2 text-opacity-60 mb-5'>
                    <h1 className='text-xl font-bold mb-2 mt-2'>Lorem ipsum</h1>
                    <p className='text-sm mb-10 '>dolor sit amet consectetur adipiscing elit vivamus malesuada velklit ssit amet temps porta</p>

                    <a href="" className='bg-white text-black rounded-md text-sm mb-5 opacity-30 p-2 '>Documentation</a>
                </div>
            </div>
            
        </article>
            <div className='bg-colorButton mx-8 rounded-md h-12 border-2 opacity-75 border-white my-14 text-center  flex items-center justify-center'>
                <a href=""></a>
            </div>
            <div className='bg-colorButton mx-8 rounded-md h-12 border-2 opacity-75 border-white  text-center  flex items-center justify-center'>
                <a href=""></a>
            </div>
        <article className='bg-blue-950 h-full'>
            <div className=' bg-blue-950 rounded-md h-full border-2 m-5 border-white mt-14'>

                <div className='text-white p-5'>
                    <h1 className='font-bold'>Need Help?</h1>
                    <p className=''>If you need help or have any questions, contact us on one of our social channels.</p>
                </div>

                <div>
                <div className='bg-colorButton mx-8 rounded-md h-76 border-2  border-white my-7 p-3 text-white'>
                    <h1 className='font-bold m-2'>Sushi Academy</h1>
                    <p className='mb-5'>Demystisfying DeFi - everything you need to know in one place. For beginners to advanced users, and everyone in between.</p>

                    <a href="" className='bg-white text-black text-opacity-45  rounded-md text-sm  font-medium p-2 '>Visit App</a> 
                    
                </div>
                    <div className='text-white'>
                        <h1 className='font-bold'>Contact Support</h1>
                        <p className=''>Join the Sushi Discord community and ask away!</p>
                    </div>
                </div>
            </div>
        </article>    
        </section>
    )
}

export default PageFive