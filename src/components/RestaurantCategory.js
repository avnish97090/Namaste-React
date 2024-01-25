// import { useState } from "react";
import ItemList from "./ItemList";  

const RestaurantCategory = ({data , showItems , setShowIndex}) =>{
//   console.log(data);   
// const [showItems , setShowItems] = useState(false);  
const handleclick =() => { 
    
    setShowIndex(); 
}; 
   return  (
    <div>
<div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 ">
    <div className="flex justify-between cursor-pointer"
    onClick={handleclick} 
    >
<span className=" font-bold text-lg">
    {data.title} ({data?.itemCards?.length || data?.categories?.length})</span>
            <span>{showItems ? "⬆️" : "⬇️"}</span>


</div>

{showItems && <ItemList items = {data?.itemCards || data?.categories} />}


</div>

</div>
    );
};

export default RestaurantCategory ;


  