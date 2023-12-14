import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function CreateForm({ onBookCreate }) {

    const [bookData, setBookData] = useState({
        title: '',
        author: '',
        description: ''
    });

    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (event) => {
        setBookData({ ...bookData, [event.target.name]: event.target.value });
        setErrorMessage(''); // Clear error message on new input
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!bookData.title || !bookData.author || !bookData.description) {
            setErrorMessage('Please fill in all fields');
            return;
        }

        try{
            const response = await axios.post('https://can-of-books-backend-sdh5.onrender.com/books', bookData);

            console.log('Book Created ! ! !', response);

            onBookCreate(bookData);
            setBookData({ title: '', author: '', description: '' });

        }catch(error){
            console.error('Error creating book:', error);
        }

    };

    const handleCancel = () => {
        setBookData({ title: '', author: '', description: '' });
        setErrorMessage(''); // Clear error message
    };

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                {errorMessage && <p className="text-danger">{errorMessage}</p>}

                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter book title" 
                        name="title"
                        value={bookData.title}
                        onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Author</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter author's name" 
                        name="author"
                        value={bookData.author}
                        onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={3} 
                        placeholder="Enter book description" 
                        name="description"
                        value={bookData.description}
                        onChange={handleChange} />
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>
                <Button variant="secondary" onClick={handleCancel}>Cancel</Button>
            </Form>
        </div>
    );
}

export default CreateForm;
