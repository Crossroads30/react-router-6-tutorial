import { Link, useParams } from 'react-router-dom'
import products from '../data'

const SingleProduct = () => {
	const { productId } = useParams()
	const product = products.find(product => product.id === productId)
	const { name, image } = product

	return (
		<section className='section product'>
			<div>
				<h5>{name}</h5>
				<img src={image} alt={name} />
			</div>
			<Link to='/products'>back to product</Link>
		</section>
	)
}

export default SingleProduct
