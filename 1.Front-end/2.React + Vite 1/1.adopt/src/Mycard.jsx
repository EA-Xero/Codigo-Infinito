import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css'
import Tags from './tags';
function Mycard({ba ="new",bg = "light", texto, image = "http://placekitten.com/g/200/300", title = "kitten", tb = "Go somewhere", tc = "primary"}) {
    return (
        <div style={{margin: "10px"}}>
            <Card style={{ width: "18rem" }}>
                <Card.Img style={{objectFit: "cover"}} variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                        <Card.Text>{texto}</Card.Text>
                    <Button style={{width: "100%"}} variant={tc}>{tb}</Button>
                    <Tags bg={bg} ba={ba} />
                </Card.Body>
            </Card>
        </div>
    );
}
export default Mycard