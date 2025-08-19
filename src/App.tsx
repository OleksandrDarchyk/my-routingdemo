import Hello from "./Hello.tsx";
import './App.css'
import {Counter} from "./Counter.tsx";

function App() {


  return (
    <>
      <h1>Hello React</h1>
        <Hello name="Oleksandr this is your props" />
        <Counter>
        </Counter>
    </>
  )
}

export default App
