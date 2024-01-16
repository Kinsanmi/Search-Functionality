
import { useEffect, useState } from 'react';
import './App.css';
import { Events } from './EventListing/Events';
import { Header } from './EventListing/Header';
import { AllEvent, fetchData } from './Api';
import { Search } from './Search/Search';



function App() {

  const [event, setEvent] = useState(AllEvent);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState() 

  useEffect (()=>{
    const search = () => {
      const result = AllEvent.filter((item)=> item.names.toLowerCase().includes(name.toLowerCase()));
      setEvent(result)
    }
    search();
  }, [name])

  const fetchRequest = async () =>{
    setLoading(true);
    try {
      const results = await fetchData()
      setEvent(results.allEvent);
    } catch (error) {
      setError(error.message)
    }finally {
      setLoading(false)
    }
  }

  useEffect(()=>{
    fetchRequest();
  }, [])



  const Loader = () => {
    if(loading){
      return <div className='loader'>
                <div className='load'>
                  <h3 className='span'>Loading...</h3>
                </div>
              </div>
    }

    if(error){
      return <div style={{textAlign: "center"}}>404 Error</div>
    }

    return (
      <>
        <Header setName={setName} />
        <Events  event={event} loading={loading} searchName={name} />
        <Search />
      </>
    )

  }

 

  return (

    <>
    {Loader()}
    </>
  );
}

export default App;
