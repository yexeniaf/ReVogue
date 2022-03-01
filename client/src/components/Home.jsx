import React from 'react';
import adela from "../images/adela.png"
import kenia from "../images/kenia.png"
import ilvea from "../images/ilvea.png"
import yexenia from "../images/yexenia.png"



export default function Home() {
  return (
    <div>
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Re</span>{''}
                  <span className="block text-lime-800 xl:inline">Vogue</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Sustainability through fashion! Thrift with intentsions while finding amazing deals and rare gems. Make a bigger statement
                  and impact with your outfits.  
                </p>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://1.bp.blogspot.com/-KQmUJUNXC0c/YC0kX0GYCCI/AAAAAAAAqbw/JlLfGeQw-MozIz8vbTfJpSHFyFnOTphIQCLcBGAsYHQ/s2048/thrift%2Bstore%2Boutfit%2Baesthetic%2Bthe%2Bnorth%2Bface%2Bpuffer.jpg"
            alt=""
          />
        </div>
      </div>

      <br/>
      <br/>

      <div className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl mt-10 mb-3">
        <h1 className="about-title block text-lime-800 xl:inline">ABOUT US:</h1>
      </div>

      <div className='about-container'>
        <p> 
          Hello, World! Welcome to ReVogue, a thrift store where we personally hand pick items we find for you. So, the only thing you have to worry about
          is serving looks. ReVogue was founded by four talented individuals; Kenia, Ilvea, Adela & Yexenia, aka us! Our core mission is help gap and merge 
          fashion with sustainability. We believe that fire outfits can be achieved while saving your coins and saving the earth. 
          <br/>
          <br/>
          To insure that we provide the best quality of each hand picked item, we go through various stages and protocols. We appericate all the support!  
        </p>
      </div>
      <div className='bg-white mx-3 p-4 mb-12' >
        <div className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <h1 className="about-title block text-lime-800 xl:inline"> Behind the Brand</h1>
        </div>
        <br/>
        <div className="grid grid-cols-4 gap-4 ">
          <div>
            <img className="border-4" src={kenia}/>
          </div>
          <div>
            <img className="border-4" src={ilvea}/>
          </div>
          <div>
            <img className="border-4" src={yexenia}/>
          </div>
          <div>
            <img className="border-4" src={adela}/>
          </div>
        </div>
      </div>
    </div>
  )
}

