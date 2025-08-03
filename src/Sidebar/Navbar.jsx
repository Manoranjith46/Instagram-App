import { useNavigate } from "react-router-dom";


function Navbar() {

    const navigate = useNavigate();

  return (
    <>
{/* Sidebar Navigation */}
        <div className="m-3" >
            <img className="mb-2" src="/public/Sidebar.png" alt="" width="100%"/>
            <div className="d-flex flex-column">
                <div className="imgsdiv" onClick={() => navigate('/')}>
                    <img className="imgs" src="/src/assets/icons/Home.png" />
                    Home
                </div>
                <div className="imgsdiv">
                    <img className="imgs" src="/src/assets/icons/Search.png"/>
                    Search
              </div>
                <div className="imgsdiv">
                    <img className="imgs" src="/src/assets/icons/Explore.png"/>
                    Explore
                </div>
                <div className="imgsdiv">
                    <img className="imgs" src="/src/assets/icons/Reels.png"/>
                    Reels
                </div>
                <div className="imgsdiv">
                    <img className="imgs" src="/src/assets/icons/Messages.png"/>
                    Messages
                </div>
                <div className="imgsdiv">
                    <img className="imgs" src="/src/assets/icons/Notifications.png"/>
                    Notifications
                </div>
                <div className="imgsdiv">
                    <img className="imgs" src="/src/assets/icons/Create.png"/>
                    Create
                </div>
                <div className="imgsdiv" onClick={() => navigate('/profile')}>
                    <img className="imgs rounded-circle" src="/src/assets/icons/Profile.jpg"/>
                    Profile
                </div>
                <div className="imgsdiv">
                    <img className="imgs" src="/src/assets/icons/Threads.png"/>
                    Threads
                </div>
                <div className="imgsdiv">
                    <img className="imgs" src="/src/assets/icons/More.png"/>
                    More
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar;