import React,{useState} from 'react';
import "./header.css"
import bar from './images/lines.png'
import YouTubeIcon from './images/YouTube.jpg'
import Magni from './images/search.png'
import Mic from './images/mic.png'
import Upload from './images/videoupload.png'
import Notifications from './images/notifications.png'
import Profile from './images/profile.png'



function Header() {



    return (
        <div>
            <div className='header'>
                <div className='icon'>
                    <div className="bar">
                        <img src={bar} alt="bar" />
                    </div>
                    <div className="youTube">
                        <img src={YouTubeIcon} alt="bar" />
                    </div>
                </div>
                <div className='searchSection'>
                    <div className='searchBar'>
                        <input type="text" placeholder='Search'></input>
                        <img className="magniGlass" src={Magni} alt="" />
                    </div>
                </div>
                <div className='profileIcons'>
                    <div className='mic'>
                        <img src={Mic} alt="mic" />
                    </div>  
                    <div className='profile'>
                        <img src={Profile} alt="avatar" />
                    </div>
                    <div className='notIcon'>
                        <img src={Notifications} alt="notiicon" />
                    </div>                                 
                    <div className='rightIcon'>
                        <img src={Upload} alt="upload" />
                    </div>                    
                </div>
            </div>

        </div>
    )
}

export default Header