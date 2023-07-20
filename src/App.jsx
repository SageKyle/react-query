import './App.css'
import Styles from './components/style.module.css'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import AddNote from './pages/AddNote'
import EditNote from './pages/EditNote'
import Home from './pages/Home'

function App() {
	return (
		<>
			<main className={Styles.container}>
				<Router>
					<Navbar />

					<Routes>
						<Route element={<Home />} path="/" />
						<Route element={<AddNote />} path="/new-note" />
						<Route element={<EditNote />} path="/edit-note/:id" />
					</Routes>
				</Router>
			</main>
		</>
	)
}

export default App
