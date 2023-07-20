import axios from 'axios'

const baseURL = 'http://localhost:3000/notes'

export default async function editNote(id, newNote) {
	const result = await axios.put(`${baseURL}/${id}`, newNote)

	console.log('updated successfully')

	return result
}
