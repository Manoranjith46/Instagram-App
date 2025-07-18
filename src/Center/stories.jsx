import React from 'react'
import useFetch from '../useFetch'
import { useNavigate } from 'react-router-dom';

function Stories() {

  const navigate = useNavigate();
  const storydata = useFetch("http://localhost:5000/stories");
  let len = storydata.length;

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



  return (
    <div className="stories-container">
      <div className="stories-scroll">
        {str}
      </div>
    </div>
  )
}

export default Stories;