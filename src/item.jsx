import { useContext } from "react";
import { testContext } from "./testcontext";

const Item = (props)=>{
    const context = useContext(testContext);
    const HandelDeleteString = (e)=>{
        // alert(e.target.innerHTML)
        context.setTimeArr(context.timeArr.filter(t => t != e.target.innerHTML))
    }
    return(
        <div className="saveTimeString" onClick={HandelDeleteString} >
            <p>
                {props.children}
            </p>
        </div>
    )
}
export default Item;