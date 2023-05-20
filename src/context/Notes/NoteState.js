import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
    const notes_arr = [
        {
            "_id": "64666e8c39d452f1cd767355",
            "user": "64666e1339d452f1cd76734d",
            "title": "Trip",
            "description": "Shillong",
            "tag": "Tour",
            "date": "2023-05-18T18:29:32.949Z",
            "__v": 0
        },
        {
            "_id": "64666ea939d452f1cd767357",
            "user": "64666e1339d452f1cd76734d",
            "title": "Study",
            "description": "DSA and dev",
            "tag": "study",
            "date": "2023-05-18T18:30:01.799Z",
            "__v": 0
        },
        {
            "_id": "6467db05aee37736d561c041",
            "user": "64666e1339d452f1cd76734d",
            "title": "Shopping",
            "description": "D-Mart",
            "tag": "home",
            "date": "2023-05-19T20:24:37.814Z",
            "__v": 0
        }
    ]
    
    const [notes, setNotes] = useState(notes_arr)

    const addNote=(title,description,tag)=>{
        const note=
        {
            "_id": "9967db05aee38756abc1c041",
            "user": "64666e1339d452f1cd76734d",
            "title": title,
            "description": description,
            "tag": tag,
            "date": new Date().toLocaleString(),
            "__v": 0
        };
        console.log('Note created',note)
        setNotes(notes_arr.concat(note))
    }

    const deleteNote=(id)=>{
        const newnotes=notes_arr.filter((note)=>note._id!==id)
        console.log(`Note with id ${id} deleted`)
        setNotes(newnotes)
    }

    return (
        <NoteContext.Provider value={{notes,setNotes,addNote,deleteNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;