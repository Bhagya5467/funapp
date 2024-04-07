import React from 'react'
import "./addPost.css"
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import LiveTvIcon from '@mui/icons-material/LiveTv';

export default function AddPost() {
    return (
      <div className="addPost">
        <div className="addPostContainer">
          <div className="addPostTop">
            <img src="/images/1.jpeg" alt="" className="addPostPic" />
            <input
              placeholder="Whats in your mind....?"
              type="text"
              className="addPostInput"
            />
          </div>
          <hr className="postHr" />
          <div className="addPostBottom">
            <div className="addPostOptions">
              <div className="addPostOption">
                <InsertPhotoIcon htmlColor="orange" className="addPhoto" />
                <span className="addPostOPtionText">Add photo/video</span>
              </div>
              <div className="addPostOption">
                <AddLocationIcon htmlColor="green" className="addLocation" />
                <span className="addPostOPtionText">Add Location</span>
              </div>
              <div className="addPostOption">
                <LoyaltyIcon htmlColor="blue" className="tagFriends" />
                <span className="addPostOPtionText">Tag your friends</span>
              </div>
              <div className="addPostOption">
                <LiveTvIcon htmlColor="purple" className="live" />
                <span className="addPostOPtionText">Go Live</span>
              </div>
            </div>
            <button className="postButton">Post</button>
          </div>
        </div>
      </div>
    );
}