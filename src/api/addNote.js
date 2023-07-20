import axios from 'axios'

const baseURL = 'http://localhost:3000/notes'

export default async function addNote(note) {
	const id = Math.floor(Math.random())

	const json = await axios.post(baseURL, {
		id,
		title: note.title,
		note: note.note,
	})
	const result = json.data
	console.log(result)

	return result
}
