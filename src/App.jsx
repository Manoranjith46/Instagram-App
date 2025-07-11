import React from 'react'
import Navbar from './Sidebar/Navbar';
import Centerbar from './Center/centerbar';

function App() {
  return (
    <>
        <div className="d-flex vh-100">
            <div className="w-20">
                <Navbar />
            </div>
            <hr />
            <div className= "w-50">
              <Centerbar />
            </div>
            <div className="w-30">Suggestions</div>
            </div>
    </>
  )
}

export default App;