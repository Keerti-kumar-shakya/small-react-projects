import { useState } from "react";
import ReviewsList from "./ReviewsList"
import data from './data.js'

console.log(data.length);

function App() {
const [count, setCount] = useState(0)
const reviewsData = data[count]

const increase = () => {

if (count < data.length - 1) {
  setCount((prevCount) => prevCount + 1)
 
}else if (data.length - 1 === count) {
  setCount(0)
}
}

const decrease = () => {

  if (count > 0) {
    setCount((prevCount) => prevCount - 1)
  } 
  else if (count  === 0) {
    setCount(data.length - 1)
  }
 
}

const randomResult = () => {
  const randomNumber = Math.floor(Math.random() * data.length);
console.log(randomNumber, count);
  if (randomNumber === count && randomNumber !== data.length - 1) {
   return setCount(prevPerson => prevPerson + 1)
  }

  if (randomNumber === data.length - 1) {
    return setCount(randomNumber - 1)
  }
  setCount(randomNumber)
}


  return (
  <main className="container">

    <ReviewsList 
    {...reviewsData}
    increase = {increase}
    decrease = {decrease}
    randomResult = {randomResult}
    />
  </main>
  )
}

export default App
