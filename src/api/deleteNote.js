import axios from 'axios'

const baseURL = 'http://localhost:3000/notes'

export default async function deleteNote(id) {
	await axios.delete(`${baseURL}/${id}`)

	console.log('deleted successfully')

	return
}
