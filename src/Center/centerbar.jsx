import React from 'react'
import Stories from './stories';
import Posts from './post';

function Centerbar() {
  return (
    <>
        <div className="b-3">
          <div className="h-20">
              <Stories />
          </div>
          <hr />
          <div>
              <Posts />
          </div>
        </div>
    </>
  )
}

export default Centerbar;