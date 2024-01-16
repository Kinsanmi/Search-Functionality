import React from 'react'


export const Header = ({setName}) => {



  return (
    <div style={{textAlign: "center", padding: "10px 0"}}><input style={{padding: "8px", width: "300px", borderRadius: "6px", outline: "none"}} type="text" placeholder='Search Event' autoComplete='off' required onChange={(e) => setName(e.target.value)}/>
    </div>

  )
}
