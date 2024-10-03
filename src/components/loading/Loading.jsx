import { ProgressBar } from "react-loader-spinner";

export default function Loading() {
    return (
        <div style={{display:"flex", justifyContent:"center", height:"100vh", alignItems:"center"}}>
            <ProgressBar
            visible={true}
            height="80"
            width="500"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass=""
        /></div>
    )
}