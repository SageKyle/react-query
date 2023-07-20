import { useQuery } from '@tanstack/react-query'
import fetchNotes from '../api/FetchNotes'

export default function Query() {
	const { data, error, isFetched, isError, isFetching } = useQuery({
		queryKey: ['notes'],
		queryFn: fetchNotes,
		refetchOnWindowFocus: false,
		refetchOnMount: false,
	})

	return { data, error, isFetched, isError, isFetching }
}
