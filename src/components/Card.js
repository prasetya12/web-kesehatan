import {
  Card,
  Button,
} from "react-bootstrap";

const Blog = (props) => {
  return (
    <Card>
      <Card.Img alt="Card image cap" src={props.image} />
      <Card.Body>
        <Card.Title tag="h5">{props.title}</Card.Title>
        <Card.Subtitle>{props.subtitle}</Card.Subtitle>
        <Card.Text className="mt-3">{props.text}</Card.Text>
        <Button color={props.color}>Read More</Button>
      </Card.Body>
    </Card>
  );
};

export default Blog;
