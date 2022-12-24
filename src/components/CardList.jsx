import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function CardList({ title, img, rate, date }) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} style={{ height: "428px" }} />
        <Card.Body>
          <Card.Title> {title}</Card.Title>
          <Card.Text>
            <h5> ⭐:{rate}</h5>
            <h5>{date}</h5>
          </Card.Text>
          <Button variant="danger">watch here</Button>{" "}
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardList;
