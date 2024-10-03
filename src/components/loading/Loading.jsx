import loadingContainer from '../../assets/images/loading/loadingContainer.svg';
import { useState, useEffect } from "react";

export default function Loading() {
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
                    src={loadingContainer}
                    alt="Battery Outline"
                    style={{position:"relative", zIndex:"1"}}  
                />
                <div style={{ height: `${fillPercentage}%`, position:"absolute", bottom:"0", width:"90%", background:"linear-gradient(0, #33422A, #648252)", zIndex:"0", transition:"height 0.5s ease", borderRadius:"5px" }} />
            </div>
        </div>
    )
}