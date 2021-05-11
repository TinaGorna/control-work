

type CountPropsType = {
    show: number | string
    start: number
    maxV: number
    addInc: () => void
    addReset: () => void
}

function Count(props: CountPropsType) {

    const classNameBtnIncrement = props.show === props.maxV || props.show === 'Set' || props.show === 'Error' ? "Btn-increment-max" : "Btn-increment"
    const classNameBtnReset = props.show === props.start || props.show === 'Set' || props.show === 'Error' ? "Btn-reset-start" : "Btn-reset"

    return (

        <div className="Btn-wrapper">

            <div className={classNameBtnIncrement}>
                <button onClick={props.addInc}>inc</button>
            </div>

            <div className={classNameBtnReset}>
                <button onClick={props.addReset}>reset</button>
            </div>

        </div>
    );
}

export default Count;