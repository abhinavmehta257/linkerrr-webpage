import React from 'react'

function Footer({collabLogo, collabLink}) {
    console.log(collabLink);
  return (
    <div id='footer' className='relative bottom-0 w-full'>
      <div className='pt-[40px] p-3 text-xl grow'>
        {collabLogo ? (
            <div className='collab cursor-pointer '>
                <a  className='flex justify-center  items-center' target={'_blank'} href={collabLink}>
                <img src={collabLogo} alt="" />
                </a>
            </div>
            )
        :''}
        <a  className='website-redirect flex justify-center  items-center' target={'_blank'} href="https://theonelink.me">Create your own with <span className=''><img src={'./logo192.png'} alt="" /></span></a>
    </div>
    </div>
    
  )
}

export default Footer