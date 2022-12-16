import {
  Card,
  Button,
} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function Blog (props) {
  return (
    <Card>
      <Card.Img alt="Card image cap" src={props.image} />
      <Card.Body>
        <Card.Title tag="h5">{props.title}</Card.Title>
        <Card.Subtitle>{props.subtitle}</Card.Subtitle>
        <Card.Text className="mt-3">{props.text}</Card.Text>
        <Link to={'/detail'}><Button color={props.color}>Read More</Button></Link> 
      </Card.Body>
    </Card>
  );
};