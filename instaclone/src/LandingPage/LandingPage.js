import React from 'react';
import home from '../images/home.png';
import { Link } from 'react-router-dom';
import Post from '../PostCreationPage/Post';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function LandingPage(){
    return(
        <div>
            <Container>
                  <Row>
        <Col><img src={home} alt='Insta clone page'/></Col>
        <Col> <div className='landing-page'>
           
           <h1>10x team 04</h1>
           <div className="component">
           <Link to={Post}><Button variant="primary">Enter</Button></Link>
            </div>
           </div>
           </Col>
                 </Row>
           </Container>
        </div>
    )

}