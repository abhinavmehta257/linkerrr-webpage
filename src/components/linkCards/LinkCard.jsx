import React from 'react'

function LinkCard({link}) {
  const openUrl=()=>{
    window.open(link.url);
  }
  return (
    <div onClick={openUrl} className='cursor-pointer' >
        <div className='link-card'>
            <p>{link.title}</p>
        </div>
    </div>
  )
}

export default LinkCard


{/* <iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/4b13SJlne61y53KSEwuQtD?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
https://open.spotify.com/album/4b13SJlne61y53KSEwuQtD?si=Eoa1nPLNTk2M1VPUgEnbKQ */}