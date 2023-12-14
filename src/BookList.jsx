import Button from 'react-bootstrap/Button';

export default function BookList({ books, onDelete, onEdit }) {

    console.log(books);
  const handleDelete = (bookId) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      onDelete(bookId);
    }
  };

  return (
    <ul>
      {books.map(book => (
        <li key={book._id} style={{ margin: '10px 0' }}>
          <strong>{book.title}</strong>
          {/* Include more details here if needed */}
          <div style={{ marginTop: '5px' }}>
            <Button variant="danger" onClick={() => handleDelete(book._id)} style={{ marginRight: '5px' }}>
              Delete
            </Button>
            <Button variant="info" onClick={() => onEdit(book)}>
              Edit
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
}
