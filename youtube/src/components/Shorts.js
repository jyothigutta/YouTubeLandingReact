import React from "react";
import './shorts.css';


function Shorts(props){
    return (

        <div>        
                      
            
           <div className='shorts'>   
           {console.log(props.Links) }
           <a target="_blank" href={props.link}>
				<img src={props.thumbnail} alt={props.thumbnail} class='image'></img> </a>
            </div>
                 <div className="info">
                    
                    <div className="data">
                        <span>{props.title} <br></br> <p>{props.metaData} </p></span>
                    </div>
                 </div>

             
                

        </div>

    )
}

export default Shorts;