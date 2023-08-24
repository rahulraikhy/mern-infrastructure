import { checkToken } from "../../utilities/users-api";
import { useState, useEffect } from "react";
import * as noteAPI from "../../utilities/notes-api";
import NoteCard from "../../components/NoteCard/NoteCard";

export default function OrderHistoryPage({ user }) {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState({
        text: '',
        user: user._id
    })

    async function handleCheckToken() {
        const expDate = await checkToken();
        console.log(expDate);
    }

    function handleChange(evt) {
        setNewNote({ ...newNote, [evt.target.name]: evt.target.value })
    }

    async function handleNote(evt) {
        evt.preventDefault();
        const addedNote = await noteAPI.addNote(newNote);
        setNotes([...notes, addedNote]);
        setNewNote({
            text: '',
            user: user._id
        });
    }

    async function getNote() {
        const allNotes = await noteAPI.getNote();
        setNotes(allNotes);
    }

    useEffect(() => {
        getNote()
    }, [])

    return (
        <>
            <h1>OrderHistoryPage</h1>
            {/* <button onClick={handleCheckToken}>Check When My Login Expires</button> */}
            <form action="">
                <h1>Notes</h1>
                <div className="input-container">
                    <input type="text" placeholder="add note" name="text" value={newNote.text} onChange={handleChange} />
                    <div className="submit-btn">
                        <button type="submit" onClick={handleNote}>+ Add Note</button>
                        {notes.length
                            ? notes.map((note, idx) => (<NoteCard key={idx} note={note} />))
                            :
                            'No Notes Yet'}
                    </div>
                </div>
            </form>
        </>
    )
}