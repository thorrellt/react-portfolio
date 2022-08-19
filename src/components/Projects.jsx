import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectCard from './ProjectCard'
import '../styles/Projects.css'

export default function Projects(props){
    return (
        <section className='container-fluid position-relative' id='Projects'>
            <h2 className='mt-5 mb-3 text-center'>
                Projects</h2>
            <ProjectCard />
        </section>
    
    )

}