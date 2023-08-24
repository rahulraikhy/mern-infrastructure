import sendRequest from './send-request';
const BASE_URL = '/api/notes';

export async function addNote(newNote) {
    return sendRequest(`${BASE_URL}/addnote`, 'POST', newNote);
}

export async function getNote() {
    return sendRequest(`${BASE_URL}/getnote`)
}