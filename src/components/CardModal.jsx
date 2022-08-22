import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import StackIcon from './StackIcon';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


export default function CardModal(props) {
    // Props
    const {
        title1,
        title2,
        description,
        type,
        takeaways,
        stackIcons,
        liveURL,
        gitURL
    } = props.props

    const { show, handleClose, handleShow, modalImgPath } = props

    const takeawayListElements = takeaways.map((takeaway, i) => {
        return (
            <li key={i} >
                <span className='fw-bold'>{`${takeaway.title} `}</span>
                <small>
                    {takeaway.content}
                </small>
            </li>
        )
    })

    const iconElements = stackIcons.map((icon, i) => {
        return (
            <StackIcon
                key={i}
                className={icon.className}
                title={icon.title}
            />
        )
    })


    return (
        <Modal
            show={show}
            onHide={handleClose}
            size="lg">
            <Modal.Header closeButton className='position-relative p-0 overflow-hidden'>
                <img src={modalImgPath} alt="" className='img-fluid' />
                <div
                    className='modal--title position-absolute top-5 start-5 pt-2'>
                    <h5 className='mb-0'>{`${title1} ${title2}`}</h5>
                    <small>{type}</small>
                </div>
            </Modal.Header>
            <Modal.Body>
                <Row className='modal--stack'>
                    {iconElements}
                </Row>
                <p>{description}</p>
                <h5>Some Key Takeaways</h5>
                <ul className='pe-5'>{takeawayListElements}</ul>


            </Modal.Body>
            <Modal.Footer className='d-flex'>
                {liveURL &&
                <a
                    href={liveURL}
                    className="repo btn btn-danger me-auto" 
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Visit repo for thorrellt.com">
                    <i class="bi bi-globe"></i> Live
                </a>}

                <a
                    href={gitURL}
                    className="repo btn btn-primary mx-1" 
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Visit repo for thorrellt.com">
                    <i class="devicon-github-original colored"></i> GitHub
                </a>

                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}