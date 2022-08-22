import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styles/ContactMe.css'


export default function ContactMe(props) {

    const [formData, setFormData] = useState({
        id: '',
        email: '',
        message:'',
    });

    const [validated, setValidated] = useState(false);

    const handleChange = (event) =>{
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

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        console.log(form)
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        
        // console.log(form)
        setValidated(true);
    };

    return (
        <section className='container-fluid position-relative bg-primary pb-5' id='ContactMe'>
            <h2 className='pt-5 mb-3 text-center'>
                Contact Me</h2>

            <Container className='pe-5'>
                <Form className='pe-5'>
                    <Form.Group 
                    className="mb-3" 
                    controlId="name"
                    value={formData.name}
                    onChange={handleChange}>
                        <Form.Label>Name</Form.Label>
                        <Form.Control required type="text" placeholder="Enter Name" />
                    </Form.Group>

                    <Form.Group 
                    className="mb-3" 
                    controlId="email"
                    value={formData.email}
                    onChange={handleChange}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control required type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group 
                    className="mb-3" 
                    controlId="message"
                    value={formData.message}
                    onChange={handleChange}>
                        <Form.Label>Enter Message</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>

                    <Button variant="danger" type="submit">
                        Submit
                    </Button>
                </Form>

            </Container>
        </section>
    )
}