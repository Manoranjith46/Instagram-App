import useFetch from '../useFetch';

function Posts() {
  
  let Data = useFetch("http://localhost:5000/posts");
  
//Map through all posts
  const posts = Data.map((post) => (
    <div key={post.id} className='m-4 p-1'>
      <div className="d-flex align-items-center gap-1">
        <img className="img" src={post.user.profile_pic} alt="" />
        <p className="m-0 p-2">{post.user.username}</p>
      </div>

      <img  className="img-fluid img-thumbnail my-2 mx-1" src={post.image} alt="" />
      
      <div className="mx-2">
        <button className="btn btn-primary bg-transparent border-0 p-2 ">
          <img src="/src/assets/icons/Notifications.png" width="25px" alt="heart" />
        </button>
        <button className="btn btn-primary bg-transparent border-0 p-2">
          <img src="/src/assets/icons/Comment.png" width="25px" alt="heart" />
        </button>
        <button className="btn btn-primary bg-transparent border-0 p-2">
          <img src="/src/assets/icons/Share.png" width="25px" alt="heart" />
        </button>
      </div>

      <div className="mx-3">
        <b>{post.likes} Likes</b>
        <p>#{post.caption}</p>
        <p>View all {post.comments.length} Comments</p>

      </div>
    </div>
  ))


  if (!Data || Data.length == 0) {
    return(
      <div className="d-flex justify-content-center m-5 p-5">
        <h6 className="spinner-border text-primary m-5 p-3"/>
      </div>
    )
  }
  else{
    return(
      <div>
        {posts}
        <a href="https://www.flaticon.com/free-icons/send" title="send icons">Send icons created by Bingge Liu - Flaticon</a>
      </div>
    ); 
  }
}

export default Posts;