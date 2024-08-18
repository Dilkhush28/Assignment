import React from 'react'
import { useState, useEffect } from 'react'
function ProductDetail() {
  const [data, setData] = useState({})

useEffect(()=>{
    fetch(`https://dummyjson.com/products`)
.then((res)=>res.json())
.then((res)=>setData(res))
console.log(data)
},[])
  return (
    <div>
      
    </div>
  )
}

export default ProductDetail
