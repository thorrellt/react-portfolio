import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


export default function ProjectCard(props) {
    const imgName = 'card-img-cc.jpg'
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
                    <div class="data">
                        <div class="content">
                            <Card.Title
                                className='ms-3'>Card Title</Card.Title>
                            <Card.Subtitle
                                className="mb-3 text-muted ms-3">Card Subtitle</Card.Subtitle>
                            <Row
                            className='mx-2'>
                                <Col className='text-center fs-1'>
                                    <i class="portfolio-icons devicon-android-plain" />
                                </Col>
                                <Col className=' fs-1 text-center'>
                                    <i class="devicon-android-plain" />
                                </Col>
                                <Col className=' fs-1 text-center'>
                                    <i class="devicon-android-plain" />
                                </Col>
                                <Col className=' fs-1 text-center'>
                                    <i class="devicon-android-plain" />
                                </Col>

                            </Row>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}