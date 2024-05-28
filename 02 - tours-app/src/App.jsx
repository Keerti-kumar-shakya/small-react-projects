import { useEffect } from "react";
import { useState } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";

const url = 'https://www.course-api.com/react-tours-project';

function App() {
const [loading, setLoading] = useState(true);
const [tourData, setTourData] = useState([]);

const removeTours = (id) =>{
  const filter = tourData.filter((tour) => tour.id !== id);
  setTourData(filter);
}

const fetchData = async () => {
  setLoading(true);
try {
  const response = await fetch(url);
  const tour = await response.json();
  //console.log(tour);
  setLoading(false);
  setTourData(tour);
} catch (error) {
  setLoading(false);
  console.log(error);
}

}

useEffect( () =>{
  fetchData();
}, [])

if (loading) {
return (
<main>
 <Loading/>
</main>
)
}

if (tourData.length === 0) {
  return (
    <main className="no-tour-container">
      <h1 className="no-tour-heading">no tours left</h1>

      <button className="btn-refresh" onClick={() => fetchData()}>refresh</button>
    </main>
  )
}

  return (
    <>
    <header>
      <h1 className="heading">our tours</h1>
      <hr className="underline-heading"/>
    </header>

    <main className="container">
      <Tours tourData = {tourData} removeTours = {removeTours}/>
    </main>
    </>

  )
}

export default App
