import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        position: "relative",
        bottom: "0",
        display: "flex",
        justifyContent:'center',
      }}>
      <Container>
        <Row>
          <Col className='text-center py-3'>Copyright &copy; NotesKeeper</Col>
        </Row>
        <Row className='text-center py-3' style={{fontWeight:"600",}}>Created By :Ayush Uniyal</Row>
      </Container>
    </footer>
  )
}

export default footer