import { Link, Outlet } from 'react-router-dom'
import Navbar from '../component/Navbar'

const Home = () => {
	return (
		<>
			<Navbar />
			<section className='section'>
				<Outlet />
			</section>
		</>
	)
}
export default Home
