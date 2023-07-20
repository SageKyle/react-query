import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import addNote from '../api/addNote'
import Style from '../components/style.module.css'

export default function AddNote() {
	const queryClient = useQueryClient()
	const navigate = useNavigate()

	const [title, setTitle] = useState('')
	const [note, setNote] = useState('')

	const mutation = useMutation({
		mutationKey: ['notes'],
		mutationFn: addNote,
		onSuccess: () => {
			queryClient.invalidateQueries(['notes'])
			setTimeout(() => {
				navigate('/')
			}, 3000)
		},
	})

	function handleSubmit(e) {
		e.preventDefault()
		mutation.mutate({ title, note })
	}

	return (
		<form className={Style.form} onSubmit={handleSubmit}>
			<h1>Add New Note</h1>
			<input
				className={Style.titleInput}
				type="text"
				title="Enter note title"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				placeholder="Note title"
				maxLength={50}
			/>
			<textarea
				className={Style.noteInput}
				value={note}
				onChange={(e) => setNote(e.target.value)}
				required
				title="Note"
				placeholder="Type note here..."
			></textarea>

			<button className={Style.btn}>Add Note</button>
		</form>
	)
}
