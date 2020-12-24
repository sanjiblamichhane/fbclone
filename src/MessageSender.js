import React , {useState} from 'react'
import './MessageSender.css';
import { Avatar } from '@material-ui/core';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import {useStateValue} from './StateProvider';
import db from'./firebase';
import firebase from 'firebase';

function MessageSender() {
    const [{user}, dispatch] = useStateValue();

    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = (e) => {
        //prevent the default behaviour
        e.preventDefault();

        db.collection('posts').add({
            message:input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl,
        })

        //some clever db stuff
        setInput("");
        setImageUrl("");
    };

    return (
        // Status posting section
        <div className="messageSender">
            {/* top */}
            <div className="messageSender_top">
                <Avatar  src={user.photoURL}/>
                <form>
                    <input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="messageSender_input"
                    placeholder={`What's on you mind, ${user.displayName}?`}
                    />
                    <input 
                    value = {imageUrl}
                    onChange={e => setImageUrl(e.target.value)}
                    className="messageSender_input"
                    placeholder = "image URL"/>
                    <button onClick={handleSubmit} type="submit">
                        Hidden Submit
                    </button>
                    </form>
            </div>
            {/* bottom */}
            <div className="messageSender_bottom">
                <div className="messageSender_option">
                    <VideoCallIcon style= {{color:"red"}} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender_option">
                    < PhotoLibraryIcon style= {{color:"green"}} />
                    <h3>Photo/Videos</h3>
                </div>
                <div className="messageSender_option">
                    <EmojiEmotionsIcon style= {{color:"orange"}} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender;
