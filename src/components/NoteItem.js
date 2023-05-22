import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import NoteContext from '../context/Notes/NoteContext';


const NoteItem = (props) => {
  const { note, updateNote } = props;
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  return (
    <>
    {/* <div className="card" style={{ width: '10rem' }}>
      <div className="card-body">
        <h5 className="card-title">{note.title}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">{note.tag}</h6>
        <p className="card-text">{note.description}</p>
        <Button variant="primary">
          <i className="fa-sharp fa-solid fa-trash" onClick={() => deleteNote(note._id)}></i>
        </Button>
        <Button variant="primary">
          <i className="fa-solid fa-pen-to-square"></i>
        </Button>
      </div>
    </div> */}

    <div className="col">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">
          {note.description}
          </p>
          <Button variant="primary">
          <i className="fa-sharp fa-solid fa-trash" onClick={() => deleteNote(note._id)}></i>
        </Button>
        <Button variant="primary">
          <i className="fa-solid fa-pen-to-square" onClick={()=> updateNote(note._id)}></i>
        </Button>
        </div>
      </div>
  </div>
  </>
  )
}

export default NoteItem
