import {Avatar} from "@material-ui/core";
import React from 'react'
import "./SidebarRow.css"

// SidebarRow() can take props
function SidebarRow({src, Icon, title}) {
    return (
        <div className="SidebarRow">
            {src && <Avatar src={src} />}
            {Icon && <Icon />}

            <p>{title}</p>
        </div>
    )
}

export default SidebarRow;
