import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Skill(props) {
    const {title, className} = props
    // console.log(props)

    return (
        <Col xs={6} sm={3} md={4} lg={3} className='text-center' 
        alt={`${title} Icon`} 
        title={title} >
            <Row>
                <i className={`skill-icon text-center ${className}`}></i>
            </Row>
            <Row>
                <small className='my-2'>{title}</small>
            </Row>
        </Col>
    )
}