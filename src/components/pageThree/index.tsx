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
            <div className='flex items-center justify-center'>
            <img
              src={snowSushi2}
              alt="logo-da-rice-swap"
              className="xl:w-1/2  max-sm:hidden"
            />
            </div>
            <div className=' font-bold text-xl  text-center text-white px-14 xl:text-4xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime itaque soluta minima expedita blanditiis laudantium Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa omnis eligendi Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae beatae ab quae eius quis similique amet sed quia est fugit. Dolores est molestias sequi sit repellat ut molestiae aut rem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi inventore voluptate deleniti qui, provident aliquam eum, non asperiores minima aliquid dicta porro officia amet ipsum tenetur eos pariatur est unde.
            </div>

            <div className="flex justify-center mt-9">
            <a href="#" className="font-bold  text-center justify-center  shadow-md shadow-black text-white  bg-gray-700 px-3 py-1 rounded-md mb-16 xl:w-90 xl:h-20 xl:text-3xl xl:py-5 " //futuramente adicionar animações de HOVER,ETC.
              >Learn More</a>
          </div>
        </section>

    )
}

export default PageThree