import React from "react";
import './Scroll.css'

const Scroll = (props) => {
    return (
        <div className="scroller center ma4 br4">
            {props.children}
        </div>
    );
}

export default Scroll;