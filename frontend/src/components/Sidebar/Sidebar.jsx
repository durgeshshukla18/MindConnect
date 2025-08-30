import React from 'react';
import './Sidebar.css';


function Sidebar() {
  return (
    <div className="sidebar">
        {/* <h2>Sidebar</h2> */}
        
        {/* new chat  */}
        <button className="new-chat-btn">+ New Chat</button>

        {/* search bar */}
        <div className="search-bar">
            <input type="text" placeholder="Search chats..." />
        </div>

        {/* chat history */}
        <div className="chat-history">
            <h3>Chat History</h3>
            <ul>
                <li>Chat 1</li>
                <li>Chat 2</li>
                <li>Chat 3</li>
            </ul>
        </div>

        {/* profile and settings */}
        <div className="bottom-section">
            {/* <div className="bottom-section" >Profile & Settings</div> */}
            <div>
                <button className="profile-btn">Profile</button>
            </div>
            <div>
                <button className="settings-btn">Settings</button>
            </div>
            <div>
                <button className="logout-btn">Logout</button>
            </div>
        </div>

    </div>
  );
}

export default Sidebar;