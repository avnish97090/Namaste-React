// import {useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu = () =>{

    // const [resInfo , setresInfo] = useState(null); 

    const {resId} = useParams(); 

    const resInfo = useRestaurantMenu(resId);

//  useEffect(()=>{
//   fetchMenu();
//  },[]);


//  const fetchMenu = async () => {
//      const data =  await fetch (MENU_API+resId+"&catalog_qa=undefined&submitAction=ENTER");
//      const json =await  data.json() ;
//     //  console.log(json);  

//      setresInfo(json.data);
//  }

 if (resInfo===null) return<Shimmer/> ;


 const {name, cuisines , costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info ;

//  const {itemCards} = 
//   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card ;
  
//  console.log(itemCards); 

// console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards) ;  

// const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
//   .filter((c) =>
//     c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
//   );

const categorey = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  .filter((c) =>
    c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
    c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
  );

console.log(categorey);

return (
  <div className="text-center">
    <h1 className="font-bold my-6 text-2xl">{name}</h1>
    <p className="font-bold text-lg">
      {cuisines.join(",")} - {costForTwoMessage}
    </p>
    {/* {categorey.map((category, index) => (
      category.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ? (
        <RestaurantCategory key={index} data={category?.card?.card} />
      ) : (
        <RestaurantCategory key={index} data={category?.card?.card?.categories} />
      )
    ))} */}




    {categorey.map((category)=>{
        return <RestaurantCategory key={category.card?.card?.title} data ={category.card?.card}/>
    })}
  </div>
)
      };

export default RestaurantMenu;