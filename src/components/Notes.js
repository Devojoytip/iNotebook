import React, { useContext, useEffect, useRef, useState } from 'react'
import NoteContext from '../context/Notes/NoteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';

const Notes = () => {
    const context = useContext(NoteContext);
    const { notes, fetchNotes, editNote } = context;

    useEffect(() => {
        fetchNotes()
    }, [])

    const ref = useRef(null)
    const refClose = useRef(null)

    const updateNote = (curr_note) => {
        ref.current.click()
        setNote({ id: curr_note._id, etitle: curr_note.title, edescription: curr_note.description, etag: curr_note.tag })
    }

    const { addNote } = context;

    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" })

    const handleClick = (e) => {
        console.log('Updating note')
        editNote(note.id,note.etitle,note.edescription,note.etag)
        refClose.current.click()
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <>
            <AddNote />

            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {/* Edit form */}
                            <form>
                                <div className="form-group">
                                    <label htmlFor="etag">Tag</label>
                                    <input type="text" id="etag" name='etag' className='form-control tag' aria-describedby="emailHelp" placeholder="Enter tag" onChange={onChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="etitle">Title</label>
                                    <input type="text" id="etitle" name='etitle' className='form-control' aria-describedby="emailHelp" placeholder="Enter tag" onChange={onChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="edescription">Description</label>
                                    <textarea className="form-control" name='edescription' id="edescription" rows="3" onChange={onChange} ></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button onClick={handleClick} type="button" className="btn btn-primary">Update Now</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row row-cols-1 row-cols-md-3 g-4" >
                <h1 style={{ width: "80%", position: "relative", left: "10%", textAlign: "center" }}>All your Notes</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4" style={{ width: "80%", position: "relative", left: "10%" }}>


                {notes.map((note) => {
                    return <NoteItem key={note._id} note={note} updateNote={updateNote} ></NoteItem>
                })}

            </div>
        </>
    )
}

export default Notes
