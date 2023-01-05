import React from "react";
import './video.css';


function Video(props){
    return (

        <div>        
                      
            
           <div className='video'>    
           
				<img src={props.thumbnail} alt={props.thumbnail} class='image'></img> 
            </div>
                 <div className="info">
                    <div className="channelImg">
                        <img src={props.channelImage} alt ={props.channelImage} ></img>

                    </div>
                    <div className="data">
                        <span>{props.title} <br></br> <p>{props.channelName} . {props.metaData} </p></span>
                    </div>
                 </div>

             
                

        </div>

    )
}

export default Video;