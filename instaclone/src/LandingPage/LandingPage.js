import React from 'react';
import home from '../images/home.png';
import { Link } from 'react-router-dom';
import All from '../PostsPage/All';

export default function LandingPage(){
    return(
        <div>
            <div className='landing-page'>
           <img src={home} alt='Insta clone page'/>
           <h1>10x team 04</h1>
           <Link to={All}><button>Enter</button></Link>
           </div>
        </div>
    )

}