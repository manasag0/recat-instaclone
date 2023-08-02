import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import Post from '../PostCreationPage/Post';
import Allposts from "../AllPosts/Allposts";

export default function RouteAll(){
    return (
        <BrowserRouter>
  
        <Routes >
            {/* Home Page */}
            
            <Route path="/" exact element={<LandingPage/>}/>
            <Route path="/post" exact element={<Post />}/>
            <Route path="/posts" exact element={<Allposts />}/>
            {/* <Route path="/" element={<LandingPage/>}/> */}
        </Routes>
        </BrowserRouter>
        )
}
