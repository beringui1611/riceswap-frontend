import snowSushi from '../../assets/img/snowSushi.svg'
import snowSushi2 from '../../assets/img/snow.svg'
function PageThree(){

    return(
        <section className=' bg-blue-900 '>
            <div className='flex justify-center items-center'> 
            <img
              src={snowSushi}
              alt="logo-da-rice-swap"
              className="md:hidden"
            />
            </div>
            <div>
            <img
              src={snowSushi2}
              alt="logo-da-rice-swap"
              className="max-sm:hidden"
            />
            </div>
            <div className=' font-bold text-xl  text-center text-white px-14'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime itaque soluta minima expedita blanditiis laudantium Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa omnis eligendi 
            </div>

            <div className="flex justify-center mt-9">
            <a href="#" className="font-medium shadow-md shadow-black text-white  bg-gray-700 px-3 py-1 rounded-md mb-16 " //futuramente adicionar animações de HOVER,ETC.
              >Learn More</a>
          </div>
        </section>

    )
}

export default PageThree