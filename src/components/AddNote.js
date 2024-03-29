import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useState } from "react";
import NoteContext from '../context/Notes/NoteContext';

const AddNote = () => {
    const context = useContext(NoteContext);
    const {addNote} = context;

    const [note, setNote] = useState({ title: "", description: "", tag: "" })

    const handleClick = (e) => {
        e.preventDefault()
        addNote(note.title,note.description,note.tag)
        setNote({ title: "", description: "", tag: "" })
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <div className='container my-3'>
            <h1>Add Notes</h1>

            <form>
                <div className="form-group">
                    <label htmlFor="tag">Tag</label>
                    <input type="text" id="tag" name='tag' className='form-control tag' aria-describedby="emailHelp" placeholder="Enter tag" onChange={onChange} minLength={5} required value={note.tag}/>
                </div>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name='title' className='form-control' aria-describedby="emailHelp" placeholder="Enter tag" onChange={onChange} minLength={5} required value={note.title}/>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" name='description' id="description" rows="3"onChange={onChange} minLength={5} required value={note.description}></textarea>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>

        </div>
    )
}

export default AddNote
