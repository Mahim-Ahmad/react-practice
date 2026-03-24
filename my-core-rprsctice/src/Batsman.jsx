import { useState } from "react"

 export default function Batsman(){
    const [runs, setRuns]= useState(0);
    const [six,setSix]=useState(0);


    const handleSingle = () =>{
        const updatedruns = runs+1;
        setRuns(updatedruns);

    }
    const handlefour = () =>{
        const updatedruns = runs+4;
        setRuns(updatedruns);

    }
    const handlesix = () =>{
        const updatedruns = runs+6;
        const updatedsix=six+1;
        setRuns(updatedruns);
        setSix(updatedsix);

    }



    return(
        <div>
            <h3>Player : Bangla batsman</h3>
            <p>six : {six}</p>
            <h1>score : {runs}</h1>
            <button onClick={handleSingle}>singlr</button>
            <br />
            <button onClick={handlefour}>four</button>
            <br />
            <button onClick={handlesix}>six</button>
        </div>
    )

 }