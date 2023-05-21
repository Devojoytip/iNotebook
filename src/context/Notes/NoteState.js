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
                "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ2NjZlMTMzOWQ0NTJmMWNkNzY3MzRkIn0sImlhdCI6MTY4NDQzNDUxM30.oh71fxy165qC0VZ74Ai7SFK1fot5GB-0YzruBIop360"
            }
        });

        const json = await response.json();
        console.log(json)
        setNotes(json)
    }

    const addNote = (title, description, tag) => {
        const note =
        {
            "_id": "9967db05aee38756abc1c041",
            "user": "64666e1339d452f1cd76734d",
            "title": title,
            "description": description,
            "tag": tag,
            "date": new Date().toLocaleString(),
            "__v": 0
        };
        console.log('Note created', note)
        setNotes(notes_arr.concat(note))
    }

    const deleteNote = (id) => {
        const newnotes = notes_arr.filter((note) => note._id !== id)
        console.log(`Note with id ${id} deleted`)
        setNotes(newnotes)
    }

    const editNote = (id, title, description, tag) => {
        for (let index = 0; index < notes_arr.length; index++) {
            const element = notes_arr[index];
            if (element._id == id) {
                element.tag = tag;
                element.description = description;
                element.title = title;
            }
        }
    }

    return (
        <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, fetchNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;