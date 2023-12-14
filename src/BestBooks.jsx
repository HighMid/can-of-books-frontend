import Carousel from 'react-bootstrap/Carousel';
import { useEffect, useState } from 'react';
import axios from 'axios';
import BookFormModal from './BookFormModal';
import BookList from './BookList';

function BestBooks() {
  
  const [books, setBooks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentBook, setCurrentBook] = useState(null);

  const API = import.meta.env.VITE_SERVER

  useEffect(() => {
    fetchBooks();
  }, []);

  async function fetchBooks() {
    try {
      const response = await axios.get(API);
      setBooks(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  }

  const deleteBook = (bookId) => {
    axios.delete(`/books/${bookId}`)
      .then(() => {
        setBooks(prevBooks => prevBooks.filter(book => book.id !== bookId));
      })
      .catch(error => console.error('Error deleting book:', error));
  };

  const handleAddBook = () => {
    setCurrentBook(null); 
    setShowModal(true);
  };

  const handleEditBook = (book) => {
    setCurrentBook(book);
    setShowModal(true);
  };

  const handleDeleteBook = async (bookId) => {
    try {
      console.log(bookId);
      await axios.delete(`https://can-of-books-backend-cdrn.onrender.com/books/${bookId}`);
      setBooks(books.filter(book => book._id !== bookId));
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  // TODO: Request Book data from API

  return (
    <div>
      <h2>My Essential Lifelong Learning & Formation Shelf</h2>
      <button onClick={() => handleAddBook()}>Add Book</button>
      {showModal && <BookFormModal show={showModal} setShowModal={setShowModal} setBooks={setBooks} currentBook={currentBook} API={API}/>}
      {books.length > 0 ? (
        <Carousel>
          {books.map(book => (
            <Carousel.Item key={book._id}>
              <img
                className="d-block w-100"
                src={book.imageUrl}
                alt={book.title}
              />
              <Carousel.Caption>
                <h3>{book.title}</h3>
                <p>{book.description}</p>
                <button onClick={() => deleteBook(book.id)}>Delete</button>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <h3>No Books Found :(</h3>
      )}
      <BookList books={books} onDelete={handleDeleteBook} onEdit={handleEditBook} />
    </div>
  );
}

export default BestBooks;
