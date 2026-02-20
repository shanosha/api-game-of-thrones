import { useEffect, useState } from "react"
import Character from "./Character/Character";
// import loader from "./assets/loading-bue-dots.gif"

    // "id": 0,
    // "firstName": "Daenerys",
    // "lastName": "Targaryen",
    // "fullName": "Daenerys Targaryen",
    // "title": "Mother of Dragons",
    // "family": "House Targaryen",
    // "image": "daenerys.jpg",
    // "imageUrl": "https://thronesapi.com/assets/images/daenerys.jpg"


function App() {
  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(null);
  const [error,setError] = useState(null);

  useEffect(()=>{

    let url = "https://thronesapi.com/api/v2/Characters";

    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {

      try {
        const response = await fetch(url, { signal });

        if(!response.ok){
          throw new Error("Network response not ok");
        }

        const data = await response.json();
        setData(data);
        console.log("Data",data)
      }
      catch(e) {
        setError(e.message);
        console.error(e);
      }
      finally {
        setLoading(false);
      }
    }

    setLoading(true)
    setError(null)
    setTimeout(fetchData,3000)

    return () => {
      controller.abort;
    }

  },[]);

  const characterElements = data.map((char)=><Character key={char.id} character={char} />)

  return (
    <>
      <section className="flex flex-col justify-center items-center">
        <h1 className="text-3xl my-8 font-bold">Game of Thrones Characters</h1>
        {loading && (<div className="bg-white py-1 px-2 rounded-sm">Loading...</div>)}
        {error && (<p className="py-1 px-2 rounded-sm text-red-600 bg-red-100">{error}</p>)}
        <ul className="max-w-3xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 center">
          {characterElements}
        </ul>
      </section>
    </>
  )
}

export default App
