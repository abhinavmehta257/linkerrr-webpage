import React, {useEffect,useState} from 'react'
import SponcerCard from './SponserCard';

function Sponcers({sponsers}) {
  const [showSponser , setIsSponsers] = useState(false);
    function checkForSponsers(sponsers){
      if(sponsers.length == 0) return false;

      let isEnabled = false;
      sponsers.forEach(sponser => {
        if(sponser.enabled)
        { isEnabled = true ;}

      });
      return isEnabled;
    }
    useEffect(() => {
      setIsSponsers(checkForSponsers(sponsers));
    }, [])
    return (
      <div className='sponsers-container mt-4'>
        {/* <h1 className='text-xl font-medium'>{showSponser ? 'Sponsers' : null}</h1> */}
        <div className='card-container'>
          <div className="grid grid-cols-2 gap-2">
            {sponsers.map((sponser,ind) =>(
              sponser.enabled && sponser.title !== '' && sponser.url !== '' && sponser.ImageUrl ? 
              <SponcerCard sponser={sponser} />: null
            ))}
          </div>
          
        </div>
      </div>
    )
}

export default Sponcers