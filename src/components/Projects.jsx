import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectCard from './ProjectCard'
import '../styles/Projects.css'
import projCardData from '../data/projectCardData'

export default function Projects(props) {

    const projCardElements = projCardData.map((projCard, i) => {
        return (
            <ProjectCard
                key = {i}
                title1={projCard.title1}
                title2={projCard.title2}
                type={projCard.type}
                description = {projCard.description}
                imgName={projCard.imgName}
                liveURL = {projCard.liveURL}
                gitURL = {projCard.gitURL}
                takeaways = {projCard.takeaways}
                stackIcons={projCard.stackIcons}
            />
        )
    })

    return (
        <section className='container-fluid position-relative bg-secondary pb-5' id='Projects'>
            <h2 className='pt-5 mb-3 text-center'>
                Projects</h2>
            <Container className='project--cards gy-5 mx-auto row'>
                {projCardElements}
            </Container>

        </section>

    )

}