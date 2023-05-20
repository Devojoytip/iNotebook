import React, { useContext } from 'react'
import NoteContext from '../context/Notes/NoteContext';
import NoteItem from './NoteItem';
import { CardGroup } from 'react-bootstrap';

const Notes = () => {
    const context = useContext(NoteContext);
    const { notes, setNotes } = context;
    return (
        <div className="container my-3">
            {
                <CardGroup >

                    {notes.map((note) => {
                        return <NoteItem key={note._id} note={note} ></NoteItem>
                    })}
                </CardGroup>
            }
        </div>
    )
}

export default Notes
