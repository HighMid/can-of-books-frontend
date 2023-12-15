import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function BookFormModal({ show, setShowModal, setBooks, currentBook , API}) {

  const [formData, setFormData] = useState(currentBook || {});
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = currentBook 
        ? await axios.put(`${API}/${currentBook._id}`, formData)
        : await axios.post(API, formData);

      setBooks(prevBooks => currentBook
        ? prevBooks.map(book => book.id === currentBook.id ? response.data : book)
        : [...prevBooks, response.data]
      );

      setShowModal(false);
    } catch (error) {
      setErrorMessage('Failed to process request. Please try again.');
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleClose = () => {
    setShowModal(false);
    setErrorMessage('');
    setFormData({});
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{currentBook ? 'Edit Book' : 'Add New Book'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {errorMessage && <p className="text-danger">{errorMessage}</p>}
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              name="title"
              value={formData.title || ''}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              placeholder="Enter Description"
              name="description"
              value={formData.description || ''}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Author"
              name="author"
              value={formData.author || ''}
              onChange={handleChange}
            />
          </Form.Group>
          {/* Add other fields as needed */}
          <Button variant="primary" type="submit">
            {currentBook ? 'Update' : 'Add'} Book
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default BookFormModal;
