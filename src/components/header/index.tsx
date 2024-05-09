import RiceLogo from'../../assets/img/logo.svg';
import Arrow from '../../assets/icons/arrow.png';
import Close from '../../assets/icons/close.png';

import { useEffect, useState } from 'react';

function Header() {

  const[nav, setNav] = useState<boolean>(window.innerWidth >= 1280 ? true : false);
  const[links, setLinks] = useState<any>([]);

  useEffect(() =>{
    setLinks([
      {title: "Farm", text:"It is a long established fact that a reader ." },
      {title: "Pools", text: "There are many variations of passages "},
      {title: "Buy Crypto", text: "If you are going to use a passage of Lorem Ipsum."},
      {title: "Partners", text: "There are many variations of passages of Lorem ."},
      {title: "Blog", text: "making this the first true generator on the Internet."},
      {title: "Developers", text: "handful of model sentence structures."},
      {title: "Academy", text: "sometimes on purpose injected humour and the like."},
      {title: "Governance", text: "Contrary to popular belief, Lorem Ipsum is not simply random text."},
      {title: "Learn", text: "randomised words which don't look even slightly believable."},
      {title: "Validator", text: "point of using Lorem Ipsum is that it has a more-or-less normal distribution."}])
  },[])

  function stateNav() {
    setNav(!nav);
  }

    return(
        <header className="w-full bg-blue-950 flex items-center pt-2 justify-end p-5   ">
            <img className='absolute left-0' src={RiceLogo} alt='LOGO'/>

            <div className='flex  gap-6'>
              <button 
                onClick={stateNav}
                className='text-white bg-slate-800 p-4 w-24 h-9 rounded-md text-sm font-medium flex items-center justify-center gap-3 xl:hidden'>
                  Explore 
                <img className='w-3 h-2' src={Arrow} alt='icons'/>
              </button>
              
              {
                nav && 
                <div className=' 
                flex flex-col absolute left-0 top-0 w-56 h-full overflow-scroll rounded-r-xl bg-white p-2
                xl:bg-transparent xl:flex xl:flex-row xl:w-full xl:top-[-20px] xl:justify-center xl:gap-5 
                xl:overflow-hidden
                '>
                  <button className='mb-5' onClick={stateNav}><img className='w-8 absolute right-2 xl:hidden' src={Close} alt='icons'/></button>
                {
                  links.map((i: any) => (
                    <article 
                    className='
                    mt-8 pl-2  hover:bg-slate-800 hover:bg-opacity-20 hover:rounded-md
                    xl:bg-opacity-0 xl:hover:bg-transparent
                    ' 
                    key={i.length}>
                       <a href='#1' className='font-bold xl:text-white xl:hover:text-opacity-20 '>{i.title}</a>
                       <p className='text-sm xl:hidden'>{i.text}</p>
                    </article>
                  ))

                }
                </div>
              }

              <button className='text-white bg-slate-800 w-24  h-9 rounded-md text-sm font-medium'>Enter App</button>
            </div>

        </header>
    )
}

export default Header 