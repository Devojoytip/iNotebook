import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
    const notes_arr = []
    const host = "http://localhost:5000"
    const [notes, setNotes] = useState(notes_arr)

    const fetchNotes = async () => {
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ2NjZlMTMzOWQ0NTJmMWNkNzY3MzRkIn0sImlhdCI6MTY4NDQzNDUxM30.oh71fxy165qC0VZ74Ai7SFK1fot5GB-0YzruBIop360"
            }
        });

        const json = await response.json();
        console.log(json)
        setNotes(json)
    }

    const addNote = async (title, description, tag) => {
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ2NjZlMTMzOWQ0NTJmMWNkNzY3MzRkIn0sImlhdCI6MTY4NDQzNDUxM30.oh71fxy165qC0VZ74Ai7SFK1fot5GB-0YzruBIop360"
            },
            body: JSON.stringify({ title, description, tag })
        });
        const note = await response.json();
        setNotes(notes.concat(note))
    }

    const deleteNote = async (id) => {
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ2NjZlMTMzOWQ0NTJmMWNkNzY3MzRkIn0sImlhdCI6MTY4NDQzNDUxM30.oh71fxy165qC0VZ74Ai7SFK1fot5GB-0YzruBIop360"
            }
        });

        const json = await response.json();
        console.log(json)
        setNotes(json)

        const new_notes = notes.filter((note) => {
            return note._id !== id
        })
        setNotes(new_notes)
    }

    const editNote = async (id, title, description, tag) => {
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ2NjZlMTMzOWQ0NTJmMWNkNzY3MzRkIn0sImlhdCI6MTY4NDQzNDUxM30.oh71fxy165qC0VZ74Ai7SFK1fot5GB-0YzruBIop360"
            },
            body: JSON.stringify({ title, description, tag })
        });

        const json = await response.json();

        let newNotes = JSON.parse(JSON.stringify(notes))
        // Logic to edit in client
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }
        }
        setNotes(newNotes);
    }

    return (
        <NoteContext.Provider value={{ notes, notes_arr, setNotes, addNote, deleteNote, fetchNotes, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;