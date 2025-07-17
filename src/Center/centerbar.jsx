import React from 'react'
import Posts from './post';
import Stories from './stories';

function Centerbar() {
  return (
    <>
        <div className="b-3">
          <div className="h-20">
              <Stories />
          </div>
          <div>
              <Posts />
          </div>
        </div>
    </>
  )
}

export default Centerbar;