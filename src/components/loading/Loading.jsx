import wasteContainer from '../../assets/images/radWaste/wasteContainer.svg';
import { useState, useEffect } from "react";

export default function Loading() {
    // return (
    //     <div style={{display:"flex",width:"100vw", justifyContent:"center", height:"100vh", alignItems:"center"}}>
    //         <ProgressBar
    //         visible={true}
    //         height="80"
    //         width="500"
    //         ariaLabel="progress-bar-loading"
    //         wrapperStyle={{}}
    //         wrapperClass=""
    //     /></div>
    // )
    const [fillPercentage, setFillPercentage] = useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            setFillPercentage(85);
        }, 100);
    }, [])
    
    return (
        <div style={{display:"flex", height:"100vh", justifyContent:"center", alignItems:"center"}}>
            <div style={{position:"relative", justifyContent:"center", display:"flex"}}>
                <img 
                    src={wasteContainer}
                    alt="Battery Outline"
                    style={{position:"relative", zIndex:"1"}}  
                />
                <div style={{ height: `${fillPercentage}%`, position:"absolute", bottom:"0", width:"90%", backgroundColor:"#6B8E23", zIndex:"0", transition:"height 0.5s ease", borderRadius:"5px" }} />
            </div>
        </div>
    )
}