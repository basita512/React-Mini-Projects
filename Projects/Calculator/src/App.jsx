import { useState } from 'react'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState("")

  const display = (value) => {
    setInputValue(inputValue + value)
  }

  const calculate = () => {
    try {
      let result = eval(inputValue)
      setInputValue(String(result))
    } catch (error) {
      setInputValue("Error")
    }
  }

  const deleteLast = () => {
    setInputValue(inputValue.slice(0, -1))
  }

  const clear = () => {
    setInputValue("")
  }

  return (
    <>
      <form className='calculator' name='calc'>
        <input type="text" value={inputValue} className='input' />
        <span onClick={() => clear()}   className='button clear'>AC</span>
        <span onClick={deleteLast}  className='button clear'>DEL</span>
        <span onClick={() => display("%")}  className='button symbol'>%</span>
        <span onClick={() => display("/")}  className='button symbol'>/</span>
        <span onClick={() => display("7")}  className='button digit'>7</span>
        <span onClick={() => display("8")}  className='button digit'>8</span>
        <span onClick={() => display("9")}  className='button digit'>9</span>
        <span onClick={() => display("*")}  className='button symbol'>*</span>
        <span onClick={() => display("4")}  className='button digit'>4</span>
        <span onClick={() => display("5")}  className='button digit'>5</span>
        <span onClick={() => display("6")}  className='button digit'>6</span>
        <span onClick={() => display("-")}  className='button symbol'>-</span>
        <span onClick={() => display("1")}  className='button digit'>1</span>
        <span onClick={() => display("2")}  className='button digit'>2</span>
        <span onClick={() => display("3")}  className='button digit'>3</span>
        <span onClick={() => display("+")}  className='button symbol'>+</span>
        <span onClick={() => display("00")}  className='button digit'>00</span>
        <span onClick={() => display("0")}  className='button digit'>0</span>
        <span onClick={() => display(".")}  className='button symbol'>.</span>
        <span onClick={calculate}  className='button symbol equal'>=</span>
      </form>
    </>
  )
}

export default App
