import { useState } from 'react'
import editNote from '../api/updateNote'

export default function EditNote(note) {
	const [title, setTitle] = useState(note?.title)
	const [_note, setNote] = useState(note?.note)

	async function handleSubmit(e) {
		e.preventDefault()
		await editNote(note?.id, { title, _note })
	}

	return (
		<form onSubmit={handleSubmit}>
			<h1>Edit Note</h1>
			<input
				type="text"
				title="Enter note title"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				placeholder="Note title"
			/>
			<textarea
				value={note}
				onChange={(e) => setNote(e.target.value)}
				required
				title="Note"
				placeholder="Type note here..."
			></textarea>

			<button>Add Note</button>
		</form>
	)
}
