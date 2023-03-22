import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import "./Banner.css";
import headerImg from "./header-img.jpg";

const Banner = () => {
  return (
    <section className='banner' id='home'>
        <Container>
            <Row className='align-items=center'>
                <Col xs={12} md={6} xl={7}>
                    <span className='tagline'>Welcome to my portfolio</span>
                    <h1>Hi I'm Mark Oladeinde</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor bibendum volutpat. Suspendisse dignissim metus vel velit vehicula, vel fermentum metus laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sagittis at velit id tincidunt. Vestibulum tincidunt ante et tellus suscipit mollis. Duis volutpat diam massa, a volutpat erat luctus sed. Quisque laoreet vehicula aliquam. Aliquam id ligula sem. Proin tristique dolor eget diam finibus imperdiet. Nunc in lacus elementum, maximus lectus in, fringilla nibh. Nullam pretium lacinia aliquam. Praesent purus nibh, dignissim quis est placerat, pretium venenatis ex. In ultrices ex a tortor dictum sagittis. Sed vel ipsum sapien.</p>
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