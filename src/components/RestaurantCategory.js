import ItemList from "./ItemList"; 

const RestaurantCategory = ({data}) =>{
//   console.log(data);   

   return  (
    <div>
<div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 ">
    <div className="flex justify-between" >
<span className=" font-bold text-lg">
    {data.title} ({data?.itemCards?.length || data?.categories?.length})</span>
<span>⬇️</span>

</div>

<ItemList items = {data?.itemCards || data?.categories} />


</div>

</div>
    );
};

export default RestaurantCategory ;