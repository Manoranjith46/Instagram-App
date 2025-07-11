import React from 'react'
import Stories from './stories';
import Posts from './post';

function Centerbar() {
  return (
    <>
        <div className="h-20">
            <Stories />
        </div>
        <hr />
        <div>
            <Posts />
        </div>
    </>
  )
}

export default Centerbar;