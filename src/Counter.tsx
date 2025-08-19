import {useState} from "react";



export function Counter(){
    const [count, setCount] = useState(0);

    return (
        <>
            <p>Counter: {count}</p>,
            <button onClick={() => setCount((c) => c + 1)}>+1</button>
        </>

    )
}