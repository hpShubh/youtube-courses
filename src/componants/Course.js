import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  Container,
} from "reactstrap";

const Course = ({ Course }) => {
  console.log(Course);
  return (
    <Card className="text-center">
      <CardBody>
        <CardSubtitle className="font-weight-bold">{Course.title}</CardSubtitle>
        <CardText>{Course.descrption}</CardText>
      </CardBody>
      <Container className="text-center">
        <Button color="danger">Delete</Button>
        <Button color="warning ml-2">Update</Button>
      </Container>
    </Card>
  );
};

export default Course;
