import Col from 'react-bootstrap/Col';



export default function StackIcon(props) {
    console.log(props.iconName)
    return (
        <Col className='portfolio-icons  fs-1 text-center'>
            <i className={props.iconName} />
        </Col>
    )

}