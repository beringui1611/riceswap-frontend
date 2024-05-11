import MetaMaskIcon from '../../assets/icons/metamask.svg';
import WalletConnectIcon from '../../assets/icons/walletConnect.svg';
import SafePalIcon from '../../assets/icons/safepal.svg';

import { useState } from "react";

function ConnectWallet() {
const [close, setClose] = useState<boolean>(false);

function setState(){
    setClose(!close);
}

function getProvider() {
    console.log(window.safepalProvider);
   
  }

    return (
    <div>
        <div onClick={setState} className="w-screen h-screen absolute bg-black right-0 top-0 bg-transparent">

        </div>
        {
            close  
            &&
        <section className="flex flex-col h-screen w-56 bg-white absolute right-0 top-0 items-center justify-between z-50 rounded-xl">
            <h1 className="font-medium mt-2">
                Connect a Wallet
            </h1>
            <article className="w-52 h-1/2 bg-slate-200 rounded-xl flex flex-col items-start p-5 gap-5 ">
                <button className='flex items-center gap-2 hover:scale-110'>
                    <img className='w-10 h-10' src={MetaMaskIcon} alt="icon"/>
                    MetaMask
                </button>
                <button onClick={getProvider} className='flex items-center gap-2 hover:scale-110'>
                    <img className='w-[41px] h-9' src={WalletConnectIcon} alt="icon"/>
                    WalletConnect
                </button>
                <button onClick={getProvider} className='flex items-center gap-2 hover:scale-110'>
                    <img className='w-[41px] h-9' src={SafePalIcon} alt="icon"/>
                    SafePal
                </button>
            </article>
            <p className="text-[12px] text-center">Donec vestibulum sit amet turpis ac accumsan. Sed dignissim dapibus felis</p>
        </section>
        }
    </div>
    )
}

export default ConnectWallet;