import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import StackIcon from './StackIcon';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


export default function ProjectCard(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { imgName, stackIcons, title1, title2, type } = props

    //Building Stack Icon Section
    const iconElements = stackIcons.map((icon, i) => {
        return (
            <StackIcon
                key={i}
                className={icon.className}
                title={icon.title}
            />
        )
    })



    /**
     * Logic to properly path image location
     * on live vs dev build
     */
    const devImgPath = `/${imgName}`
    const liveImgPath = `/react-portfolio/${imgName}`

    function ImageExist(url) {
        var img = new Image();
        img.src = url;
        return img.height != 0;
    }
    const imgPath = ImageExist(devImgPath) ? devImgPath : liveImgPath


    return (
        <Col
            xs={12}
            md={6}
            xl={4}
            className='px-auto'
        >
            <Card onClick={handleShow} className='ProjectCard p-0 mx-auto' style={{ width: '18rem' }}>
                <Card.Body className='p-0 position-relative'>
                    <div className="project--title position-absolute top-5 start-5 ">
                        <h3>{`${title1}\n${title2}`}</h3>
                        <p>{type}</p>
                    </div>
                    <Card.Img variant="top"
                        src={imgPath} />
                    <div className="data position-absolute bg-dark">
                        <div className="content">
                            <Row className='mx-2 mt-1'>
                                {iconElements}
                            </Row>
                            <Card.Text className='px-3 pb-3'>
                                Click for more info
                            </Card.Text>
                        </div>
                    </div>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Care Corner is an Android application that served as the senior team project for my CS degree. This prototype served as my team's proof of concept for our application designed to increase the user's safety</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Col>


    )
}