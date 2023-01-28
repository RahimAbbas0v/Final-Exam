import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import "./Cards.css"
import { Input } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../context/favitems'
function Cards() {
    const [data,setdata]=useState([])
    const [search,setSearch]=useState([])
    const [sort,setSort]=useState(false)
    const {fav,setFav}=useContext(Context)
    const navigate=useNavigate()

    useEffect(()=>{
        axios.get("http://localhost:4000/products/")
        .then(res=>setdata(res.data))
    },[])

    const handlesearch=(value)=>{
        const searched=data.filter(x=>x.name.toLowerCase().includes(value.toLowerCase()))
        setdata(data)      
    }
    const handledelete =(_id)=>{
        axios.delete(`http://localhost:4000/products/${_id}`)
        .then(res=>setdata([...data].filter(x=>x._id!=res.data._id)))
    }
    const handleview=(Id)=>{
        navigate(`view/${Id}`)
    }
    const handlefav=(item)=>{
        if(fav.find(x=>x._id==item._id)){
            alert("Bu Card fav bolmesinde movcuddur")
        }else{
            setFav([...fav,item])
        }
    }

  return (
    <>
    <section id='section2'>
    <div className="container" id='container2'>
        
        <input type="text" placeholder='Search' value={search} onChange={(e)=>setSearch(e.target.value)} id="search" />
        {/* <button onClick={sortbtn}>Filter</button> */}
        <div className='heading'>
    <h2>Practice <span id='span'>Area</span></h2>
    <p id='info'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
    <div className="row">
        {
            sort==false ?
            data
            .filter(item=> search=="" ? data : item.name.toLowerCase().includes(search.toLowerCase()))
            .map((item,index)=>(
        <div className="col-4" style={{flexWrap:"wrap"}}>
            <div className="card"  style={{flexWrap:"wrap"}}>
                <img src={item.img} alt="" />
                <div className="card-body">
                    <h2>{item.name}</h2>
                    <p>{item.about}</p>
                    <div style={{display:"flex"}}>
                    <button onClick={()=>handledelete(item._id)}>Delete</button>
                    <button onClick={()=>handleview(item._id)}>View</button>
                    <button onClick={()=>handlefav(item)}>Fav</button>
                    </div>
                    
                </div>
            </div>
        </div>

            )):
            data.map((item,index)=>(
                <div className="col-4"  style={{flexWrap:"wrap"}}>
                    <div className="card"  style={{flexWrap:"wrap"}}>
                        <img src={item.img} alt="" />
                        <div className="card-body">
                            <h2>{item.name}</h2>
                            <p>{item.about}</p>
                            <div style={{display:"flex"}}>
                    <button onClick={()=>handledelete(item._id)}>Delete</button>
                    <button onClick={()=>handleview(item._id)}>View</button>
                    <button onClick={()=>handlefav(item)}>Fav</button>
                    </div>

                        </div>
                    </div>
                </div>
        
                    ))
        }
    </div>
    </div></section>
    </>
  )
}

export default Cards