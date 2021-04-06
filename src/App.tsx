import React, {useState} from "react";
import "./App.css";
import {Count} from "./Count";


function App() {

    const [count, setCount] = useState<number>(0);

    function inc() {
        setCount(count + 1)
    }

    function reset() {
        setCount(0)
    }

    let max = 5
    return (
        <div className='App'>
            <div className='App-wrapper'>
                <Count count={count}
                       max={max}
                       addInc={inc}
                       addReset={reset}/>
            </div>
        </div>

    );
}

export default App;
