import Product from "./Product";
import featured from "../../data/featuredProducts.json"
import { Link } from "react-router-dom";
import useAppContext from "../../useAppContext"

export default function FeaturedProducts() {

    const { setSearchTerm } = useAppContext();

    const handleClick = (title) => {
        setSearchTerm(title)
    }

    const products = featured.map(product => <Product
        key={product.id}
        image={product.image}
        title={product.title}
        description={product.description}
        handleClick={handleClick}
    />)

    return (
        <section className="featured_products">
            <div className="featured_products-text">
                <h1 className="featured_products-title">Our featured products</h1>
                <p className="featured_products-description">Hair accessories by Jenny's Collection to make the perfect daily hairstyle. From fabulous headbands to velvet scrunchies and hair ties, our range of handmade hair accessories has something for every occasion and hair type.
                </p>
                <Link to="/products">
                    <button className="featured_products-button">See All</button>
                </Link>
            </div>

            <div className="products-container">
                {products}
            </div>

        </section>
    )
}