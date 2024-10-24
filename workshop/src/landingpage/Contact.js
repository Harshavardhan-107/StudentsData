// src/landingpage/Contact.js
import React from "react";
import { Container, Row } from "react-bootstrap";

function Contact() {
  return (
    <section>
      <Container>
        <Row>
          <h1 className="text-center my-5">Contact Us</h1>
          <p className="text-center">Feel free to reach out for any inquiries!</p>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;