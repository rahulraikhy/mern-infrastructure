import { checkToken } from "../../utilities/users-api";
import { useState, useEffect } from "react";
import * as noteAPI from "../../utilities/notes-api";
import NoteCard from "../../components/NoteCard/NoteCard";

export default function OrderHistoryPage() {

    return (
        <>
            <h1>OrderHistoryPage</h1>
            <button onClick={handleCheckToken}>Check When My Login Expires</button>
        </>
    )
}