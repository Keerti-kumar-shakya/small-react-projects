import { useEffect } from "react";
import { useState } from "react";
import Loading from "./components/Loading";

const url = 'https://www.course-api.com/react-tours-project';

function App() {
const [loading, setLoading] = useState(true);
const [tourData, setTourData] = useState([]);

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

  return (
    <>
    <header>
      <h1 className="heading">our tours</h1>
      <hr className="underline-heading"/>
    </header>

    <main className="container">
    </main>
    </>

  )
}

export default App
