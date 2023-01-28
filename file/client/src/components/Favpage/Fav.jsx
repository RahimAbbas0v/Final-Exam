import React, { useContext } from "react";
import { Context } from "../../context/favitems";

function Fav() {
  const { fav, setFav } = useContext(Context);
  const handledelete=(id)=>{
      console.log('fav',fav)
      let delitem =fav.filter(x=>x._id!=id)
      console.log('deleted item',delitem)
      setFav(delitem)
  }
  return (
    <><div className="container">
        <h2 style={{textAlign:"center"}}>YOUR FAVORITE PRODUCTS</h2>
      <div className="row">
        {fav.map((item, index) => (
          <div className="col-4">
            <div className="card">
              <img src={item.img} alt="" />
              <div className="card-body">
                <h2>{item.name}</h2>
                <p>{item.about}</p>
                <div style={{ display: "flex" }}>
                <button onClick={()=>handledelete(item._id)}>Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div></div>
    </>
  );
}

export default Fav;
