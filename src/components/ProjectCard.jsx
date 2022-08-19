import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


export default function ProjectCard(props) {
    const imgName = 'img-api-banner.jpeg'
    const devImgPath = `/${imgName}`
    const liveImgPath = `/react-portfolio/${imgName}`
    
    function ImageExist(url) {
        var img = new Image();
        img.src = url;
        return img.height != 0;
    }
    const imgPath = ImageExist(devImgPath) ? devImgPath : liveImgPath
    
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body className='p-0'>
                <Card.Img variant="top"
                    src={imgPath} />
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            </Card.Body>
        </Card>
    )
}