import React from 'react'
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
// icons
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import TelegramIcon from '@material-ui/icons/Telegram';
import StoreIcon from '@material-ui/icons/Store';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useStateValue} from './StateProvider';

function Sidebar() {
    const [{user}, dispatch] = useStateValue();

    return (
        <div className="sidebar">
            {/* Sidebar rows in the left */}
            <SidebarRow 
                src = {user.photoURL}
                title = {user.displayName}
            /> 
            {/* <SidebarRow Icon = {LocalHospitalIcon} title ="COVID-19 Information Center" /> */}
            <SidebarRow Icon = {EmojiFlagsIcon} title = "Flags"/>
            <SidebarRow Icon = {SupervisorAccountIcon} title = "Connection" />
            <SidebarRow Icon = {TelegramIcon} title = "Conversation"/>
            <SidebarRow Icon = {StoreIcon} title = "Pasal" />
            <SidebarRow Icon = {VideoLibraryIcon} title = "Videos" />
            {/* <SidebarRow Icon = {ExpandMoreIcon} title = "More" /> */}
        </div>
    );
}

export default Sidebar
