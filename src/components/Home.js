import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NoteContext from '../context/Notes/NoteContext';

const Home = () => {
  const context=useContext(NoteContext);
  const {Notes,setNotes}=context;
  return (
    <>
      
      <div className='container my-3'>
      <h1>Add Notes</h1>
      <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Tag</Form.Label>
        <Form.Control type="text" placeholder="Personal/Study/Work" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </div>

      <div className="container my-3">
        {
          Notes.map((note)=>{
            return note.title;
          })
        }
      </div>

    </>
  )
}

export default Home