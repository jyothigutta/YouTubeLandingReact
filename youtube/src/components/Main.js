import React, { useState,useEffect } from 'react';
import "./main.css"
import adnail from './images/ad/Livspace.jpg'
import udemy from './images/ad/Udemy.jpg'
import Video from './Video';
import shortsImg from './images/shorts.png'
import Shorts from './Shorts'
import ShortsLogo from './images/shortsLogo.png'
import Sub from './images/Sub.jpg'
import Lib from './images/Lib.jpg'
import History from './images/History.jpg'
import YourVideo from './images/YourVideo.jpg'
import WatchLater from './images/WatchLater.jpg'
import Liked from './images/LikedVideos.jpg'
import ShowMore from './images/ShoeMore.jpg'
import Settings from './images/settings.jpg'
import Report from './images/report.jpg'
import Help from './images/help.jpg'
import Feedback from './images/feedback.jpg'



const adData = [
    {
        "Title": "Interiors at Affordable Starting Prices",
        "Desc": "Get personaliaed Designs at Affordable Prices, On-Time Delivery & Price Match Guarantee",
        "Thumbnail": adnail
    }
]

const mixvideolist = [
    {"Title":"Manasu Maree Full video Song","ChannelImage":"https://yt3.ggpht.com/nR7RGgWbWxbx87MHhwN1DzEd-5SDD3aqjLpwpBdjFzEV4nrwH6AhhtePn41JiGBSOK823yFq=s176-c-k-c0x00ffffff-no-rj","Thumbnail":"https://img.youtube.com/vi/Pal0uollc4E/mqdefault.jpg","ChannelName":"Adithya Music","MetaData":"53M views 2 years ago"},
    {"Title":"Unstoppable with NBK","ChannelImage":"https://cdn.siasat.com/wp-content/uploads/2021/08/Aha-1.jpg","Thumbnail":"https://img.youtube.com/vi/-RXGaauZgPw/mqdefault.jpg","ChannelName":"aha videoIN","MetaData":"6.7M views 3 days ago"},
    {"Title":"Circle Time with Ms. Monica","ChannelImage":"https://yt3.ggpht.com/twvLSKwA1IjGOTxvK-jGeHJw6nF-YEAQF7vcnVpm12FWEqIt56axSo5wmw1G2_na_8is1reclA=s176-c-k-c0x00ffffff-no-rj","Thumbnail":"https://img.youtube.com/vi/duggEV4Crdk/mqdefault.jpg","MetaData":"210k views 9 months ago","ChannelName":"Monica J"}
  
    ]

    const gardenlist = [
        {"Title":"Gardening in India & Germany","ChannelImage":"https://yt3.ggpht.com/s6eldyhKUEIeX2ig1kTbLEKj1CJjAzGQNt1q_by1HbrajGDM5bOT00BfnNFc8wh1qMg9K8hQ=s176-c-k-c0x00ffffff-no-rj","Thumbnail":"https://img.youtube.com/vi/lIFQArd6Jsg/mqdefault.jpg","ChannelName":"Bring Nature","MetaData":"1.4k views 11 months ago"},
        {"Title":"My Heartful Harvest|Vegetables","ChannelImage":"https://yt3.ggpht.com/ytc/AMLnZu_FLxk4t6Q0hnCCCH2a2YmHyHTlcxwqFTxOPI_L=s176-c-k-c0x00ffffff-no-rj","Thumbnail":"https://img.youtube.com/vi/xIaicf0nJ4c/mqdefault.jpg","ChannelName":"Mad Gardener","MetaData":"58k views 1 year ago"},
        {"Title":"Plant Song of India","ChannelImage":"https://yt3.ggpht.com/ytc/AMLnZu-5q9m2XwqqoM6dUL1lvrP-4rS8Z7xPgjn0Cic9jQ=s176-c-k-c0x00ffffff-no-rj","Thumbnail":"https://img.youtube.com/vi/R5I8KGWtsJU/mqdefault.jpg","MetaData":"33k views 3 months ago","ChannelName":"Garden Up"},
        {"Title":"10 Indoor low maintenance plants","ChannelImage":"https://yt3.ggpht.com/naKxOtjKqvcoMWTl2whL8b0Xu2CMVOUL28dFEg9cOll9BJYxlhMp1GYz3bH2Fg5KMOdovNEIwA=s176-c-k-c0x00ffffff-no-rj","Thumbnail":"https://img.youtube.com/vi/Ohpuepmbybg/mqdefault.jpg","MetaData":"656 views 4 days ago","ChannelName":"Sid Travel"}
      
        ]    

    const shorts = [
        {"Title":"Tribute to Spb Garu❤️ || Sweet memories","Thumbnail":"https://i.ytimg.com/vi/rP5x0vLKjWI/hq720_2.jpg?sqp=-oaymwEdCI4CEOADSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLCFyWpABzOJC-lCLbMLrvBP-y24wQ","MetaData":"3M views","Links":"https://www.youtube.com/shorts/rP5x0vLKjWI"},
        {"Title":"MMaate mantramu #spb","Thumbnail":"https://i.ytimg.com/vi/T2tuSXH_yh8/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLB6T1g6oRbwJ70ymyuS6vCUSQ2nSg","MetaData":"270k views","Links":"https://www.youtube.com/shorts/T2tuSXH_yh8"},
        {"Title":"Chitra and SP garu funny conversation","Thumbnail":"https://i.ytimg.com/vi/kVb_htOwg8c/hq720_2.jpg?sqp=-oaymwEdCJYDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLDwy689jh-5GRrsSfjhe24b_9zswA","MetaData":"5M views","Links":"https://www.youtube.com/shorts/kVb_htOwg8c"},
        {"Title":"My Memories With SPB Garu | Singer Sunitha","Thumbnail":"https://i.ytimg.com/vi/0lITffv2FBk/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLAAVRo2rEQRAbVpP0xarAWgzYHEgw","MetaData":"656k views","Links":"https://www.youtube.com/shorts/0lITffv2FBk"}   
        ]    
  
    const SubData =[
        {  "ChannelImage":"https://yt3.ggpht.com/nR7RGgWbWxbx87MHhwN1DzEd-5SDD3aqjLpwpBdjFzEV4nrwH6AhhtePn41JiGBSOK823yFq=s176-c-k-c0x00ffffff-no-rj","ChannelName":"Adithya Music"},
        {"ChannelImage":"https://cdn.siasat.com/wp-content/uploads/2021/08/Aha-1.jpg","ChannelName":"aha videoIN"},
        {"ChannelImage":"https://yt3.ggpht.com/twvLSKwA1IjGOTxvK-jGeHJw6nF-YEAQF7vcnVpm12FWEqIt56axSo5wmw1G2_na_8is1reclA=s176-c-k-c0x00ffffff-no-rj","ChannelName":"Monica J"},
        {"ChannelImage":"https://yt3.ggpht.com/s6eldyhKUEIeX2ig1kTbLEKj1CJjAzGQNt1q_by1HbrajGDM5bOT00BfnNFc8wh1qMg9K8hQ=s176-c-k-c0x00ffffff-no-rj","ChannelName":"Bring Nature"},
        {"ChannelName":"Girl Formula","ChannelImage":"https://yt3.ggpht.com/ytc/AMLnZu82lo2nI_4MEHzZFcrLRySfAbI8kvWWptHusvs2=s176-c-k-c0x00ffffff-no-rj"},
        {"ChannelName":"Sony LIV","ChannelImage":"https://yt3.googleusercontent.com/a4AOsw2qHfuXAooYs7EMkwqJMmW_Wbqebpzm8Xmf2Rj_95QMLnAAFDNRNOJG-sSoairOXvQKrS8=s176-c-k-c0x00ffffff-no-rj"},
        {"ChannelName":"WB Kids","ChannelImage":"https://yt3.googleusercontent.com/ytc/AMLnZu80jIF6oehgpUILTaUbqSM5xYHWbPoc_Bz7wddxzg=s176-c-k-c0x00ffffff-no-rj"}
    ]

function Main() {

    const subHeaderArray = ['Gardening', 'Mixes', 'Live', 'Telugu Cinema', 'Indian cuisine','Childrens Music','Animated films','Visual arts','Recently uploaded','Spiritual']; 

    const libArray =[
        {"Name":"Library","Image":Lib},
        {"Name":"History","Image":History},
        {"Name":"Your Videos","Image":YourVideo},
        {"Name":"Watch Later","Image":WatchLater},
        {"Name":"Liked Videos","Image":Liked},
        {"Name":"Show more","Image":ShowMore}
     
    ]

    const setArray=[
        {"Name":"Settings","Image":Settings},
        {"Name":"Report History","Image":Report},
        {"Name":"Help","Image":Help},
        {"Name":"Send feedback","Image":Feedback}
    ]

    let [hover, sethover] = useState(false)

    // const hoverStyle = {
    //     backgroundColor: "#d0cfcf"
    // }
    const handlehover = () => {
        sethover(true)
    }
    const handlehoverout = () => {
        sethover(false)
    }

    useEffect(() => {
        let sideNav = document.querySelector(".sideNav")
        console.log(sideNav.children);
        let childofsideNav = sideNav.children;
        for (let i = 0; i < childofsideNav.length; i++){
            // if (!childofsideNav[i].includes("SubHeader")){          
            childofsideNav[i].addEventListener("mouseenter", () => {
                childofsideNav[i].style.backgroundColor="#d0cfcf"
            })
            childofsideNav[i].addEventListener("mouseleave", () => {
                childofsideNav[i].style.backgroundColor="#FFFFFF"
            })
        // }
        }
    },[])

    return (
        <div>
            <div className='main'>
                <div className='sideNav'>
                    <div className='subMenu'><pre class="fa fa-home" ></pre><span>&nbsp;&nbsp;&nbsp;&nbsp;</span>Home</div>
                    <div className='subMenu'><img src={ShortsLogo}/><span>&nbsp;&nbsp;&nbsp;&nbsp;</span>Shorts</div>
                    <div className='subMenu'><img src={Sub}/><span>&nbsp;&nbsp;</span>Subscriptions</div>
                    
                    <hr line></hr>
                    {/* <div>Library</div>
                    <div>History</div>
                    <div>Your videos</div>
                    <div>Watch later</div>
                    <div>Liked videos</div>
                    <div>Show more</div> */}

                    {libArray.map(
                        data => (
                            <div className='subMenu'><img src={data.Image}/><span>&nbsp;&nbsp;</span>{data.Name}</div>

                        )

                    )}


                    <hr line></hr>
                    <div className='SubHeader'>Subscriptions</div>

                    {SubData.map(data =>(
                                <div className='SubContainer'>
                                    <div className='SubImage'>
                                        <img src={data.ChannelImage}></img>
                                    </div>
                                <div className='subName'><span>&nbsp;&nbsp;</span>{data.ChannelName} </div>
                                </div>
                        )
                            )}
                     <hr line></hr>
       
                     {setArray.map(
                        data => (
                            <div className='subMenu'><img src={data.Image}/><span>&nbsp;&nbsp;</span>{data.Name}</div>

                        )

                    )}
                    <div><p>About  <span>&nbsp;</span>Press Copyright <br></br>
                        Contact us<span>&nbsp;</span> Creators <br></br> Advertise <span>&nbsp;</span> Developers<br></br>
Terms <span>&nbsp;</span>Privacy <span>&nbsp;</span>Policy & Safety <br></br>How YouTube works<br></br> Test new features<br></br>
<br></br>
© 2023 Google LLC
                        </p></div>
                </div>
                <div className='content'>
                    <div className='subheader'>
                        <div className='selected'>All </div>
                        {/* <div onMouseEnter={handlehover} style={hoverStyle} onMouseLeave={handlehoverout}>New to you</div> */}

                        {subHeaderArray.map(header =>(
                                <div className='unselected'>{header}</div>
                        )
                            )}

                    </div>
                    <div className='video-container'>
                        <div className='ad'>
                            <img src={udemy}></img>
                            <div className='overlay'>
                                <div className="text">
                                    <a target="_blank" href="https://www.udemy.com/topic/Python/?utm_source=adwords-discovery&utm_medium=udemyads&utm_campaign=Topics_Action_Prospecting_Discovery_la.EN_cc.IN&utm_term=_._ag_138879001094_._ad_640478224514_._kw__._de_c_._dm__._pl__._ti_aud-396940771613_._li_9061996_._pd__._&matchtype=&gclid=Cj0KCQiA5NSdBhDfARIsALzs2EAihAppzRkOmHAazwu_NXm-AmAb4zi5fpECoxizW-CW7WHDM6gTyh4aAoZAEALw_wcB">
                                        <span id="imp">Enroll Now</span>
                                    </a>
                                </div>
                            </div>
                            <div className='video-title'>
                                <div><p>  Gain Phyton Skills</p></div>

                                <div><p> <span>&nbsp;</span> Ad: </p></div>
                                <div><p>Udemy</p></div>

                            </div>
                            <div className='ad-content'>Better your skills, better your year - for less. Lets explore future with Udemy</div>

                        </div>

                        {mixvideolist.map(i => <Video thumbnail= {i.Thumbnail} title={i.Title} channelImage={i.ChannelImage} channelName={i.ChannelName} metaData={i.MetaData} ></Video>)}

                    </div>
                    
                    <div className='video-container'>
                    {gardenlist.map(i => <Video thumbnail= {i.Thumbnail} title={i.Title} channelImage={i.ChannelImage} channelName={i.ChannelName} metaData={i.MetaData} ></Video>)}

                    </div>
                    <hr class="seperator"></hr>
                    <div className='shortsHeading'>
                        <div className='shortsLogo'>
                            <img src={shortsImg} ></img>
                        </div>
                    </div>
                    <div className='shorts-container'>
                            
                    {shorts.map(i => <Shorts thumbnail= {i.Thumbnail} title={i.Title} metaData={i.MetaData} link={i.Links} ></Shorts>)}

                    </div>


                </div>
            </div>

        </div>
    )
}

export default Main