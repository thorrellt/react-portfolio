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
                imgName={projCard.imgName}
                stackIcons={projCard.stackIcons}
            />
        )
    })

    return (
        <section className='container-fluid position-relative bg-secondary' id='Projects'>
            <h2 className='mt-5 mb-3 text-center'>
                Projects</h2>
            <Container className='gy-5 mx-auto row'>
                {projCardElements}
            </Container>

        </section>

    )

}