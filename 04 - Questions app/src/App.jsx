import { useState } from "react";
import Questions from "./Questions"
import questions from './data.js'

console.log(questions);

function App() {
  const [question, setQuestion] = useState(questions);
  const [activeId, setActiveId] = useState(null)
 
  const toggleQuestion = (id) => {
    const newActiveId = id === activeId? null : id;
    setActiveId(newActiveId);
  }
  return (
    <main>
      <Questions question = {question}
      toggleQuestion = {toggleQuestion}
      activeId = {activeId}
      />
    </main>
  )
}

export default App
