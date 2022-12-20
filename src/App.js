import React from "react";
import {BrowserRouter as Router,
  routes, Route,useRoutes} from "react-router-dom";

import Home from "./pages/home/Home";
// import Login from "./pages/login/Login";
// import List from "./pages/list/List";
// import Single from "./pages/single/Single";
// import New from "./pages/new/New";
const Raper = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    // { path: "component2", element: <Component2 /> },
    // ...
  ]);
  return routes
}
function App() {
  
  // let routes = useRoutes([
  //   { path: "/", element: <Home /> },
    // { path: "component2", element: <Component2 /> },
    // ...
  // ]);
  
  return( 

        <Router>
            <Raper />
        </Router>


   )
  //   <>
  //   <Home/>
  //   </>
  // )
 
  // let routes = useRoutes([
  //   { path: "/", element: <Component1 /> },
  //   { path: "component2", element: <Component2 /> },
  //   // ...
  // ]);


    
    // );

    // <Routes>
      // {/* // {/* <Route path="/"> */}
      //  {/* <Route path="/" element={<Home />} >  */}
  //      {/* <Route path="login" element={<Login />} />
  // //  <Route path="user">
  // //   <Route index element={<List/>}/>
  // //   <Route path="single" element={<Single/>}/>
  // //   <Route Path="new" element={<New/>}/>
  // //  </Route> */}
      //  </Route>
    //  </Routes>
  
}
// }

export default App;
