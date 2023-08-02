import React from "react";
import icon from '../images/icon.png';
import Camera from '../images/Camera.png';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Allposts from "../AllPosts/Allposts";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';


export default function Post() {
  const [formData, setFormData] = useState({
    author: '',
    location: '',
    description: '',
    image: null,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      name: formData.author,
      location: formData.location,
      likes: 0,
      description: formData.description,
      PostImage: URL.createObjectURL(formData.image),
      date: new Date(),
    };
  //  onAddPost(newPost);
    setFormData({
      author: '',
      location: '',
      description: '',
      image: null,
    });
  };

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'image' ? files[0] : value,
    }));
  };

  return (
    <div>
      <header>
        <nav>
          <Navbar className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="#home">
                <div className="logoName">
                  <img src={icon} alt="logo" />
                  <span>InstaClone</span>
                </div>
              </Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                  <Link to={Post}>
                    <img src={Camera} alt="camera-icon" />
                  </Link>
                </Navbar.Text>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </nav>
      </header>
      <div className="post-creation-body">
        <Form>
          <Form.Control type="file" name="image" onChange={handleChange} />
          <Form.Group controlId="formFile" className="mb-3">
            <Row>
              <Col>
                <Form.Control
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  placeholder="Name"
                />
              </Col>
              <Col>
                <Form.Control
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Location"
                />
              </Col>
            </Row>
            <Col>
              <Form.Control
                size="lg"
                name="description"
                value={formData.description}
                onChange={handleChange}
                type="text"
                placeholder="How is the location"
              />
            </Col>
            <Button type="submit" onAddPost className="btn primary" onClick={handleSubmit}>
              Post
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}
