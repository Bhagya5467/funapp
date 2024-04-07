import React from 'react';
import './rightPane.css';

export default function RightPane() {
    return (
      <div className="rightPaneBox">
        <div className="rightPaneContainer">
          <div className="adContainer">
            <span className="sponsored"></span>
            <img src="/images/ad.jpg" alt="" className="adImage" />
            <span className="adText">Enjoy Smooth and Milky Chocolates</span>
          </div>
          <div className="birthdayContainer">
            <img src="/images/birthday.jpg" alt="" className="birthdayImage" />
            <span className="birthdatText">
              <b>Saumya Divyanjalee</b> and <b>2 others</b> having their
              birthday today.
            </span>
          </div>
          <div className="friendList">
            <li className="onlineFriend">
              <div className="onlineFriendImageContainer">
                <img src="/images/2.jpg" alt="" className="onlineFriendImg" />
                <span className="onlineStatus"></span>
              </div>
              <span className="onlineFriendName">Rashmika Maddana</span>
            </li>
            <li className="onlineFriend">
              <div className="onlineFriendImageContainer">
                <img src="/images/2.jpg" alt="" className="onlineFriendImg" />
                <span className="onlineStatus"></span>
              </div>
              <span className="onlineFriendName">Rashmika Maddana</span>
            </li>
            <li className="onlineFriend">
              <div className="onlineFriendImageContainer">
                <img src="/images/2.jpg" alt="" className="onlineFriendImg" />
                <span className="onlineStatus"></span>
              </div>
              <span className="onlineFriendName">Rashmika Maddana</span>
            </li>
            <li className="onlineFriend">
              <div className="onlineFriendImageContainer">
                <img src="/images/2.jpg" alt="" className="onlineFriendImg" />
                <span className="onlineStatus"></span>
              </div>
              <span className="onlineFriendName">Rashmika Maddana</span>
            </li>
            <li className="onlineFriend">
              <div className="onlineFriendImageContainer">
                <img src="/images/2.jpg" alt="" className="onlineFriendImg" />
                <span className="onlineStatus"></span>
              </div>
              <span className="onlineFriendName">Rashmika Maddana</span>
            </li>
            <li className="onlineFriend">
              <div className="onlineFriendImageContainer">
                <img src="/images/2.jpg" alt="" className="onlineFriendImg" />
                <span className="onlineStatus"></span>
              </div>
              <span className="onlineFriendName">Rashmika Maddana</span>
            </li>
          </div>
        </div>
      </div>
    );
}
