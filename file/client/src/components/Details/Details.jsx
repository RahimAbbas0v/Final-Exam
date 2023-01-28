import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'
import "./Details.css"
function Details() {
    let {Id} =useParams()
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get(`http://localhost:4000/products/${Id}`)
        .then(res=>setData(res.data))
    },[])
  return (
   <>
    <div className="col-4">
                    <div className="card2">
                        <img src={data.img} alt="" />
                        <div className="card-body">
                            <h2>{data.name}</h2>
                            <p>{data.about}</p>
                    </div>
                </div>
                </div>
   </>
  )
}

export default Details