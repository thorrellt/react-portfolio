import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import StackIcon from './StackIcon';


export default function ProjectCard(props) {
    /**
     * PROPS
     */
    const {imgName, stackIcons} = props
    const iconElements = stackIcons.map((icon, i) => {
        return (
            <StackIcon
                key={i}
                className={icon.className}
                title = {icon.title}
            />
        )
    })



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
            <Card className='ProjectCard p-0 mx-auto' style={{ width: '18rem' }}>
                <Card.Body className='p-0 position-relative'>
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
        </Col>
    )
}