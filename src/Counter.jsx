import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)
    const [values, setValues] = useState({first: "", last: ""})
    
    const add = () =>{
        // setCount(count + 1)
        setCount(prev => prev + 1)
        setCount(prev => prev + 1)
    }
    const subtract = () =>{
        // setCount(count - 1)
        setCount(prev => prev - 1)
        setCount(prev => prev - 1)
    }
    
    const updateArray = () => {
       setValues(prev => ({...values, ...prev, first: "Dave"}))
       setValues(prev => ({...prev, last: "Ibrahim"}))
    }
    updateArray()
    console.log(values);
    return (
        <section className="couter">
            <h1>{count}</h1>
            <div className="calcBtn">
                <button onClick={subtract}>-</button>   {/*() => setCount(prevState => prevState - 1)*/}
                <button onClick={add}>+</button>       {/*() => setCount(prevState => prevState + 1)*/}
                <div className="reset">
                <button onClick={() => setCount(0)}>Reset</button>
                </div>
            </div>
        </section>
    )
}

export default Counter
