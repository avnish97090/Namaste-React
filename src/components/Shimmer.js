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
    <div className="shimmer-container bg-gray-200 p-4 rounded-md shadow-md">
      {Array(20).fill("").map((e, index) => (
        <div key={index} className="shimmer-card h-4 bg-gray-300 rounded my-2"></div>
      ))}
    </div>
  );
};

export default Shimmer;
