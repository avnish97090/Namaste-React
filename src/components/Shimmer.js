// const Shimmer = () => {
//     return (
//     <div className="shimmer-container ">
//        {Array(20).fill("").map((e , index)=>
//          <div  key = {index} className="shimmer-card"></div>
//        )}
//     </div>
//     );
// };
// export default Shimmer;




const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      {Array(20).fill("").map((e, index) => (
        <div key={index} className=" bg-gray-200 p-4 m-4 border w-40 h-40 rounded-md shadow-md"></div>
      ))}
    </div>
  );
};

export default Shimmer;
