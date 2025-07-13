import React, { useEffect, useState } from 'react'



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
    },[]);



    return (
        Data
    );
}



export default useFetch;