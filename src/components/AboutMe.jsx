import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Skill from './Skill'
import '../styles/AboutMe.css'
import skillsData from '../data/skillsData'

function AboutMe(props) {
  const skillElements = skillsData.map((skill, i) => {
    // console.log(skill)
    return <Skill key={i} title={skill.title} className={skill.className} />
  })

  return (
    <section
      className="container-fluid position-relative bg-white main-section"
      id="AboutMe"
    >
      <h2 className="pt-5 mb-3 text-center">About Me</h2>
      <Row className="container-lg mx-auto px-0">
        <Col xs={12} md={{ span: 7, offset: 0 }} className="">
          <Row id="AboutMe--content" className="gy-5 mx-1 mb-3 pe-5">
            <p>
              In 1999 Red Storm Entertainment released{' '}
              <span className="fst-italic">Rainbow Six</span> for the Nintendo
              64. Immediately it hooked me. At the time, the most polished
              shooter for the console was still{' '}
              <span className="fst-italic">Goldeneye 007</span>, duh. Instead,
              what gripped me was the system in which I controlled my three
              computer teammates. Gaming logic couldn't create the autonomous
              characters that are common today. Red Storm addressed this control
              problem by allowing me, Captain Turner, to determine each
              teammate's every move prior to each mission's start. I would map
              out what paths they would take, assign actions to commands, then
              jump in the field and try it out. I would fail, go back, rethink
              the order in which we would execute actions, alter pathing, change
              the tools used to account for unforeseen problems, and try
              again...and again.....and again.
              <br />
              <br />
              ...This was my introduction to procedural programming and where my
              passion started. And even though it took me almost 2 decades to
              realize this, I did. That is why after 15+ years in public
              relations and customer service, I decided to pursue a career in
              Software Development.
            </p>
          </Row>
        </Col>
        <Col xs={12} md={4} id="skills">
          <h3 className="fw-bold">Education</h3>
          <Row id="education" className="mx-1 mt-2">
            <Container className="mb-3">
              <Row xs="auto" className="mt-2">
                <Col xs={12}>
                  <small id="degree-type">B.S.</small>
                </Col>
                <Col id="degree" className="pe-1">
                  <span id="degree-field" className="h5 fs-6">
                    Computer Science
                  </span>
                </Col>
                <Col className="px-0 lh-1 py-1">
                  <small id="degree-year">2021</small>
                </Col>
              </Row>
              <p id="college-name">Old Dominion University. Norfolk, Va.</p>
            </Container>
          </Row>
          <h3 className="fw-bold pb-3">Skills</h3>
          <Row className="g-3 justify-content-center">{skillElements}</Row>
        </Col>
      </Row>
    </section>
  )
}

export default AboutMe
