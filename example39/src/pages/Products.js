import {Link} from 'react-router-dom';

const Products = () => {
    return (
        <section>
            <h1> The Product Page </h1>

            <ul> 
                <li> 
                    <Link to="/product-detail/p1">A Book </Link></li>
                <li><Link to="/product-detail/p2">A Carpet </Link></li>
                <li><Link to="/product-detail/p3">An Online Course </Link></li>
            </ul>
        </section>
    );
};

export default Products;