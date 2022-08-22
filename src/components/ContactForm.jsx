import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import '../styles/ContactMe.css'


export default function ContactForm(props) {
    const {
        formData,
        validated,
        handleChange,
        handleSubmit
    } = props

    return (
        <Form className='pe-5' noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group
                className="mb-3"
                controlId="name"
                value={formData.name}
                onChange={handleChange}>
                <Form.Label>Name</Form.Label>
                <Form.Control required type="text" placeholder="Enter Name" />
                <Form.Control.Feedback
                    type="invalid"
                    className='text-light'>
                    Please provide your name.
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group
                className="mb-3"
                controlId="email"
                value={formData.email}
                onChange={handleChange}>
                <Form.Label>Email</Form.Label>
                <Form.Control required type="email" placeholder="Enter email" />
                <Form.Control.Feedback
                    type="invalid"
                    className='text-light'>
                    Please provide a valid email.
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group
                className="mb-3"
                controlId="message"
                value={formData.message}
                onChange={handleChange}>
                <Form.Label>Enter Message</Form.Label>
                <Form.Control required as="textarea" rows={3} />
                <Form.Control.Feedback type="invalid"
                    className='text-light'>
                    Please enter a message.
                </Form.Control.Feedback>
            </Form.Group>

            <Button variant="danger" type="submit">
                Submit
            </Button>
        </Form>
    )

}