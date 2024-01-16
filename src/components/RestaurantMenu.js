import {useState, useEffect } from "react";
import Shimmer from "./Shimmer";
// import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
const RestaurantMenu = () =>{

    const [resInfo , setresInfo] = useState(null);

    const {resId} = useParams(); 

 useEffect(()=>{
  fetchMenu();
 },[]);


 const fetchMenu = async () => {
     const data =  await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7076743&lng=77.0972752&restaurantId="+ resId+ "&catalog_qa=undefined&submitAction=ENTER");
     const json =await  data.json() ;
    //  console.log(json);  

     setresInfo(json.data);
 }

 if (resInfo===null) return<Shimmer/> ;


 const {name, cuisines , costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info ;

 const {itemCards} = 
  resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card ;
  
 console.log(itemCards);

    return  (
        <div className="menu">
            <h1>{name}</h1>
            <p>
                {cuisines.join( ",")} - {costForTwoMessage}
            </p>
            <h2>Menu</h2>
            <ul>
           {itemCards.map((item)=>(
            <li key={item.card.info.id}>
                {item.card.info.name} -{"Rs."}{(item.card.info.price)/100}
            </li>
           ))}
            </ul>
        </div>
    );
};

export default RestaurantMenu ;