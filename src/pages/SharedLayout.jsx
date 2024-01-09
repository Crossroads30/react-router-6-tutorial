import { Outlet } from 'react-router-dom'
import Navbar from '../component/Navbar'
import StyledNavbar from '../component/StyledNavbar'

//stuff of this component will be inner structure of 'home page', but the own content of home page will be in home page component 
const Home = () => {
	return (
		<>
			<StyledNavbar />
			{/* this will always present in all pages */}
			<Outlet />
			{/* all nested pages */}
		</>
	)
}
export default Home
