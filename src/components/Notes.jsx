import { useMutation, useQueryClient } from '@tanstack/react-query'
import deleteNote from '../api/deleteNote'
import Query from './Query'
import Styles from './style.module.css'

import { BsTrash } from 'react-icons/bs'

export default function Notes() {
	const queryClient = useQueryClient()

	const { data: notes, isFetched, error, isError, isFetching } = Query()

	const mutation = useMutation({
		mutationKey: ['notes', 'single-note'],
		mutationFn: deleteNote,
		onSuccess: () => {
			queryClient.invalidateQueries(['notes'])
		},
	})

	async function deleteNoteFunc(id) {
		mutation.mutate(id)
	}

	isFetched && console.log(notes)

	return (
		<div>
			{isFetching && <h2>Loading...</h2>}
			<ul className={Styles.listContainer}>
				{notes?.map((note) => (
					<li className={Styles.listItem} key={note?.id}>
						<BsTrash
							onClick={() => deleteNoteFunc(note.id)}
							className={Styles.trashIcon}
						/>
						<h5 className={Styles.listHeader}>{note?.title}</h5>
						<p className={Styles.listNote}>{note?.note}</p>
					</li>
				))}
			</ul>
			{notes?.length === 0 && <p>No notes here!</p>}
			{isError && <p className={Styles.error}>{error.message}</p>}
		</div>
	)
}
