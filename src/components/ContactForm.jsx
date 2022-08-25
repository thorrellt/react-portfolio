import { useState, useRef, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import ReCAPTCHA from "react-google-recaptcha";
import '../styles/ContactMe.css'



export default function ContactForm(props) {
    const testKey = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
    const liveKey = '6Ld2ZaghAAAAAKd4cPR8aXZ8ZgtiBF0gJIORCaCS'
    const {
        formData,
        validated,
        handleChange,
        handleSubmit,
        formElement: formElement,
    } = props

    function onChange() {
        console.log('success')
    }




    return (
        <Form ref={formElement} className='pe-5' noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group
                className="mb-3"
                controlId="name"
                value={formData.name}
                onChange={handleChange}
                name="name">
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
                onChange={handleChange}
                name="email">
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
                onChange={handleChange}
                name="message">
                <Form.Label>Enter Message</Form.Label>
                <Form.Control required as="textarea" rows={3} />
                <Form.Control.Feedback type="invalid"
                    className='text-light'>
                    Please enter a message.
                </Form.Control.Feedback>
            </Form.Group>

            <ReCAPTCHA
                sitekey='6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
                theme='dark'
                onChange={onChange}
            />

            <Button variant="danger" type="submit">
                Submit
            </Button>
        </Form>
    )

}