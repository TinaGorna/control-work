import React from "react";

type CountPropsType = {
    count: number
    addInc: () => void
    addReset: () => void
    max: number
}

export function Count(props: CountPropsType) {

    return (
        <div className='counter'>
            <div className='display'><span className={props.count === props.max ? "disable" : ""}>{props.count}</span></div>
            <div className='buttons'>
                <button onClick={props.addInc} disabled={props.count === props.max}>inc</button>
                <button onClick={props.addReset} disabled={props.count === 0}>reset</button>
            </div>
        </div>
    )
}