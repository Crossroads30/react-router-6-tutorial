import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Products from './pages/Products'
import Home from './pages/Home'
import Error from './pages/Error'

function App() {
	return (
		<BrowserRouter>
			<Routes>
					{/* parent route */}
				<Route path='/' element={<Home />}>
					{/* nested routes */}
					<Route path='/about' element={<About />} />
					<Route path='/products' element={<Products />} />
					<Route path='*' element={<Error />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
