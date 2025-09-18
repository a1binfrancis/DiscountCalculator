import { useState } from "react";
import { Container, Row, Col, Form, Card, Button } from "react-bootstrap";

export default function App() {
  const [price, setPrice] = useState("");
  const [disc, setDisc] = useState("");
  const [final, setFinal] = useState(null);

  const calculateDiscount = () => {
    if (!price || !disc) return;
    const discounted = price - (price * disc) / 100;
    setFinal(discounted.toFixed(2));
  };

  const resetFields = () => {
    setPrice("");
    setDisc("");
    setFinal(null);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="p-4 shadow">
            <h2 className="text-center mb-4">Discount Calculator</h2>

            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Discount (%)</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter discount %"
                  value={disc}
                  onChange={(e) => setDisc(e.target.value)}
                />
              </Form.Group>

              <div className="d-flex gap-2">
                <Button
                  variant="primary"
                  className="w-50"
                  onClick={calculateDiscount}
                >
                  Calculate
                </Button>
                <Button
                  variant="secondary"
                  className="w-50"
                  onClick={resetFields}
                  style={{ backgroundColor: '#cce5ff', color: '#000' }}
                >
                  Reset
                </Button>
              </div>

              {final !== null && (
                <div className="text-center fs-4 fw-bold text-success mt-4">
                  Final Price is : ₹{final}
                </div>
              )}
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}