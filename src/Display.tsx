import React from "react";
import Count from "./Count";

type DisplayPropsType = {
    show: number | string
    start: number
    count: number
    addReset: () => void
    maxV: number
    addInc: () => void

}

function Display(props: DisplayPropsType) {
    const displayWrapper = (props.show === props.maxV || props.show === "Error") ? "Display-wrapper-max" : "Display-wrapper"

    return (
        <div className="Counter-wrapper">
            <div className={displayWrapper}>
                {props.show}
            </div>
            <Count
                show={props.show}
                start={props.start}
                addInc={props.addInc}
                addReset={props.addReset}
                maxV={props.maxV}/>
        </div>
    )
}
export default Display;