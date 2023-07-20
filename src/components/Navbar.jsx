import { NavLink } from 'react-router-dom'
import Styles from './style.module.css'

export default function Navbar() {
	return (
		<nav className={Styles.navbar}>
			<NavLink className={Styles.navLink} to={'/'}>
				Home
			</NavLink>
			<NavLink className={Styles.navLink} to={'/new-note'}>
				New Note
			</NavLink>
		</nav>
	)
}
