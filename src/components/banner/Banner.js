import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import "./Banner.css";
import headerImg from "./header-img.jpg";

const Banner = () => {
  return (
    <section className='banner' id='home'>
        <Container>
            <Row className='align-items=center row'>
                <Col xs={12} md={6} xl={7}>
                    <span className='tagline'>Welcome to my portfolio</span>
                    <h1>Hi I'm Mark Oladeinde</h1>
                    <p>Web developer as well as self-motivated content writer with years of experience in the edutech sector, seeking to use my creative skills to increase customer engagement by creating valuable content. I am seeking to collaborate with clients to create attractive websites that increase their brand’s awareness and market their products effectively.</p>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={ headerImg } alt="" />
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner