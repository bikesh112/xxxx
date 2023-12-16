import React, { useEffect } from "react";
import { testApi } from "../apis/Api";



const Homepage = () => {

    useEffect(()=>{
        testApi().then((res) =>{
            console.log(res.data)
        })
    },[])
    return (
        <div>     
            <h1>Homepage for pages folder!</h1>
        </div>
    )
}

export default  Homepage