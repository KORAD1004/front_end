import loadingContainer from '../../assets/images/loading/loadingContainer.svg';
import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';

export default function Loading({time}) {
    const [fillPercentage, setFillPercentage] = useState(0);
    const isDesktop = useMediaQuery({ query: '(min-width: 1113px)' });

    useEffect(()=>{
        setTimeout(()=>{
            setFillPercentage(85);
        }, 100);
    }, [])
    
    return (
    (!isDesktop||time===7)&&
        <div style={{display:"flex", height: time===7?"70vh":"100vh", justifyContent:"center", alignItems:"center"}}>
            <div style={{position:"relative", justifyContent:"center", display:"flex"}}>
                <img 
                    src={loadingContainer}
                    alt="Battery Outline"
                    style={{position:"relative", zIndex:"1"}}  
                />
                <div style={{ height: `${fillPercentage}%`, position:"absolute", bottom:"0", width:"90%", background:"linear-gradient(0, #33422A, #648252)", zIndex:"0", transition:`height ${time}s ease`, borderRadius:"5px" }} />
            </div>
        </div>
    )
}

Loading.propTypes = {
    time: PropTypes.number.isRequired, // time은 숫자형이며 필수 prop
};