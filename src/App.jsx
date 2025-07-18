import React from 'react'
import Navbar from './Sidebar/Navbar';
import Centerbar from './Center/centerbar';
import Suggestion from './Footer/suggestion';

function App() {
  return (
    <>
        <div className="d-flex">
            <div className="w-20">
                <Navbar />
            </div>
            <div className= "w-50">
              <Centerbar />
            </div>
            <div className="w-35 ps-2">
              <Suggestion />
            </div>
        </div>
    </>
  )
}

export default App;