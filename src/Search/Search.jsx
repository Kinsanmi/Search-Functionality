import React, { useState } from 'react'

export const Search = () => {

    const [search, setSearch] = useState("");
    const [result, setResult] = useState([]);


    const fetchMovies = () =>{
        const apiUrl = `https://demo.dataverse.org/api/search?q=${search}`;
        console.log(apiUrl);
        fetch(apiUrl).then(res => res.json())
        .then(data => setResult(data.data))
        .catch((error) => 
            console.log("Error failed", error),
        )
    };

    

    const searchResult = () =>{

        

        return (
            <>
            <div className='app'>
                <h1>Search list</h1>
                <input type="text" onChange={(e) => setSearch(e.target.value)} />
                <button onClick={fetchMovies}>Search</button>

                <div id='result'>
                    {result.length === 0 ? <div>
                        {result.map((item)=> {
                            return (
                                <div>{item.data}</div>
                            )
                        })}
                    </div> : <div>No results founds</div> }
                </div>
            </div>
            </>
        )
    }



  return (
    <>
    {searchResult()}
    </>
  )
}
