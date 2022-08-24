import { useState, useRef } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import ContactForm from './ContactForm';
import '../styles/ContactMe.css'
import emailjs from '@emailjs/browser';


export default function ContactMe(props) {

    const [formData, setFormData] = useState({
        id: '',
        email: '',
        message: '',
        submitted: false,
    });

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [validated, setValidated] = useState(false);

    const handleChange = (event) => {
        const id = event.target.id;
        const value = event.target.value;

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [id]: value
            }
        })
        console.log(formData)
    }
    const formElement = useRef();

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        

        console.log("form2:: " + formElement.current)
    
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            console.log("ran as true")
            event.preventDefault();
            handleShow();
            emailjs.sendForm('thorrellt.com', 'template_6y3kszf', formElement.current, 'od55Vqedr_y5-XmDj')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            setFormData(() => {
                return {
                    id: '',
                    email: '',
                    message: '',
                    submitted: true,
                }
            })
        }
        setValidated(true);
    };



    const submittedText = (
        <div className="submisison--text">
            <p>Thanks form reaching out, I will follow up with you as soon as possible!!</p>
            <p>-Thorrell</p>
        </div>
    )

    return (
        <section className='container-fluid position-relative bg-primary pb-5 main-section' id='ContactMe'>
            <h2 className='pt-5 mb-3 text-center'>
                Contact Me</h2>

            <Container className='pe-5'>
                {!formData.submitted && <ContactForm
                    formData={formData}
                    validated={validated}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    formElement={formElement}
                />
                }

                {formData.submitted && <div className="submisison--text">
                    <h6 className='fs-6 font-weight-bold'>Thanks form reaching out, I will follow up with you as soon as possible!!</h6>
                    <p className='fs-6'>-Thorrell</p>
                </div>
                }




                <Modal show={show} onHide={handleClose}>
                    <Modal.Body>Your submission was successful!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

            </Container>
        </section>
    )
}