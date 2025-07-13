import React from 'react'
import useFetch from '../useFetch';

function Posts() {
  
  let Data = useFetch();

  if (!Data || Data.length === 0) {
    return(
      <div className='d-flex justify-content-center'>
        Loading posts...
      </div>
    )
  }
  else{
    return(
      <div>
        {/* Map through all posts */}
        {Data.map((post) => (
          <div key={post.id}>
            <div className='d-flex align-items-center gap-1'>
              <img className="img" src={post.user.profile_pic} alt="" />
              <p>Username: {post.user.username}</p>
            </div>
            <img className="img-fluid" src={post.image} alt="" />
            <p>Likes: {post.likes}</p>
            <p>#{post.caption}</p>
          </div>
        ))}
      </div>
    ); 
  }
}

export default Posts;