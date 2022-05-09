import React, { useContext } from "react";
import Item from "./item";
import { testContext } from "./testcontext";

const TimeList = ()=>{
    const context = useContext(testContext);
    return(
        <div className="">
            {context.timeArr.map((c)=>(
                <Item key={Math.random()}>{c}</Item>
            ))}
        </div>
    )
}
export default TimeList;