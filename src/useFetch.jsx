import React, { useEffect, useState } from 'react'



const useFetch = ()=>{
    const [Data,setData] = useState([]);
    useEffect(()=>{
        setTimeout(() =>{
            fetch('http://localhost:5000/posts')
                .then(Response => Response.json())
                .then(data => setData(data))
                .catch((err) =>{
                    console.log(err +" Occured");
                })
        },1000)
    },[]);



    return (
        Data
    );
}



export default useFetch;