import React from 'react'
import useFetch from '../useFetch'
import { useNavigate } from 'react-router-dom';

function Stories() {

// Using useNavigate hook to navigate to different routes
  const navigate = useNavigate();
  const storydata = useFetch("http://localhost:5000/stories");
  let len = storydata.length;



// Mapping through the fetched stories data to create story items
  let str = storydata && storydata.map((story) => (
          <div key={story.id} className="story-item" onClick={() =>{navigate(`/stories/${story.id}/${len}`)}} >
            <div className={`story-avatar ${story.isOwnStory ? 'own-story' : ''}`}>
              <img src={story.profile} alt={story.username} className="story-image"/>
              {story.isOwnStory && (
                <div className="add-story-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" fill="currentColor"/>
                  </svg>
                </div>
              )}
            </div>
            <p className="story-username">{story.username}</p>
          </div>
        ))



// If no stories are fetched, show a loading spinner
  if (!storydata || storydata.length === 0) {
    return (
      <div className="d-flex justify-content-center m-5 p-5">
        <h6 className="spinner-border text-primary m-5 p-3"/>
      </div>
    );
  }
// If stories are fetched, return the stories
  else{
    return (
    <div className="stories-container">
      <div className="stories-scroll">
        {str}
      </div>
    </div>
  )
  }
}

export default Stories;