import React from 'react'
import useFetch from '../useFetch'


function Suggestion() {

// Fetching suggestions from the server
  const Data = useFetch("http://localhost:5000/suggestions");
  
// Mapping through the fetched data to create suggestion items
  let data = Data && Data.map((sugg)=>(
    <div key={sugg.id} className="sugg d-flex align-items-center px-3 py-2">
      <img className="img" src={sugg.profile} alt="img" />
      <p className="m-0 p-2 text-end">{sugg.username}</p>
      <h6 className="ms-auto pt-2 text-primary" ><a className="text-decoration-none">Follow</a></h6>
    </div>
  ))

  return (
    <>
{/* Profile section with profile picture and username */}
        <div className="d-flex align-items-center px-3">
            <img className="rounded-circle" width="55vw" src="profile\Profile.jpg" alt="img" />
            <div className="px-2">
              <p className="p-0 m-0">Profile</p>
              <p className="p-0 m-0">username</p>
            </div>
            <p className="pt-3 ms-auto px-3 text-primary" >Switch</p>
        </div>
        <div className="d-flex align-items-center px-3">
          <h6 className="pt-1">Suggested for you</h6>
          <p className="pt-3 ms-auto">See All</p>
        </div>
{/* Suggested users list */}
        {data}
        
    </>
  )
}

export default Suggestion