import React, { useEffect, useState } from 'react'

function Fetcher() {
    const [Data,setData] = useState();

    useEffect(() =>{
        fetch('http://localhost:5000/posts')
            .then(Response => Response.json())
            .then(data => setData(data))
            .catch((err) =>{
                console.log(err +" Occured");
            })
    },[]);
  return (
    <>
        {Data}
    </>
  )
}

export default Fetcher;