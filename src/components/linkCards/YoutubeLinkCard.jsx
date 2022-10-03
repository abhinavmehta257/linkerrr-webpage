import React from 'react'

function YoutubeLinkCard({link}) {
  const [collapsed, setCollapsed] = React.useState(true);
  const [loadVideo, setLoadVide] = React.useState(false);

  let videoId;
  if(link.url.includes('?')){
    videoId = link.url.split('?')[1].split('=')[1]
  }else{
    videoId = link.url.split('/')[3];
  }
  const toggleCollapse = () => {
    setCollapsed(!collapsed);
    if(!loadVideo){
      setLoadVide(!loadVideo);
    }
  }
  return (
      <div className='cursor-pointer transition-all ease-in-out' >
        <div className='link-card' onClick={toggleCollapse}>
          {link.title}
          {loadVideo ? (<iframe 
          width='100%' 
          className={`${collapsed ? 'hidden ' : ''} rounded-xl transition-all duration-300 ease-in-out  mt-2`}
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player" 
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen></iframe>):""}
        </div>
      </div>
  )
}

export default YoutubeLinkCard