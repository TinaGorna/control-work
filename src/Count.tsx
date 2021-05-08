import React from "react";

type CountPropsType = {
    show: number | string
    start: number
    addInc: () => void
    addReset: () => void
    maxV: number
}

export function Count(props: CountPropsType) {
    const btnIncrement = props.show === props.maxV ||
    props.show === "Set" ||
    props.show === "Error" ?
        "Btn-increment=max" :
        "Btn-increment"

    const btnReset = props.show === props.start ||
    props.show === "Set" ||
    props.show === "Error" ?
        "Btn-reset-start" : "Btn-reset"

    return (
        <div className="Btn-wrapper">
            <div className={btnIncrement}>
                <button onClick={props.addInc}>inc</button>
            </div>
            <div className={btnReset}>
                <button onClick={props.addReset}>reset</button>
            </div>
        </div>
    )
}

export default Count;