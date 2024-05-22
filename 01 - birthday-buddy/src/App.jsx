import { useState } from "react"
import data from "./data"
import List from "./List";

function App() {

  const [people, setPeople] = useState(data);
  console.log(people);

  const deleteDate = (id) => {
  const uniqueData = people.filter( (person) => person.id !== id);
  setPeople(uniqueData)
  }

  return (
    <main>
      <section className="container">
        <h3> {people.length} Birthdays Today</h3>
        <List people = {people} deleteDate = {deleteDate}/>
        {people.length === 0 && <button 
        className="btn-refresh"
        onClick={() => setPeople(data)}
        >refresh</button> }

       {people.length > 0 && <button className="btn"
        onClick={() => setPeople([])}
        >
          clear all
        </button>}
      </section>
    </main>
  )
}

export default App
