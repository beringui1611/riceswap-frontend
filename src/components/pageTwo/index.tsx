import KarateSushi from '../../assets/img/karateSushi.svg'

function PageTwo(){

    return(
        <section className="bg-primaryBg flex items-center justify-center py-14 md:py-48">
            <main >
                <div>
                    <h2 className=" font-medium text-xl items-center text-center mt-20 text-white md:mt-0 md:text-2xl md:px-3 xl:text-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum reprehenderit eos itaque totam laborum consequuntur animi maxime repellendus, debitis cum atque molestiae sed porro consequatur voluptatum laboriosam? Commodi, veniam maiores.</h2>
                </div>

                <div className="flex items-center justify-center">
            <img
              src={KarateSushi}
              alt="Sushi-karate" 
              className="mt-32 mb-20 md:w-1/2"
            />
          </div>
            </main>
        </section>

    )
}
export default PageTwo 