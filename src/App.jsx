import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Products from './pages/Products'
import Home from './pages/Home'
import Error from './pages/Error'
import SharedLayout from './pages/SharedLayout'
import SingleProduct from './pages/SingleProduct'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import ProtectedRoute from './pages/ProtectedRoute'
import SharedProductLayout from './pages/SharedProductLayout'

function App() {
	const [user, setUser] = useState(null)

	return (
		<BrowserRouter>
			<Routes>
				{/* parent route */}
				<Route path='/' element={<SharedLayout />}>
					<Route index element={<Home />} />
					{/* nested routes */}
					<Route path='about' element={<About />} />
					<Route path='products' element={<SharedProductLayout />}>
						<Route index element={<Products />} />
						<Route
							index
							path=':productId'
							element={<SingleProduct />}
						/>
					</Route>
					<Route path='login' element={<Login setUser={setUser} />} />
					<Route
						path='dashboard'
						element={
							// to access page('dashboard') by some conditions, for ex for enter some page only with login
							<ProtectedRoute user={user}>
								<Dashboard user={user} />
							</ProtectedRoute>
						}
					/>
					<Route path='*' element={<Error />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
