import React from 'react'
import Navbar from '../Sidebar/Navbar';

function Profile() {
  return (
    <>
        <div className="d-flex">
            <Navbar />
        </div>
        <div className="profile-container">
            <div className="profile-info d-flex ">
              <img src="profile/Profile.jpg" width={150} height={150} alt="Profile" className="rounded-circle"/>
              <div className="d-flex flex-column justify-content-center mx-5">
                <div className="d-flex flex-row align-items-start mx-0">
                  <h3 className="mx-4">manoranjith_d</h3>
                  <button className="btn btn-primary text-danger bg-light border-0">Edit info</button>
                  <button className="btn btn-primary text-danger mx-2 bg-light border-0">View Archive</button>
                </div>
                <div className="d-flex mx-2">
                  <p className="mx-3 text-muted">1 Posts</p>
                  <p className="mx-3 text-muted">234 Followers</p>
                  <p className="mx-3 text-muted">120 Following</p>
                </div>
                <div className="mx-2">
                  <p className="mx-3"></p>
                  <p className="mx-3">Bio: This is a sample bio for the user.</p>
                </div>
              </div>
            </div>
            <div className="mt-5 d-flex flex-column">
              <div className="high d-flex flex-row gap-5 pb-5">
                <div>
                  <img src="profile/Profile.jpg" alt="Highlight 1" width={75} className="rounded-circle"/>
                  <p className="text-muted">Highlight</p>
                </div>
              </div>
            </div>
            <div>
              <div className="d-flex justify-content-evenly gap-5 mt-5 mb-0 pb-0">
                <img src="src/assets/icons/Border.png" alt="" width={25} className="mb-0"/>
                <img src="src/assets/icons/Feed.png" alt="" width={25} className="mb-0"/>
                <img src="src/assets/icons/Reels.png" alt="" width={25} className="mb-0"/>
                <img src="src/assets/icons/Saved.png" alt="" width={25} className="mb-0"/>
                <img src="src/assets/icons/Tagged.png" alt="" width={25} className="mb-0"/>
              </div>
              <hr />
            </div>
          </div>
    </>
  )
}

export default Profile;