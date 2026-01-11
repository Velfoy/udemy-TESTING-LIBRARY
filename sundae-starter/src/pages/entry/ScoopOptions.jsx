import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useOrderDetails } from "../../contexts/OrderDetails";
export default function ScoopOptions({ name, imagePath }) {
  const { updateItemCount } = useOrderDetails();
  const [value, setValue] = useState(0);
  const handleChange = (event) => {
    const currentValue = event.target.value;
    setValue(currentValue);
    updateItemCount(name, parseInt(currentValue), "scoops");
  };
  return (
    <Col
      xs={12}
      sm={6}
      md={4}
      lg={3}
      style={{ textAlign: "center" }}
      className="scoop-item"
    >
      <img
        style={{ width: "75%" }}
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} scoop`}
      />
      <Form.Group
        controlId={`${name}-count`}
        as={Row}
        style={{ marginTop: "10px" }}
      >
        <Form.Label column xs="6" style={{ textAlign: "right" }}>
          {name}
        </Form.Label>
        <Col xs="5" sm="4" md="3" lg="2">
          <Form.Control
            type="number"
            value={value}
            onChange={handleChange}
            min={0}
            max={10}
          />
        </Col>
      </Form.Group>
    </Col>
  );
}
