import React from 'react'
import "./Story.css";
import {Avatar} from '@material-ui/core';

//story features images, and videos
function Story({image, profileSrc, title}) {
    return (
        <div style= {{ backgroundImage: 'url(${image})'}}
                className = "story">
            {/* Avatar */}
                <Avatar  className="story_avatar" src={profileSrc}/>
            <h5>{title}</h5>      
        </div>
    );
}

export default Story;
