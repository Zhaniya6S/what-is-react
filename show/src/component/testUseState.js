import React, { useState } from "react";
import { Button, Card } from "react-bootstrap"; // Ensure these components are imported

export default function Component() {
  const getInitialState = () => true;
  const [visible, setVisibility] = useState(getInitialState);

  const handleClick = () => {
    setVisibility((currentValue) => !currentValue);
  };

  return (
    <div className="container">
      <h1>What is React?</h1>

      <Button variant="primary" onClick={handleClick}>
        Show
      </Button>

      {visible && (
        <Card>
          <Card.Body> A JavaScript library with virtual DOM</Card.Body>
        </Card>
      )}
    </div>
  );
}
