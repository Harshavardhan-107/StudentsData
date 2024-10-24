import React from "react";
import { Container, Row, Card,Col} from "react-bootstrap";
import './About.css'
function About() {
  const allStudents = [
    { id: 101, profile: "./images/img1.png", name: "Harsha T", avg: "85" },
    { id: 102, profile: "./images/img2.png", name: "Ganga S", avg: "75" },
    { id: 103, profile: "./images/img3.png", name: "Vishnu M", avg: "84" },
    { id: 104, profile: "./images/img4.png", name: "Saketh P", avg: "62" },
    { id: 105, profile: "./images/img5.png", name: "Venkat N", avg: "75" },
    { id: 106, profile: "./images/img6.png", name: "Vivek D", avg: "80" },
  ];
  return (
    <>
      <section>
        <Container>
          <Row>
            <h1 className="display-3 text-center">About us page</h1>
          </Row>
          <Row className="pt-5">
            {allStudents.map((student) => (
              <Col sm={6} md={4} key={student.id}>
                <Card>
                  <Card.Img
                    variant="top"
                    src={student.profile}
                    className="d-block img-rounded mx-auto imgoriginal"
                  />
                  <Card.Body>
                    <Card.Title>{student.name}</Card.Title>
                    <Card.Text>
                      <h3>{student.id}</h3>
                    </Card.Text>
                    <Card.Text>{student.avg}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default About;
