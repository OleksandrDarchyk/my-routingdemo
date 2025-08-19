import Hello from "./Hello.tsx";
import './App.css'
import {Counter} from "./Counter.tsx";
import NameInput from "./NameInput.tsx";
import Book from "./Book.tsx";

function App() {


  return (
    <>
      <h1>Hello React</h1>
        <Hello name="Oleksandr this is your props" />
        <Counter>
        </Counter>
      <NameInput
      ></NameInput>
        <Book></Book>
    </>
  )
}

export default App
