import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert';
import './Admin.css'

const Admin = () => {
  const { register, handleSubmit, errors } = useForm();
  const [imageURL, setIMageURL] = useState(null);


  const onSubmit = data => {
    const eventData = {
      gameName: data.gameName,
      genre: data.genre,
      price: Number(data.price),
      imageURL: imageURL
    };
    const url = `https://obscure-crag-81002.herokuapp.com/admin/addgame`;

    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(eventData)
    })
      .then(res => {
        console.log('server side response', res);
        if (res) {
          swal({
            title: "Good job!",
            text: "You added the game to database!",
            icon: "success",
            button: "Close",
          });
        }
      });
  };

  const handleImageUpload = event => {
    //console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key', '51794bdd439c0ef7fc6590b2dd17c754');
    imageData.append('image', event.target.files[0]);

    axios.post('https://api.imgbb.com/1/upload',
      imageData)
      .then(function (response) {
        setIMageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  return (
    <>
      <Container fluid>
        <Row>
          <Col md={4} sm={12} className="grid" >
            <Sidebar />
          </Col>
          <Col md={8} sm={0} id="page-content-wrapper">
            <h1>Add game</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Row className="mb-4">
                <Col>
                  <Form.Control name="gameName" type="text" placeholder="Enter Game name" ref={register({ required: true })} />
                  {errors.gameName && <span style={{color: 'red'}}>This field is required</span>}
                </Col>
                <Col>
                  <Form.Control name="genre" type="text" placeholder="Genre Type" ref={register({ required: true })} />
                  {errors.genre && <span style={{color: 'red'}} >This field is required</span>}
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                  <Form.Control name="price" type="text" placeholder="Enter Price" ref={register({ required: true })} />
                  {errors.price && <span style={{color: 'red'}}>This field is required</span>}
                </Col>
                <Col>
                  <Form.File name="image" onChange={handleImageUpload} id="custom-file"label={ imageURL ? imageURL : "Custom file input" } custom ref={register({ required: true })} />
                  {errors.image && <span style={{color: 'red'}}>This field is required</span>}
                </Col>
              </Form.Row>
              <Form.Row className="mt-4">
                <Col>
                  <Button variant="primary" type="submit">
                  <FontAwesomeIcon icon={faSave} /> Save To Database
                  </Button>
                </Col>
              </Form.Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Admin;