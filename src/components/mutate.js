import { useMutation, useQueryClient } from '@tanstack/react-query'
import addNote from '../api/addNote'

export default function Mutate() {
	const queryClient = useQueryClient()

	const mutation = useMutation({
		mutationKey: ['notes'],
		mutationFn: addNote,
		onSuccess: () => {
			queryClient.invalidateQueries(['notes'])
		},
	})

	return mutation
}
