import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const NoteItem = (props) => {
    const {note} = props;
  return (
    <Card style={{ width: '10rem', margin: "1.5rem", border:'2px solid black' }}>
      <Card.Body>
        <Card.Title>{note.title}</Card.Title>
        <Card.Text>
          {note.description}
        </Card.Text>
        <div className="my-3">
            
        <Button variant="primary">
        <i className="fa-sharp fa-solid fa-trash"></i>
        </Button>   
        <Button variant="primary">
        <i className="fa-solid fa-pen-to-square"></i>
        </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default NoteItem
