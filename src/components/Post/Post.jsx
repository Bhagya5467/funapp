import React from 'react'
import "./post.css"

export default function Post() {
    return (
      <div className="post">
        <div className="postContainer">
          <div className="postTop">
            <img src="/images/dog.jpeg" alt="" className="postImage" />
            <span className="postUserName">Nethuli Minasha</span>
            <span className="postTime">5 min ago</span>
          </div>
          <div className="postCenter">
            <div className="postCaption">hello travelers</div>
            <img src="/images/travel.jpeg" alt="" className="postedImage" />
          </div>
          <div className="postBottom">
            <div className="postBottomLeft">
              <img src="/images/like.jpg" alt="" className="reactIconPic" />
              <img src="/images/heart.jpg" alt="" className="reactIconPic" />
                        <img src="/images/hahaha.jpg" alt="" className="reactIconPic" />
                        <span className="likeCount">Hemantha and 37 others</span>
                    </div>
                    <div className="postBottomRight">
                        <div className="commentCount">15 comments</div>
                    </div>
          </div>
        </div>
      </div>
    );
}