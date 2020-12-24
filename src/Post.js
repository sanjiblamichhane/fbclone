import React from 'react'
import './Post.css';
import { Avatar } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CommentIcon from '@material-ui/icons/Comment';
import ScreenShareIcon from '@material-ui/icons/ScreenShare';
import BookmarksIcon from '@material-ui/icons/Bookmarks';

function Post({profilePic, image, username, timestamp, message}) {
    return (
        <div className="post">
            {/* Post Top Informatioin */}
            <div className="post_top">
                <Avatar src={profilePic}
                className = "post_avatar" />
                <div className="post_topInfo">
                    <h3>{username}</h3>  
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>
                {/* Top Bottom Information */}
            <div className="post_bottom">
                    <p>{message}</p>
                </div>
                {/* Posted Image */}
                <div>
                    <img src={image} alt =""/>
                </div>
            {/* Interaction Section */}
            <div className="post_options">
                
                <div className="post_option">
                    {/* Love */}
                    <FavoriteBorderIcon />
                    <p>Love</p>
                </div>
                
                {/* Comment */}
                <div className="post_option">
                    <CommentIcon />
                    <p>Comment</p>
                </div>
                
                {/* Share */}
                <div className="post_option">
                    <ScreenShareIcon />
                    <p>Share</p>
                </div>
                
                {/* Bookmarks */}
                <div className="post_option">
                    <BookmarksIcon />
                    <p>Bookmark</p>
                </div>
            </div>
        </div>
    )
}

export default Post
