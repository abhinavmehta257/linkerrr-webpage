import React from 'react'

function Footer({collabLogo}) {
    console.log(collabLogo);
  return (
    <div className='pt-[40px] p-3 text-xl'>
        {collabLogo ? (
            <div>
                <a  className='flex justify-center  items-center' target={'_blank'} href="https://theonelink.me">
                <img width={'80px'} src={'./logo192.png'} alt="" />
                <img className='w-[30px] h-[30px]' src={'./collab.png'} alt="" />
                <img width={'50px'} src={collabLogo} alt="" />
                </a>
            </div>
            
            )
        :(<a  className='flex justify-center  items-center' target={'_blank'} href="https://theonelink.me">Create your own with <span className=''><img width={'80px'} src={'./logo192.png'} alt="" /></span></a>)}
        
    </div>
  )
}

export default Footer