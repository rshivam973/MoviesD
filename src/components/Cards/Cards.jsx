import { Button, CardGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import "./Cards.css"

function Cards(props) {
  return (
      <Card className="main-card" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
  );
}

export default Cards;