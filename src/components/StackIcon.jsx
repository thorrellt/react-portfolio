import Col from 'react-bootstrap/Col';



export default function StackIcon(props) {
    return (
        <Col className='portfolio-icons  fs-1 text-center' title={props.title}>
            <i className={props.className} />
        </Col>
    )

}