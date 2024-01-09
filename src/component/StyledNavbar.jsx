import { NavLink } from 'react-router-dom'

const StyledNavbar = () => {
	return (
		<nav className='navbar'>
			{/* styles for active link with inline styles */}
			<NavLink
				to='/'
				style={({ isActive }) => {
					return { color: isActive ? 'gold' : 'gray' }
				}}
			>
				Home
			</NavLink>
			{/* styles for active link with adding css classes */}
			<NavLink
				to='/about'
				className={({ isActive }) => (isActive ? 'link active' : 'link')}
			>
				About
			</NavLink>
			<NavLink
				to='/products'
				className={({ isActive }) => (isActive ? 'link active' : 'link')}
			>
				Product
			</NavLink>
			<NavLink
				to='/login'
				className={({ isActive }) => (isActive ? 'link active' : 'link')}
			>
				Login
			</NavLink>
		</nav>
	)
}
export default StyledNavbar
