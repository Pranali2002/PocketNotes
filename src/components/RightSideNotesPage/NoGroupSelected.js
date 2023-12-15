import React from "react";

function NoGroupSelected() {
    return ( <
        div className = "no-group-selected" >
        <
        div className = "landing-img" >
        <
        img src = "/assets/landing.svg"
        alt = "Pocket Notes Logo" / >
        <
        /div> <
        div className = "landing-title" > Pocket Notes < /div> <
        div className = "landing-description" >
        Your go - to web app
        for creating, organizing, and accessing notes anytime, anywhere, even without an internet connection.Enjoy a chat - like interface to group and manage your notes effortlessly. <
        /div> <
        div className = "encryption" >
        <
        div className = "encryption-img" >
        <
        img src = "/assets/encryption.svg"
        alt = "End-to-End Encryption" / >
        <
        /div> <
        div className = "encryption-text" > end - to - end encrypted < /div> <
        /div> <
        /div>
    );
}

export default NoGroupSelected;