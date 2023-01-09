import React from 'react'
import { Button, Col, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt, faImage } from '@fortawesome/free-solid-svg-icons';


const GameForm = (props) => {
    const { game, register, handleSubmit, onSubmit, imageURL, handleImageUpload } = props;
    const { title, img, genre, price, description, developer } = game;

    let image;
    if (imageURL) {
        image = <img
            src={imageURL}
            alt={title}
            className='h-100'
        />
    } else if (img) {
        image = <img
            src={img}
            alt={title}
            className='h-100'
        />
    } else {
        image = <FontAwesomeIcon
            icon={faImage}
            style={{ fontSize: '60px' }}
            className="text-secondary"
        />
    }

    return (
        <Col md={12} className='pt-5 pb-2 px-2 px-md-3'>
            <Form md={12} noValidate onSubmit={handleSubmit(onSubmit)} >

                <Form.Row>
                    <Col md="6" className="mb-4 px-2 px-md-3" >
                        <Form.Control
                            defaultValue={title}
                            className='text-light text__p font-300'
                            name="title"
                            type="text"
                            placeholder="Title"
                            ref={register({ required: true })}
                            required
                        />
                    </Col>

                    <Col md="6" className="mb-4 px-2 px-md-3">
                        <Form.Control
                            defaultValue={genre}
                            className='text-light text__p font-300'
                            name="genre"
                            type="text"
                            placeholder="Genre"
                            ref={register({ required: true })}
                            required
                        />
                    </Col>

                    <Col md="6" className="mb-4 px-2 px-md-3">
                        <Form.Control
                            defaultValue={developer}
                            className='text-light text__p font-300'
                            name="developer"
                            type="text"
                            placeholder="Developer"
                            ref={register({ required: true })}
                            required
                        />
                    </Col>

                    <Col md="6" className="mb-4 px-2 px-md-3">
                        <Form.Control
                            defaultValue={price}
                            className='text-light text__p font-300'
                            name="price"
                            type="number"
                            placeholder="Price"
                            ref={register({ required: true })}
                            required
                        />
                    </Col>

                    <Col md="6" className="mb-4 px-2 px-md-3">
                        <label
                            htmlFor="image"
                            className='d-flex justify-content-center align-items-center image-label text-secondary overflow-hidden'>
                            {image}
                        </label>
                        <input
                            onChange={handleImageUpload}
                            name="image"
                            type="file"
                            id="image"
                            accept="image/*"
                            ref={imageURL ? register({ required: false }) :
                                img ? register({ required: false }) :
                                    register({ required: true })}
                        />
                    </Col>

                    <Col md="6" className="mb-4 px-2 px-md-3">
                        <Form.Control
                            defaultValue={description}
                            style={{ height: '180px', scrollbarWidth: 'none' }}
                            className='text-light text__p font-300'
                            name="description"
                            as="textarea"
                            type="text"
                            placeholder="Description"
                            ref={register({ required: true })}
                            required
                        />
                    </Col>

                    <Col md={12} className="mb-4 px-2 px-md-3">
                        <Button
                            size="sm"
                            variant="primary"
                            type="submit"
                            className="font-300"
                        >
                            <FontAwesomeIcon icon={faCloudUploadAlt} /> Save To Database
                        </Button>
                    </Col>
                </Form.Row>
            </Form>
        </Col>
    )
}

export default GameForm