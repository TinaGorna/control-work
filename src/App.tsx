import React, { useState, ChangeEvent } from 'react';
import './App.css';
import Display from "./Display";
import SetMenu from "./SetMenu";

function App() {

    const [locMax, setMaxLoc] = useState<number>(Number(localStorage.maxValue) ? Number(localStorage.maxValue) : 5)
    const [locStart, setStartLoc] = useState<number>(Number(localStorage.startValue) ? Number(localStorage.startValue) : 0)
    const [maxValue, setMaxValue] = useState<number>(Number(localStorage.maxValue) ? Number(localStorage.maxValue) : 5)
    const [startValue, setStartValue] = useState<number>(Number(localStorage.startValue) ? Number(localStorage.startValue) : 0)
    const [count, setCount] = useState<number>(Number(localStorage.startValue) ? Number(localStorage.startValue) : 0)
    const [show, setShow] = useState<number | string>(Number(localStorage.startValue) ? Number(localStorage.startValue) : 0)

    const changeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        let parseStart: number = +e.currentTarget.value
        if (parseStart >= -1 && locMax >= -1) {
            setStartLoc(parseStart)
            setShow('Set')
            localStorage.setItem('startValue', JSON.stringify(Number(e.currentTarget.value)))
        } else if (parseStart < -1 || parseStart >= locMax || locMax < 0) {
            setShow('Error')
        }
    }

    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        let parseMax: number = +e.currentTarget.value
        if (parseMax >= -1 && locStart >= -1) {
            setMaxLoc(parseMax)
            setShow('Set')
            localStorage.setItem('maxValue', JSON.stringify(Number(e.currentTarget.value)))
        } else if (parseMax < -1 || parseMax <= locStart || locStart < 0) {
            setShow('Error')
        }
    }

    function increment() {
        if (count < maxValue && locStart >= 0 && locMax >= 0 && locStart < locMax && maxValue === locMax && startValue === locStart) {
            setCount(count + 1)
            setShow(count + 1)
        } else if (maxValue !== locMax && startValue !== locStart) {
            setShow('Set')
        }
    }

    function reset() {
        if (locStart >= 0 && locMax >= 0 && locStart < locMax  && maxValue === locMax && startValue === locStart) {
            setCount(Number(localStorage.startValue))
            setShow(Number(localStorage.startValue))
        } else if(maxValue !== locMax && startValue !== locStart) {
            setShow('Set')
        }
    }

    const saveData = () => {
        if(locStart >= 0 && locMax >=0 && locStart < locMax) {
            setMaxValue(Number(localStorage.maxValue))
            setStartValue(Number(localStorage.startValue))
            setCount(Number(localStorage.startValue))
            setShow(Number(localStorage.startValue))
        } else {
            setShow('Error')
        }
    }

    return (
        <div className='App-wrapper'>

            <SetMenu
                start={startValue}
                maxV={maxValue}
                show={show}
                changeMaxValue={changeMaxValue}
                changeStartValue={changeStartValue}
                saveData={saveData} />
            <Display
                start={startValue}
                maxV={maxValue}
                count={count}
                show={show}
                addInc={increment}
                addReset={reset} />

        </div>
    );
}

export default App;