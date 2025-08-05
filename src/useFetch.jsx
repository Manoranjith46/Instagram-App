import React, { useEffect, useState } from 'react'
import axios from 'axios';


// Custom hook to fetch data from a given URL
const useFetch = (url)=>{
    const [Data,setData] = useState([]);

    useEffect(()=>{
        setTimeout(() =>{
            axios.get(url)
                .then(response => setData(response.data))
                .catch((err) => {
                    console.error("Error fetching data:", err);
                });
// This is an alternative way to fetch data using the Fetch API
    // fetch(url)
    //     .then(Response => Response.json())
    //     .then(data => setData(data))
    //     .catch((err) =>{
    //         console.log(err);
    //     })
        },1000)
    },[url]);



    return (
        Data
    );
}



export default useFetch;