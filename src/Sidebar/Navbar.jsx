import React from 'react'

function Navbar() {
  return (
    <>
        <div className="m-3" >
            <img className="mb-2" src="/public/Sidebar.png" alt="" width="10%"/>
            <div className="d-flex flex-column" id="gap">
                <div>
                    <img className="imgs" src="/src/assets/icons/Home.png" alt="" width="2%" />
                    Home
                </div>
                <div>
                    <img className="imgs" src="/src/assets/icons/Search.png" alt="" width="2%" />
                    Search
                </div>
                <div>
                    <img className="imgs" src="/src/assets/icons/Explore.png" alt="" width="2%" />
                    Explore
                </div>
                <div>
                    <img className="imgs" src="/src/assets/icons/Reels.png" alt="" width="2%" />
                    Reels
                </div>
                <div>
                    <img className="imgs" src="/src/assets/icons/Messages.png" alt="" width="2%" />
                    Messages
                </div>
                <div>
                    <img className="imgs" src="/src/assets/icons/Notifications.png" alt="" width="2%" />
                    Notifications
                </div>
                <div>
                    <img className="imgs" src="/src/assets/icons/Create.png" alt="" width="2%" />
                    Create
                </div>
                <div>
                    <img className="imgs" src="/src/assets/icons/Home.png" alt="" width="2%" />
                    Profile
                </div>
            </div>
            <div className="position-fixed bottom-0 d-flex flex-column gap-3 mb-1">
                <div>
                    <img className="imgs" src="/src/assets/icons/Threads.png" alt="" width="3.5%" />
                    Threads
                </div>
                <div>
                    <img className="imgs" src="/src/assets/icons/More.png" alt="" width="4%" />
                    More
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar;