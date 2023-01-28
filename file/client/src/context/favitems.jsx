import { createContext, useState } from "react";

export const Context=createContext()
const Contextdata=({children})=>{
    const[fav,setFav]=useState([])
    const data={
        fav,setFav
    }
    return <Context.Provider value={data}>{children}</Context.Provider>
}
export default Contextdata;