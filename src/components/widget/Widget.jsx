import React from "react";

import "./widget.scss";


const widget = () => {
  
   return (
     <div className="widgets">
       <div className="widget item1">
         <p>Volume</p>
         <h4>480</h4>
         <hr />
         <p>Keyword Difficulty</p>
         <h4>46%</h4>
         {/* <p>Possible Slightly more complicated.</p> */}
         <p>possible</p>
         <p>
           Slightly more cometition. you'll need well-structured<br/>and unique
           content appropriately optimized for your keywords
         </p>
         {/* <p className="m-1">{val.rating}</p> */}
       </div>
       <div className="widget item2">
         <p>Intent</p>
       </div>
       <div className="widget item3">
         <p>Results</p>
         <h4>313M</h4>
       </div>
       <div className="widget item4">
         <p>CPU</p>
         <h6>$0.12</h6>
       </div>
     </div>
   );
};

export default widget;
