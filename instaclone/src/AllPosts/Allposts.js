import React from "react";
import icon from '../images/icon.png';
import Camera from '../images/Camera.png';
import { Link } from "react-router-dom";
import Post from '../PostCreationPage/Post'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
// import Allposts from '../AllPosts/Allposts';
// import useState from "react";
// import { Redirect } from "react-router-dom";
import Heart from '../images/Heart.png';

export default function AllPosts() {
  const sampleData = [
    {
      name: "Siva",
      location: "Mezoram",
      PostImage: "instaclone/src/images/mezoram.jpg",
      likes: 64,
      description: "Heaven !!",
    
      date: new Date(),
    },
    {
      name: "Neeraj",
      location: "Munnar",
      PostImage: "instaclone/src/images/munnar.jpg",
      likes: 30,
      description: "God's own city",
     
      date: new Date(),
    },
    {
      name: "Rahul",
      location: "Ladhakh",
      PostImage: "instaclone/src/images/motivational.jpg",
      likes: 30,
      description: "Sample Description for Post",

      date: new Date(),
    }
  ];

  return (
    <div className="main-container">
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand><div className="logoName"><img src={icon} alt="logo" /><span>InstaClone</span></div></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Link to={Post}><img src={Camera} alt="camera-icon" /></Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div>
        {sampleData.map((post, index) => (
          <div key={index}>
            <h2>{post.name}</h2>
            <p>Location: {post.location}</p>
            <img src={post.PostImage} alt="Post Image" />
            <p><img src={Heart} alt="like" /> {post.likes}</p>
            <p>Description: {post.description}</p>
            <p>Date: {post.date.toString()}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  )
}
