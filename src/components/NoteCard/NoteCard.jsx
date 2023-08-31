

export default function NoteCard({ note }) {
    return (
        <div>{note.text}{note.createdAt}</div>
    )
}