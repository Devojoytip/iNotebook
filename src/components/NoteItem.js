import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import NoteContext from '../context/Notes/NoteContext';


const NoteItem = (props) => {
    const {note} = props;
    const context=useContext(NoteContext);
    const {deleteNote}=context;
  return (
    <Card style={{ width: '10rem', margin: "1.5rem", border:'2px solid black' }}>
      <Card.Body>
        <Card.Title>{note.title}</Card.Title>
        <Card.Text>
          {note.description}
        </Card.Text>
        <div className="my-3">
            
        <Button variant="primary">
        <i className="fa-sharp fa-solid fa-trash" onClick={()=>deleteNote(note._id)}></i>
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
