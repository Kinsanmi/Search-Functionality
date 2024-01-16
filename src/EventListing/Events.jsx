import React from 'react'


export const Events = ({event, searchName}) => {

    const eventResult = () =>{

      if(event.length === 0){
        return <div className='result'>No results found for "{searchName}"</div>
      }

      

        return (
          <div className="list-items">
          <h1 style={{color: "#fff", textAlign: "center", marginTop: "10px"}}>All Movies</h1>
          <div className="event-name">
            {event &&
              event.map((items, index) => {
                return (
                  <div key={index} className="feature-style">
                    <div className="event">
                      <img src={items.Image} alt="" />
                      <h2 style={{textAlign: "center"}}>{items.names}</h2>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
        )
    }


    /* const data = ()=>{
      fetch(`https://demo.dataverse.org/api/search?q=*&type=dataset`).then(res => res.json()).then((data)=> console.log(data));
    }

    useEffect(()=>{
      data()
    },[])
 */

  return (

    <>
  {eventResult()}
    </>
  )
}


