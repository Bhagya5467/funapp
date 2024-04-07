import React from 'react';
import './leftPane.css';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import GroupsIcon from '@mui/icons-material/Groups';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import FlagIcon from '@mui/icons-material/Flag';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BuildIcon from '@mui/icons-material/Build';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function LeftPane() {
    return (
      <div className="leftPaneBox">
        <div className="leftPaneContainer">
          <div className="leftPaneMenu">
            <li className="leftPaneMenuItem">
              <MarkUnreadChatAltIcon className=" " />
              <span className="leftPaneMenuText">Messages</span>
            </li>
            <li className="leftPaneMenuItem">
              <GroupsIcon className="leftPaneMenuIcon" />
              Groups<span className="leftPaneMenuText"></span>
            </li>
            <li className="leftPaneMenuItem">
              <RssFeedIcon className="leftPaneMenuIcon" />
              Feed<span className="leftPaneMenuText"></span>
            </li>
            <li className="leftPaneMenuItem">
              <FlagIcon className="leftPaneMenuIcon" />
              <span className="leftPaneMenuText">Pages</span>
            </li>
            <li className="leftPaneMenuItem">
              <CalendarMonthIcon className="leftPaneMenuIcon" />
              <span className="leftPaneMenuText">Events</span>
            </li>
            <li className="leftPaneMenuItem">
              <BuildIcon className="leftPaneMenuIcon" />
              <span className="leftPaneMenuText">Settings</span>
            </li>
            <li className="leftPaneMenuItem">
              <SportsEsportsIcon className="leftPaneMenuIcon" />
              Games<span className="leftPaneMenuText"></span>
            </li>
            <li className="leftPaneMenuItem">
              <NewspaperIcon className="leftPaneMenuIcon" />
              <span className="leftPaneMenuText">News</span>
            </li>
            <li className="leftPaneMenuItem">
              <WorkOutlineIcon className="leftPaneMenuIcon" />
              <span className="leftPaneMenuText">Jobs</span>
            </li>
            <li className="leftPaneMenuItem">
              <AddShoppingCartIcon className="leftPaneMenuIcon" />
              <span className="leftPaneMenuText">Market</span>
            </li>
            <hr />
            <div className="pagesYouLiked">
              <h1>Pages You Liked</h1>
            </div>
            <div className="pagesList">
              <li className="pageListItem">
                <img src="/images/2.jpg" alt="" className="pagePic" />
                <span className="pageName">Nature Love</span>
              </li>
              <li className="pageListItem">
                <img src="/images/dog.jpeg" alt="" className="pagePic" />
                <span className="pageName">Cute pets</span>
              </li>
              <li className="pageListItem">
                <img src="/images/friends.jpg" alt="" className="pagePic" />
                <span className="pageName">Uni Gang</span>
              </li>
              <li className="pageListItem">
                <img src="/images/travel.jpeg" alt="" className="pagePic" />
                <span className="pageName">Travel</span>
              </li>
              <li className="pageListItem">
                <img src="/images/food.jpg" alt="" className="pagePic" />
                <span className="pageName">Foodies</span>
              </li>
            </div>
          </div>
        </div>
      </div>
    );
}
