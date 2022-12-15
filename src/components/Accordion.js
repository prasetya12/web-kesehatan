import Accordion from 'react-bootstrap/Accordion';

function AccordionBasic(props) {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item>
        <Accordion.Header>{props.header}</Accordion.Header>
        <Accordion.Body>
          {props.body}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionBasic;