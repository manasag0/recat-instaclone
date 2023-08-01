import React from 'react';
import home from '../../images/home';
import {link} from "react-router-dom";

export default function Landing() {
  return (
    <div className="home-content">
        <div className="landing-img">
                <img src={home} alt='Landing-image'/>
                <div className='landing-content'>
                    <h1>10x Team 04</h1>
                    <link to ={"post/all"}>
                        <button>
                            Enter
                        </button>
                    </link>
                </div>
            </div>
        </div>

  )
}
