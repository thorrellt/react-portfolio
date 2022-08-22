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

    const { imgName, stackIcons, title1, title2, type, description } = props

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

    const modalImgName = 'modal-img-mc311.jpg'
    const devModalImgPath = `/${modalImgName}`
    const liveModalImgPath = `/react-portfolio/${modalImgName}`

    function imageExist(url) {
        var img = new Image();
        img.src = url;
        return img.height != 0;
    }
    const imgPath = imageExist(devImgPath) ? devImgPath : liveImgPath

    const modalImgPath = imageExist(devModalImgPath) ? devModalImgPath : liveModalImgPath


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

            <Modal 
            show={show} 
            onHide={handleClose} 
            size="lg">
                <Modal.Header closeButton className='position-relative p-0 overflow-hidden'>
                    <img src={modalImgPath} alt="" className='img-fluid' />
                    <Modal.Title
                    className='modal--title position-absolute top-5 start-5'>{`${title1} ${title2}`}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{description}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Col>


    )
}