import React, { useEffect, useState } from 'react'


// Custom hook to fetch data from a given URL
const useFetch = (url)=>{
    const [Data,setData] = useState([]);

    useEffect(()=>{
        setTimeout(() =>{
            fetch(url)
                .then(Response => Response.json())
                .then(data => setData(data))
                .catch((err) =>{
                    console.log(err);
                })
        },1000)
    },[url]);



    return (
        Data
    );
}



export default useFetch;