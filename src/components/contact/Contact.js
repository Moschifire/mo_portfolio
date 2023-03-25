import React from 'react';
import "./Contact.css";
import { GoLocation } from 'react-icons/go';
import { AiOutlineMail } from 'react-icons/ai';
import { FaTwitter, FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div id="contact">
        <h1>Connect with me</h1>
        <div id="location">
            <p><GoLocation /> Lagos, Nigeria</p>
            <a className="email" href="mailto:markoladeinde@gmail.com" target="_blank"><AiOutlineMail /> markoladeinde@gmail.com</a>
        </div>
        <div id="social">
            <a id="icon" href="https://twitter.com/SchinoTheRapper" className="btn" target="_blank"><FaTwitter /></a>
            <a id="icon" href="https://github.com/Moschifire" className="btn" target="_blank"><FaGithub /></a>
            <a id="icon" href="https://www.linkedin.com/in/mark-oladeinde-aa21271b2/" className="btn" target="_blank"><FaLinkedin /></a>
            <a id="icon" href="https://drive.google.com/file/d/1TK0QAPoLZyPYpX22MOyJEzltATuZzQbT/view?usp=sharing" className="btn" target="_blank"><FaFileAlt /></a>
        </div>
    </div>
  )
}

export default Contact