import React from 'react'
import useFetch from '../useFetch';
import { useParams,Link, useNavigate } from 'react-router-dom';

function Story() {
  let {id,len} = useParams();
  const Data = useFetch(`http://localhost:5000/stories/${id}`);
  const navigate = useNavigate();


  if(id>len || id<=0){
    navigate("/");
  }

  if(!Data){
    <div className="d-flex justify-content-center m-5 p-5">
        <h6 className="spinner-border text-primary m-5 p-3"/>
    </div>
  }
  else{
    return(
      <>
        <div className="d-flex justify-content-center align-items-center">
          <Link to={`http://localhost:5173/stories/${Number(id)-1}/${len}`} ><i className="bi bi-arrow-left-circle-fill p-3"></i></Link>
          <img className="vh-100" src={Data.story} />
          <Link to={`http://localhost:5173/stories/${Number(id)+1}/${len}`} ><i className="bi bi-arrow-right-circle-fill p-3"></i></Link>
        </div>
      </>
    )
  }
}

export default Story;