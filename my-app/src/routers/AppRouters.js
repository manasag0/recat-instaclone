import React from 'react' ;
import { BrowserRouter, Route , Routes} from "react-router-dom";

export default function AppRouters() {
  return <BrowserRouter>
  <Routes>
    
  <Route path ="/" element ={<LandingComponent />} />
  <Route path ="post" element ={<Post />} />
  <Route path ="new" element ={<LandingComponent />}/>
  <Route path ="all" element ={<LandingComponent />}/>
  </Routes>
  </BrowserRouter>
}
