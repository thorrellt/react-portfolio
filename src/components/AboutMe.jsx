import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Skill from './Skill'
import SkillsData from '../data/skillsData'

import '../styles/AboutMe.css'
import skillsData from '../data/skillsData';

function AboutMe(props) {
    const skillElements = skillsData.map((skill, i) => {
        return (
            <Skill
            key = {i} 
            title = {skill.title}
            className = {skill.className}
            />
        )
    })
    return (
        <section className='container-fluid position-relative' id='AboutMe'>
            <h2 className='my-5 text-center'>
                About Me</h2>
            <Row className='container mx-5 '>
                <Col className='mx-2 gx-5'>
                    <Row>
                        <p>
                            I have always excelled at, &amp enjoyed, being more of a logical problem solver &amp tinkerer. So, after 15+ years in public relations &amp customer service I decided to pursue a career in Software Development.
                        </p>
                    </Row>
                    <Row id='education'>
                        <h3>Education</h3>

                    </Row>
                </Col>
                <Col id='skills'>
                    <h3>Skills</h3>
                    <Row className='g-3'>
                        {skillElements}
                        
                    </Row>



                </Col>
            </Row>

        </section>
    )

}

export default AboutMe