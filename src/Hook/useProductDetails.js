import React, { useEffect, useState } from 'react'
import { Menu } from 'antd';

function useProductDetails() {
const [data, setData] = useState({})

useEffect(()=>{
    fetch(`https://dummyjson.com/products`)
.then((res)=>res.json())
.then((res)=>setData(res))
console.log(data)
},[])

console.log(data)
return data
}

export default useProductDetails
