import React from "react";
import { Container,Button } from "reactstrap";




const Home = () => {
  return (
    <div>
      <Container className="text-center">
        <h1>Learn React </h1>
        <p>This is the right time to Learn plz dont leave in the middle way</p>

        <Container>
          <Button color="primary" outline>
            Start Using
          </Button>
        </Container>
      </Container>
    </div>
  );
};

export default Home;
