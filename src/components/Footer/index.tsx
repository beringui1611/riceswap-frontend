import samurai from '../../assets/img/samurai.svg';
import RedirectArrow from '../../assets/icons/redirect.svg';
import Discord from '../../assets/icons/discord.svg';
import Twitter from '../../assets/icons/twitter.svg';
function Footer(){

    return(
        <section className='bg-blue-950 h-[100vh] w-full '>
         
        <article className='bg-blue-950 h-[100vh] '>
            <div className=' rounded-md h-full border-2 m-5 border-white mt-14'>

                <div className='text-white p-5'>
                    <h1 className='font-bold'>Need Help?</h1>
                    <p className=''>If you need help or have any questions, contact us on one of our social channels.</p>
                </div>

                <div>
                <div className='bg-colorButton mx-8 rounded-md h-76 border-2  border-white my-7 p-3 text-white'>
                    <h1 className='font-bold m-2'>Rice Academy</h1>
                    <p className='mb-5'>Demystisfying DeFi - everything you need to know in one place. For beginners to advanced users, and everyone in between.</p>

                    <a href="#1" className='bg-white text-black text-opacity-45  rounded-md text-sm  font-medium p-2 flex justify-center w-32'>
                        Visit Academy 
                    <img className='' src={RedirectArrow} alt='icon'/>
                    </a> 
                    
                </div>
                    <div className='text-white p-5'>
                        <h1 className='font-bold'>Contact Support</h1>
                        <p className=''>Join the Sushi Discord community and ask away!</p>
                    </div>
                    <div>
                        <a className='flex mt-10 flex-row ml-5 gap-2 items-center text-slate-600 font-bold' href='#1'>
                          <img src={Discord} alt='icon'/>
                           Community on Discord
                        </a>
                        <a className='flex mt-5 flex-row ml-5 gap-2 items-center text-slate-600 font-bold' href='#1'>
                          <img src={Twitter} alt='icon'/>
                           Follow us on Twitter
                        </a>
                    </div>
                </div>
            </div>
        </article>    
        </section>
    )
}

export default Footer