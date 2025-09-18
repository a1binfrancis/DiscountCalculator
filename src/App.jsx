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
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1f1f2e, #121217)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <Card
        className="p-4 shadow"
        style={{
          background:
            "rgba(30, 30, 40, 0.7)",
          backdropFilter: "blur(15px)",
          borderRadius: "1rem",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          color: "#eee",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <h2 className="text-center mb-4" style={{ color: "#ddd" }}>
          Discount Calculator
        </h2>

        <Form>
          <Form.Group className="mb-3">
            <Form.Label style={{ color: "#bbb" }}>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              style={{
                backgroundColor: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#eee",
                boxShadow: "none",
              }}
              className="form-control"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{ color: "#bbb" }}>Discount (%)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter discount %"
              value={disc}
              onChange={(e) => setDisc(e.target.value)}
              style={{
                backgroundColor: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#eee",
                boxShadow: "none",
              }}
              className="form-control"
            />
          </Form.Group>

          <div className="d-flex gap-2">
            <Button
              variant="dark"
              className="w-50"
              onClick={calculateDiscount}
              style={{
                background:
                  "linear-gradient(135deg, #4a90e2, #357ABD)",
                border: "none",
                color: "#fff",
                fontWeight: "600",
                boxShadow:
                  "0 4px 15px rgba(58,123,213,0.4)",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "linear-gradient(135deg, #357ABD, #2a5d8f)"}
              onMouseLeave={e => e.currentTarget.style.background = "linear-gradient(135deg, #4a90e2, #357ABD)"}
            >
              Calculate
            </Button>
            <Button
              variant="dark"
              className="w-50"
              onClick={resetFields}
              style={{
                background:
                  "linear-gradient(135deg, #6c757d, #495057)",
                border: "none",
                color: "#ddd",
                fontWeight: "600",
                boxShadow:
                  "0 4px 15px rgba(108,117,125,0.4)",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "linear-gradient(135deg, #495057, #343a40)"}
              onMouseLeave={e => e.currentTarget.style.background = "linear-gradient(135deg, #6c757d, #495057)"}
            >
              Reset
            </Button>
          </div>

          {final !== null && (
            <div
              className="text-center fs-4 fw-bold mt-4"
              style={{ color: "#4ade80" }}
            >
              Final Price is : ₹{final}
            </div>
          )}
        </Form>
      </Card>
    </div>
  );
}