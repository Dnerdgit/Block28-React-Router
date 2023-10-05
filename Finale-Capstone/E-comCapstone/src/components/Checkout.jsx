import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import './styles/checkout.css'
import { Container, Row, Col, Card, Form } from "react-bootstrap";

import React from 'react'

export default function Checkout() {
  return (
    <div>
      <div className="py-3 bg-warning">
        <Container className="container">
          <h6>Home / Checkout</h6>
        </Container>
      </div>

      <div className="py-4">
        <Container className="container">
          <Row className="row">


            <div className="card-page">
              <div className="card-header">
                <header className='checkout-title'>Checkout Form</header>
              </div>

            <div className="card-body">
              <div className="card-row">
                <Col md={6} className="col-md-6">
                  <Form.Group mb={3} className="form-group mb-3">
                      <Form.Label >First Name</Form.Label>
                      <Form.Control type="text" name="firstname" className="form-control"/>
                  </Form.Group>
                </Col>

                <Col md={6} className="col-md-6">
                  <Form.Group mb={3} className="form-group mb-3">
                      <Form.Label >Last Name</Form.Label>
                      <Form.Control type="text" name="lastname" className="form-control"/>
                  </Form.Group>
                </Col>

                <Col md={6} className="col-md-6">
                  <Form.Group mb={3} className="form-group mb-3">
                      <Form.Label >Phone Number</Form.Label>
                      <Form.Control type="text" name="phone" className="form-control"/>
                  </Form.Group>
                </Col>

                <Col md={6} className="col-md-6">
                  <Form.Group mb={3} className="form-group mb-3">
                      <Form.Label >First Name</Form.Label>
                      <Form.Control type="text" name="email" className="form-control"/>
                  </Form.Group>
                </Col>

                <Col md={6} className="col-md-6">
                  <Form.Group mb={3} className="form-group mb-3">
                      <Form.Label >Address</Form.Label>
                      <textarea rows="3" className="form-control"></textarea>
                  </Form.Group>
                </Col>

                <Col md={4} className="col-md-4">
                  <Form.Group mb={3} className="form-group mb-3">
                      <Form.Label >City</Form.Label>
                      <Form.Control type="text" name="city" className="form-control"/>
                  </Form.Group>
                </Col>

                <Col md={4} className="col-md-4">
                  <Form.Group mb={3} className="form-group mb-3">
                      <Form.Label >State</Form.Label>
                      <Form.Control type="text" name="state" className="form-control"/>
                  </Form.Group>
                </Col>

                <Col md={4} className="col-md-4">
                  <Form.Group mb={3} className="form-group mb-3">
                      <Form.Label >Zipcode</Form.Label>
                      <Form.Control type="text" name="zipcode" className="form-control"/>
                  </Form.Group>
                </Col>

                <Col md={12} className="col-md-12">
                  <div className="form-group text-end">
                      <Form.Label >First Name</Form.Label>
                      <button type="button" className="btn btn-primary">Place Order</button>
                  </div>
                </Col>

              </div>
            </div>
          </div>
          </Row>
        </Container>
      </div>
    </div>
  )
}

