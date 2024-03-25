import React, { useEffect, useState } from 'react'

function CopyrightFooter() {
    const [newYear,setNewDate] = useState(new Date().getFullYear())
    

  return (
    <div style={{backgroundColor:"#ECF0F1",padding:"10px"}}>
      <p style={{textAlign:"center"}}>&copy; <span>{newYear}</span>  UrbanCart.Inc</p>
    </div>
  )
}

export default CopyrightFooter
