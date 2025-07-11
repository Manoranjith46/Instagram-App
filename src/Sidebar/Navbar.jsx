import React from 'react'

function Navbar() {
  return (
    <>
        <div className="m-4">
            <img className="mb-3 mt-2 ml-1" src="/public/Sidebar.png" alt="" width="60%"/>
            <div className="d-flex flex-column" id="gap">
                <div>
                    <img className="imgs" src="/src/assets/icons/Home.png" alt="" width="11%" />
                    Home
                </div>
                <div>
                    <img className="imgs" src="/src/assets/icons/Search.png" alt="" width="11%" />
                    Search
                </div>
                <div>
                    <img className="imgs" src="/src/assets/icons/Explore.png" alt="" width="11%" />
                    Explore
                </div>
                <div>
                    <img className="imgs" src="/src/assets/icons/Reels.png" alt="" width="11%" />
                    Reels
                </div>
                <div>
                    <img className="imgs" src="/src/assets/icons/Messages.png" alt="" width="11%" />
                    Messages
                </div>
                <div>
                    <img className="imgs" src="/src/assets/icons/Notifications.png" alt="" width="11%" />
                    Notifications
                </div>
                <div>
                    <img className="imgs" src="/src/assets/icons/Create.png" alt="" width="11%" />
                    Create
                </div>
                <div>
                    <img className="imgs" src="/src/assets/icons/Home.png" alt="" width="11%" />
                    Profile
                </div>
            </div>
            <div className="position-fixed bottom-0 d-flex flex-column gap-3 mb-1">
                <div>
                    <img className="imgs" src="/src/assets/icons/Threads.png" alt="" width="4%" />
                    Threads
                </div>
                <div>
                    <img className="imgs" src="/src/assets/icons/More.png" alt="" width="4.5%" />
                    More
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar;