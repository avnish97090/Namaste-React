// const heading =  React.createElement("h1", { id : "heading2" , xyz :"abc"} , "Hello world from React! ")   




// <div id ="parent">
//      <div id = "child">
//         <h1> I'm h1 tag </h1>
        //   <h2> This is sibling </h2>
//      </div>

// <div id = "child">
//          <h1> I'm h1 tag </h1>
//        <h2> This is sibling </h2>
    //       </div>

// </div>


import React  from "react" ;
import  ReactDOM  from "react-dom/client";
const parent = React.createElement("div" , {id :"parent" },[
React.createElement(
    "div" , {id : "child"}, 
    [
    React.createElement("h1", {} , " I'm an h1 tag"),
    React.createElement("h2" , {} , "This is sibling")

    ]),
    React.createElement(
        "div" , {id : "child"}, 
        [
        React.createElement("h1", {} , " I'm an h1 tag"),
        React.createElement("h2" , {} , "This is sibling")
    
        ]),
    ]
);

const root = ReactDOM.createRoot (document.getElementById("root"));
// root.render(heading);
root.render(parent);
