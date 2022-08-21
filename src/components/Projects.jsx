import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectCard from './ProjectCard'
import '../styles/Projects.css'

export default function Projects(props) {
    const stackIcons = ["devicon-android-plain", "devicon-java-plain", "devicon-git-plain", "devicon-docker-plain"]
    return (
        <section className='container-fluid position-relative bg-secondary' id='Projects'>
            <h2 className='mt-5 mb-3 text-center'>
                Projects</h2>
            <Container className='gy-5 mx-auto row'>
                <ProjectCard 
                imgName = 'card-img-cc.jpg'
                stackIcons = {stackIcons}
                />
                <ProjectCard 
                imgName = 'card-img-cc.jpg'
                stackIcons = {stackIcons}
                />
                <ProjectCard 
                imgName = 'card-img-cc.jpg'
                stackIcons = {stackIcons}
                />
                <ProjectCard 
                imgName = 'card-img-cc.jpg'
                stackIcons = {stackIcons}
                />
                
            </Container>

        </section>

    )

}