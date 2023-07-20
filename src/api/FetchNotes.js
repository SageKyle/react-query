import axios from 'axios'

const baseURL = 'http://localhost:3000/notes'

export default async function fetchNotes() {
	const json = await axios.get(baseURL)
	const data = json.data

	// console.log(info)

	return data
}
