import KarateSushi from '../../assets/img/karateSushi.svg'

function PageTwo(){

    return(
        <section className="bg-primaryBg flex items-center justify-center">
            <main >
                <div>
                    <h2 className=" font-bold text-xl items-center text-center mt-11 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum reprehenderit eos itaque totam laborum consequuntur animi maxime repellendus, debitis cum atque molestiae sed porro consequatur voluptatum laboriosam? Commodi, veniam maiores.</h2>
                </div>

                <div className="flex items-center justify-center">
            <img
              src={KarateSushi}
              alt="Sushi-karate" 
              className="mt-40 mb-10 md:w-1/2"
            />
          </div>
            </main>
        </section>

    )
}
export default PageTwo 