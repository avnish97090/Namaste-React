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
// root.render(parent);



const jsxfile = <h1 id = "heading" className="head"> its is a jsx file </h1>


const jsxfile2 = (<h1 id = "heading2" className="head1"> 
its is a jsx file2 </h1>);  // for mutiple line we wrap up jsx into ()

// root.render(jsxfile2);



const Headingcomponent = () => {
   return  <div id = " container">
   <h1> Namaste React Functional component 1 </h1>
   <Headingcomponent2/>
   <Headingcomponent3/>
   </div>
};

const Headingcomponent2 = () => (
    <div id = "container ">
<h1>Namaste react Functional component 2</h1>
<Headingcomponent3/>
</div>
);


const Headingcomponent3 = () => (
    <div id = "container ">
    <h1 className="heading">Namaste React Component 3 </h1>
    
    </div>
);   // for mutiple line we wrap up with ()


root.render(<Headingcomponent/>);
