import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import Post from '../PostCreationPage/Post';

export default function RouteAll(){
    return (
        <BrowserRouter>
        <Routes >
            {/* Home Page */}
            <Route path="/" element={<LandingPage/>}/>
            <Route path="post" element={<Post/>}/>
            {/* <Route path="posts" element={<Post/>}/>
            <Route path="/" element={<LandingPage/>}/> */}
        </Routes>
        </BrowserRouter>
        )
}
