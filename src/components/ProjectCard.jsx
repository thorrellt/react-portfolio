import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import CardModal from './CardModal';
import StackIcon from './StackIcon';


/**
 * Logic to properly path image location
 * on live vs dev build
 */
function imageExist(url) {
    var img = new Image();
    img.src = url;
    return img.height != 0;
}

function getImg(imgName) {
    const devPath = `/${imgName}`
    const livePath = `/react-portfolio/${imgName}`
    return imageExist(livePath) ? livePath : devPath
}

export default function ProjectCard(props) {
    // Modal states and methods
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // Props and image paths
    const { 
        title1, 
        title2, 
        type, 
        description,
        liveURL,
        gitURL,
        takeaways, 
        stackIcons, 
    } = props
    const imgName = "card-" + props.imgName
    const modalImgName = "modal-" + props.imgName
    const imgPath = getImg(imgName);
    const modalImgPath = getImg(modalImgName);


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

            <CardModal 
            props = {props}
            modalImgPath = {modalImgPath}
            show = {show}
            handleClose = {handleClose}
            handleShow = {handleShow}
            />
        </Col>
    )
}