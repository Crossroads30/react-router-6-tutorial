import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Products from './pages/Products'
import Home from './pages/Home'
import Error from './pages/Error'

function App() {
	return (
		<BrowserRouter>
			<nav>Our Navbar</nav>
			<Routes>
					{/* parent route */}
				<Route path='/' element={<Home />}>
					{/* nested routes */}
					<Route path='about' element={<About />} />
					<Route path='Products' element={<Products />} />
					<Route path='*' element={<Error />} />
				</Route>
			</Routes>
			<footer>Our Footer</footer>
		</BrowserRouter>
	)
}

export default App
