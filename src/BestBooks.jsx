import Carousel from 'react-bootstrap/Carousel';
import {useEffect, useState} from 'react';


function BestBooks() {
  
  const [books, setBooks] = useState([]);

  useEffect(()=>{
    fetch('/books')
    .then(response => response.json())
    .then(data => setBooks(data))
    .catch(error => console.error('Error:', error));
  }, []);


  /* TODO: Make a GET request to your API to fetch all the books from the database  */



    return (
      <>
        <h2>My Essential Lifelong Learning & Formation Shelf</h2>
  
        {books.length > 0 ? (
          <Carousel>
            {books.map(book => (
              <Carousel.Item key={book.id}>
                <img
                  className="d-block w-100"
                  src={book.imageUrl}
                  alt={book.title}
                />
                <Carousel.Caption>
                  <h3>{book.title}</h3>
                  <p>{book.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    );
  }

export default BestBooks;
